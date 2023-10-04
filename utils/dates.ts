import { format, sub } from "date-fns";

type DatesRange = {
  startDate: Date;
  endDate: Date;
};

const calculateDatesRange = ({ startDate, endDate }: DatesRange) => {
  const datesArray: string[] = [];
  let currentDate = endDate;

  while (startDate <= currentDate) {
    datesArray.push(format(new Date(currentDate), "dd MMM"));
    currentDate = sub(currentDate, { days: 1 });
  }

  return datesArray;
};

export { calculateDatesRange };
