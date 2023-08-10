/**
 * Types
 */
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import type { T_LangShort } from '../types';

export default function translationsAdapter(
    res: Array<QueryDocumentSnapshot<DocumentData>>
): Record<T_LangShort, Record<string, unknown>> {
    return res.reduce<Record<T_LangShort, any>>((acc, lang) => {
        const id: T_LangShort = lang.id as T_LangShort;
        const data: Record<string, any> = lang.data();
        acc[id] = data;
        return acc;
    }, {} as Record<T_LangShort, any>);
}
