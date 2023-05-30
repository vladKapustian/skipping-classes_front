// import { IDataForTimetableLessonCard } from "@/components/TimetableLessonCard";

// const today = new Date(); // get today's date
// const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]; // array of days of week
// const datesOfWeek: string[] = []; // empty array to store dates

// // loop through the next 7 days
// for (let i = 0; i < 7; i++) {
//   const date = new Date(today); // create new date object for current iteration
//   date.setDate(today.getDate() + i); // set date to i days from today

//   const dayOfWeek = daysOfWeek[date.getDay()]; // get day of week for current date
//   const month = date.toLocaleString("default", { month: "long" }); // get month name for current date
//   const day = date.getDate(); // get day of month for current date
//   const year = date.getFullYear(); // get year for current date

//   const dateString = `${dayOfWeek}`; // concatenate date string

//   datesOfWeek.push(dateString); // add date string to array
// }

// export const timeTableCardsData: IDataForTimetableLessonCard[] = [
//     {
//       id: 1,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 302,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[0],
//     },
//     {
//       id: 2,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Щербаков С.М.",
//       classroomNumber: 522,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[0]
//     },
//     {
//       id: 3,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 213,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[2]
//     },
//     {
//       id: 1,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 302,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[1],
//     },
//     {
//       id: 2,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Щербаков С.М.",
//       classroomNumber: 522,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[4]
//     },
//     {
//       id: 3,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 213,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[3]
//     },
//     {
//       id: 1,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 302,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[6],
//     },
//     {
//       id: 2,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Щербаков С.М.",
//       classroomNumber: 522,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[2]
//     },
//     {
//       id: 3,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 213,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[6]
//     },
//     {
//       id: 1,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 302,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[5],
//     },
//     {
//       id: 2,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Щербаков С.М.",
//       classroomNumber: 522,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[4]
//     },
//     {
//       id: 3,
//       lessonName: "Проектирование баз данных",
//       lessonStartTime: new Date(),
//       teacherName: "Серов А.О",
//       classroomNumber: 213,
//       lessonType: "Практика",
//       lessonDate: datesOfWeek[4]
//     },
//     {
//         id: 1,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 302,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[0],
//       },
//       {
//         id: 2,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Щербаков С.М.",
//         classroomNumber: 522,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[0]
//       },
//       {
//         id: 3,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 213,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[3]
//       },
//       {
//         id: 1,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 302,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[4],
//       },
//       {
//         id: 2,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Щербаков С.М.",
//         classroomNumber: 522,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[4]
//       },
//       {
//         id: 3,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 213,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[6]
//       },
//       {
//         id: 1,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 302,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[4],
//       },
//       {
//         id: 2,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Щербаков С.М.",
//         classroomNumber: 522,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[5]
//       },
//       {
//         id: 3,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 213,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[6]
//       },
//       {
//         id: 1,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 302,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[6],
//       },
//       {
//         id: 2,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Щербаков С.М.",
//         classroomNumber: 522,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[7]
//       },
//       {
//         id: 3,
//         lessonName: "Проектирование баз данных",
//         lessonStartTime: new Date(),
//         teacherName: "Серов А.О",
//         classroomNumber: 213,
//         lessonType: "Практика",
//         lessonDate: datesOfWeek[7]
//       },
//   ];
