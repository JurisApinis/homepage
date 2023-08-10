/**
 * Modules
 */
import { initializeApp } from 'firebase/app';
import { FirebaseStorage, getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

/**
 * Constants
 */
import { IMAGES_NAMES } from '../constants/common';

export type T_Collections = 'classWorks' | 'feedbacks' | 'translations';

type T_GetOptions<R = any> = {
    collectionName: T_Collections;
    docsMutation?: (response: Array<QueryDocumentSnapshot<DocumentData>>) => R;
};
class Database {
    //Firestore collections
    public readonly collections = {
        classWorks: 'classWorks',
        feedbacks: 'feedback',
        translations: 'translations',
    };

    // Firestore config
    private readonly config = {
        apiKey: import.meta.env.VITE_FB_API_KEY,
        authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FB_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
        appId: import.meta.env.VITE_FB_APP_ID,
        measurementId: import.meta.env.VITE_FB_MEASUREMENT_UD,
    };

    private firebaseApp: null | ReturnType<typeof initializeApp> = null;
    private fireStore: null | ReturnType<typeof getFirestore> = null;
    private storage: null | FirebaseStorage = null;
    private storageRef: null | any = null;

    private cache: Partial<Record<keyof typeof this.collections, { clear?: any; mutated?: any }>> = {};
    private imagesCache: Partial<Record<IMAGES_NAMES, string>> = {};

    constructor() {
        this.firebaseApp = initializeApp(this.config);
        this.fireStore = getFirestore(this.firebaseApp);
        this.storage = getStorage();
        this.storageRef = ref(this.storage);
    }

    cacheResult<R>(collection: keyof typeof this.collections, data: R, isMutated: boolean): void {
        this.cache[collection] = { ...this.cache[collection], [isMutated ? 'mutated' : 'clear']: data };
    }

    async getData<R = any>(
        options: T_GetOptions<R>
    ): Promise<R | Array<QueryDocumentSnapshot<DocumentData>> | undefined> {
        try {
            if (this.fireStore) {
                const cache = this.cache[options.collectionName];

                if (cache) {
                    return cache[options.docsMutation ? 'mutated' : 'clear'];
                }

                const querySnapshot = await getDocs(collection(this.fireStore, options.collectionName));

                const data: Array<QueryDocumentSnapshot<DocumentData>> = querySnapshot.docs;
                
                this.cacheResult(options.collectionName, data, false);

                if (options.docsMutation) {
                    const mutatedDocs: R = options.docsMutation(data);

                    this.cacheResult<R>(options.collectionName, mutatedDocs, true);

                    return mutatedDocs;
                }

                return data;
            } else {
                throw 'fireStore not initialized';
            }
        } catch (error) {
            console.error(`Promise are rejected, for collection: ${options.collectionName}. Error: ${error}`);
        }
    }

    async getImages(imagesNames: Array<IMAGES_NAMES>): Promise<Partial<Record<IMAGES_NAMES, string>> | undefined> {
        try {
            const images = await listAll(this.storageRef);
            const urlPromises: Array<Promise<string>> = images.items.map((image) => getDownloadURL(image));
            const resolvedUrlPromises = await Promise.all(urlPromises);
            let result: Partial<Record<IMAGES_NAMES, string>> = {};

            resolvedUrlPromises.forEach((url, index) => {
                const name: IMAGES_NAMES = images.items[index].fullPath.split('.')[0] as IMAGES_NAMES;

                if (!this.imagesCache[name]) this.imagesCache[name] = url;

                if (imagesNames.includes(name)) result[name] = this.imagesCache[name];
            });

            return result;
        } catch (error) {
            console.log(`Image loading error: ${error}`);
        }
    }
}

export const DB = new Database();
