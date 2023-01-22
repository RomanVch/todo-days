export const whatDay = (date: string): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const taskCreat = new Date(date);
  if (today.getDate() === taskCreat.getDate()) {
    return "Today";
  }
  if (today.getDate() + 1 === taskCreat.getDate()) {
    return "Tomorrow";
  } else {
    const [month, day] = date.split("-");
    return `${day}/${month}`;
  }
};
