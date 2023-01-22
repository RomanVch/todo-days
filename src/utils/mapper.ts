export const mapper = {
  getDateForBack(date: Date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date;
    return `${month}-${day}-${date.getFullYear()}`;
  },
};
