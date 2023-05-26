import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./styles.module.scss";
import { TimetableLessonCard, IDataForTimetableLessonCard } from "@/components/TimetableLessonCard";
import { IDataForStudentCard, LessonStudentCard } from "@/components/LessonStudentCard";
import Navbar from "@/components/Navbar";
import { timeTableCardsData } from "@/utils/useTimetableData";
import { DatePicker, DatePickerProps, Select } from "antd";
import locale from "@/utils/useCalendarLocale";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const timetable = timeTableCardsData.map((lessonData) => (
    <TimetableLessonCard key={lessonData.id} dataForCard={lessonData} />
  ));

  const mondayTimetableData: IDataForTimetableLessonCard[] = [];
  const tuesdayTimetableData: IDataForTimetableLessonCard[] = [];
  const wednesdayTimetableData: IDataForTimetableLessonCard[] = [];
  const thursdayTimetableData: IDataForTimetableLessonCard[] = [];
  const fridayTimetableData: IDataForTimetableLessonCard[] = [];
  const saturdayTimetableData: IDataForTimetableLessonCard[] = [];

  for (let i = 0; i < days.length; i++) {
    timeTableCardsData.forEach((cardData) => {
      if (cardData.lessonDate === days[i]) {
        switch (days[i]) {
          case "Понедельник":
            mondayTimetableData.push(cardData);
            break;
          case "Вторник":
            tuesdayTimetableData.push(cardData);
            break;
          case "Среда":
            wednesdayTimetableData.push(cardData);
            break;
          case "Четверг":
            thursdayTimetableData.push(cardData);
            break;
          case "Пятница":
            fridayTimetableData.push(cardData);
            break;
          case "Суббота":
            saturdayTimetableData.push(cardData);
            break;
          default:
            break;
        }
      }
    });
  }

  const mondayTimetable = mondayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
  const tuesdayTimetable = tuesdayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
  const wednesdayTimetable = wednesdayTimetableData.map((item) => (
    <TimetableLessonCard key={item.id} dataForCard={item} />
  ));
  const thursdayTimetable = thursdayTimetableData.map((item) => (
    <TimetableLessonCard key={item.id} dataForCard={item} />
  ));
  const fridayTimetable = fridayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
  const saturdayTimetable = saturdayTimetableData.map((item) => (
    <TimetableLessonCard key={item.id} dataForCard={item} />
  ));

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [group, setGroup] = useState("PI-311");
  const selectOptions = [
    { label: "ПИ-311", value: "PI-311" },
    { label: "ПРИ-311", value: "PRI-311" },
    { label: "ИСТ-311", value: "ИСТ-311" },
  ];

  const handleSelectChange = (selecedValue: string) => {
    setGroup(selecedValue);
  };

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <DatePicker locale={locale} className={styles.datePicker} onChange={onChange} picker="week" />
          <Select
            onChange={handleSelectChange}
            style={{ height: 40 }}
            defaultValue={"Выберите группу"}
            className={styles.select}
            options={selectOptions}
          />
        </nav>
        <div className={styles.timetable}>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Понедельник</h2>
            <div className={styles.timeTableDayColumn}>{mondayTimetable}</div>
          </div>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Вторник</h2>
            <div className={styles.timeTableDayColumn}>{tuesdayTimetable}</div>
          </div>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Среда</h2>
            <div className={styles.timeTableDayColumn}>{wednesdayTimetable}</div>
          </div>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Четверг</h2>
            <div className={styles.timeTableDayColumn}>{thursdayTimetable}</div>
          </div>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Пятница</h2>
            <div className={styles.timeTableDayColumn}>{fridayTimetable}</div>
          </div>
          <div className={styles.timetableDay}>
            <h2 className={styles.timetableDayTitle}>Суббота</h2>
            <div className={styles.timeTableDayColumn}>{saturdayTimetable}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
