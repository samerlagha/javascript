const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

 export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDay[new Date(dateInFuture).getDay()];
};


