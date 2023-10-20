import moment from "moment";

export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const dataFormatLine = (date) => {
  return moment(date).format("DD/MM");
};
