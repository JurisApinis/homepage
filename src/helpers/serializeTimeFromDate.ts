/**
 * 
 * @param {Date} date 
 * @returns {string}
 * @description get time from Date object and serialize to time hh:mm
 */
export default function serializeTimeFromDate(date: Date): `${string}:${string}` {
    let min = date.getMinutes().toString();
    let hours = date.getHours().toString();

    if(min.length === 1) min = `0${min}`;
    if(hours.length === 1) hours = `0${hours}`;

    return `${hours}:${min}`;
}
