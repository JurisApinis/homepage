/**
 * 
 * @param {Date} date
 * @returns {String}
 * @description parse Date object to string dd/mm/yy
 */
export default function serializeDate(date: Date): `${string}/${string}/${string}` {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();

    if(day.length === 1) day = `0${day}`;
    if(month.length === 1) month = `0${month}`;

    return `${day}/${month}/${year}`;
}
