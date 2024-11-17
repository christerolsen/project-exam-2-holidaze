// src/utils/calculateDays.js
export const calculateDays = (dateFrom, dateTo) => {
  const startDate = new Date(dateFrom);
  const endDate = new Date(dateTo);
  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
};
