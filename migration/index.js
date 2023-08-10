/**
 * Greetings
 */
console.log('\x1b[34m----------------------------------------------------------------------------------------');
console.log('\x1b[34m---\x1b[31m##\x1b[34m-------\x1b[31m##\x1b[34m----\x1b[31m######\x1b[34m---\x1b[31m##########\x1b[34m---\x1b[31m######\x1b[34m----\x1b[31m#######\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m#####\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m#\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m------\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m###\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m###\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m#\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m######\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m-----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m---\x1b[31m######\x1b[34m-------\x1b[31m##\x1b[34m-------\x1b[31m######\x1b[34m----\x1b[31m#######\x1b[34m----\x1b[31m#####\x1b[34m---\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m#####\x1b[34m---');
console.log('\x1b[34m----------------------------------------------------------------------------------------');

/**
 * modules.
 */

const DB = require('./DB');
const translations = require('./constants/translations');
const translationSchema = require('./schema/translations.json');
const { Timestamp } = require('firebase/firestore');


(async function() {
    try {
        /**
         * Migrate translations.
         */
        await translations.forEach(async (tr) => {
            try {
                await DB.setData('translations', tr, translationSchema);
                console.log(`\x1b[32m ✅ Translation ${tr} successfully migrated \x1b[0m`);
            } catch (error) {
                console.log(`\x1b[31m ❌ Error on migrate ${tr} translation: ${error} \x1b[0m`)
            }
        });

        /**
         * Migrate class work example.
         */
        await (async function() {
            try {
                await DB.setData('classWorks', 'test', {
                    date: Timestamp.fromDate(new Date(Date.now())),
                    place: 'place',
                    category: 'category',
                });

                console.log(`\x1b[32m ✅ classworks successfully migrated \x1b[0m`);
            } catch (error) {
                console.log(`\x1b[31m ❌ Error on migrate classWork: ${error} \x1b[0m`)
            }
        })();

        /**
         * Migrate feedback example.
         */
        await (async function() {
            try {
                await DB.setData('feedbacks', 'test', {
                    message: 'message',
                    name: 'name',
                    rate: 10
                })

                console.log(`\x1b[32m ✅ feedbacks successfully migrated \x1b[0m`);
            } catch (error) {
                console.log(`\x1b[31m ❌ Error on migrate feedbacks: ${error} \x1b[0m`)
            }
        })();

        /**
         * Success message.
         */
        console.log(`\x1b[32m ✅ Migration complete \x1b[0m`);
    } catch (error) {
        console.log(`\x1b[31m ❌ Error on migrate ${tr} translation: ${error} \x1b[0m`)
    } finally {
        /**
         * Exit.
         */
        process.exit();
    }
})()
