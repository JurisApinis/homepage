/**
 * Helpers
 */
import serializeDate from '../helpers/serializeDate';
import serializeTimeFromDate from '../helpers/serializeTimeFromDate';

/**
 * Types
 */
import type { T_ClassWork } from '../types';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default function classWorksAdapter(docs: Array<QueryDocumentSnapshot>): Array<T_ClassWork> {
    return docs
        .filter((doc: QueryDocumentSnapshot) => {
            const classDate = new Date(doc.data().date.seconds * 1000).getTime();
            const now = Date.now();
            
            return classDate > now;
        })
        .map((doc: QueryDocumentSnapshot) => {
            const id = doc.id;
            const data = doc.data();
            const date = new Date(data.date * 1000);

            return {
                id,
                place: data.place,
                category: data.category,
                date: serializeDate(date),
                time: serializeTimeFromDate(date),
            }
        });
}
