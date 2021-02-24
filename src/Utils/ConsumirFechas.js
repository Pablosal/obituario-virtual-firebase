import moment from "moment";
moment().locale("es");
var startOfWeek = moment().startOf("isoWeek");
var endOfWeek = moment().endOf("isoWeek");
var days = [];
var day = startOfWeek;
const today = moment().format("DD/MM/YYYY");


const createObjectOfDate = (date) => {
  let newObject = {};
  newObject.active = moment(date).format("DD/MM/YYYY") === today ? true : false;
  newObject.date = moment(date).format("DD/MM/YYYY");
  newObject.dayOfWeek = moment(date).format("dddd");

  return newObject;
};
while (day <= endOfWeek) {
  days.push(day.toDate());
  day = day.clone().add(1, "d");
}
export const todayObject = createObjectOfDate(moment(new Date()));

console.log(todayObject);

let newDays = days.map((day) => createObjectOfDate(day));

export default newDays;
