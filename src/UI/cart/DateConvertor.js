export const dateConvertor=(theDate)=>{
    const dateStr = theDate;
const date = new Date(dateStr);

const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', timeZone: 'UTC' };
const hebrewDate = date.toLocaleDateString('he-IL', options);
return hebrewDate
}