/**
 * Types
 */
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import type { T_FeedBack } from '../types';

export default function feedbacksAdapter(docs: Array<QueryDocumentSnapshot<DocumentData>>): Array<T_FeedBack> {
    return docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name,
            message: data.message,
            rate: data.rate,
        } as T_FeedBack;
    });
}
