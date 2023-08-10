/**
 * Modules
 */
import { useMemo, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Components
 */
import CategoryRow from './components/CategoryRow';
import IntroText from '../../common/components/IntroText';
import Text from '../../common/components/Text';
import ClassRow from './components/ClassRow';
import { Form } from '../../common/components/Form';
import Loader from '../../common/components/Loader';
import ReCaptcha from '../../common/components/ReCaptcha';

/**
 * Custom hooks
 */
import usePartialTranslations from '../../hooks/usePartialTranslations';
import useQuery from '../../hooks/useQuery';
import useTranslations from '../../hooks/useTranslations';

/**
 * Services
 */
import sendEmail from '../../service/sendEmail';

/**
 * Helpers
 */
import classWorksAdapter from '../../adapters/classWorksAdapter';

/**
 * Constants
 */
import { emailRegex } from '../../constants/regex';
import { EMAIL_OPTIONS } from '../../constants/common';

/**
 * Types
 */
import type { T_ClassWork } from '../../types';

type T_FormData = { name: string; email: string; phone: string; class: string };

const FORM_DATA: T_FormData = {
    name: '',
    email: '',
    phone: '',
    class: '',
};

const Categories: React.FC = () => {
    const { t } = useTranslations();
    const reCaptchaRef = useRef<null | ReCAPTCHA>(null);
    const categories = usePartialTranslations(['categories', 'list']);
    const tableHead = usePartialTranslations(['categories', 'theory', 'table', 'head']);
    const classWorks = useQuery<Array<T_ClassWork>>('classWorks', classWorksAdapter);

    const validators = useMemo(() => {
        return {
            name: [(val: string) => val.length > 0],
            phone: [(val: string) => val.length > 0],
            email: [(val: string) => !emailRegex.test(val)],
        };
    }, []);

    const selectData = useMemo<Array<string>>(() => {
        if (!classWorks) return [];

        return (classWorks as Array<T_ClassWork>).map((item) => `${item.date} ${item.time} ${item.category}`);
    }, [classWorks]);

    const handleSubmit = async (data: T_FormData): Promise<boolean> => {
        return await sendEmail<T_FormData>({
            ...data,
            option: `${EMAIL_OPTIONS.classwork} ${data.class}`,
            'g-recaptcha-response': reCaptchaRef.current!.getValue(),
        });
    };

    const classWorksTable = useMemo<Array<T_ClassWork>>(() => {
        const result: Array<T_ClassWork> = [tableHead as T_ClassWork];
        if (classWorks) {
            (classWorks as Array<T_ClassWork>).forEach((c) => result.push(c));
        }
        return result;
    }, [classWorks]);

    return (
        <div className="container pt-12 pb-12">
            {Object.values(categories).map((c, i) => (
                <CategoryRow
                    key={`category-${i}`}
                    category={c.category}
                    transport={c.transport}
                    listHeading={c.head}
                    list={c.options}
                    reverse={(i + 1) % 2 === 0}
                />
            ))}

            <IntroText heading={t('categories.theory.heading')} />

            {classWorks ? (
                classWorksTable.map((row, i) => (
                    <ClassRow
                        key={i === 0 ? 'head' : row.id}
                        head={i === 0}
                        item={{
                            category: row.category,
                            time: row.time,
                            date: row.date,
                            place: row.place,
                        }}
                    />
                ))
            ) : (
                <div className="flex jc-center">
                    <Loader />
                </div>
            )}

            <IntroText heading={t('categories.theory.enroll.heading')}>
                <Text type="paragraph" text={t('categories.theory.enroll.text')} textAlign="center" />
            </IntroText>

            <div className="flex jc-center">
                <Form<T_FormData> width={760} data={FORM_DATA}>
                    <div className="flex nowrap sm-wrap xs-wrap jc-sb pb-7 sm-pb-4 xs-pb-4">
                        <div className="wid-33 sm-wid-100 xs-wid-100">
                            <Form.InputField
                                dataKey="name"
                                placeholder={t('common.name') as string}
                                required
                                validators={validators.name}
                            />
                        </div>

                        <div className="wid-33 sm-wid-100 xs-wid-100 mx-8 sm-mx-0 sm-my-4 xs-mx-0 xs-my-4">
                            <Form.InputField
                                dataKey="email"
                                validators={validators.email}
                                errors={[t('errors.wrongEmail')]}
                                placeholder={t('common.email') as string}
                                required
                            />
                        </div>

                        <div className="wid-33 sm-wid-100 xs-wid-100">
                            <Form.InputField
                                dataKey="phone"
                                placeholder={t('common.phoneNumber') as string}
                                required
                                validators={validators.phone}
                            />
                        </div>
                    </div>

                    <div className="flex nowrap jc-center pb-7">
                        <div className="wid-50 pr-6 sm-wid-100 xs-wid-100 sm-pr-0 xs-pr-0">
                            <Form.Select placeholder="Select date" data={selectData} dataKey="class" autoSelectFirst />
                        </div>
                    </div>

                    <div className="flex jc-center pb-7">
                        <ReCaptcha ref={reCaptchaRef} />
                    </div>

                    <div className="flex jc-center">
                        <Form.Submit validators={validators} onSubmit={handleSubmit} extraClasses="wid-100" />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Categories;
