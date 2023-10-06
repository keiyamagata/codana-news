import { sub } from "date-fns";

type DatesRange = {
  startDate: Date;
  endDate: Date;
};

const calculateDatesRange = ({ startDate, endDate }: DatesRange) => {
  const datesArray: Date[] = [];
  let currentDate = endDate;

  while (startDate <= currentDate) {
    datesArray.push(new Date(currentDate));
    currentDate = sub(currentDate, { days: 1 });
  }

  return datesArray;
};

export { calculateDatesRange };
