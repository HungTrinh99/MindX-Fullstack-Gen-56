export const formatDate = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const min = `0${date.getMinutes()}`.slice(-2);
  const sec = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${min}:${sec}`;
};
