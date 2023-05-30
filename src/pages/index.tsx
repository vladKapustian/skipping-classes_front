/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.scss";
import { TimetableLessonCard } from "@/components/TimetableLessonCard";
import { IDataForStudentCard, LessonStudentCard } from "@/components/LessonStudentCard";
import Navbar from "@/components/Navbar";

import { DatePicker, DatePickerProps, Select } from "antd";
import locale from "@/utils/useCalendarLocale";
import { ReactNode, useEffect, useState } from "react";
import { useFetchTimetableData } from "@/utils/grops/useFetchTimetableData";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { ITimetableResponse } from "@/types";

const daysName = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const selectWeek = (date: Date) => {
  return Array(7)
    .fill(new Date(date))
    .map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)));
};

const selectOptions = [
  { label: "ПИ-311", value: "PI-311" },
  { label: "ПРИ-311", value: "PRI-311" },
  { label: "ИСТ-311", value: "ИСТ-311" },
];

export default function Home() {
  const [isPending, setIsPending] = useState(false);
  const [timetableCardsData, setTimetableCardsData] = useState<ITimetableResponse | []>([]);
  const [group, setGroup] = useState("PI-311");
  const router = useRouter();

  const date = new Date();
  const currentWeekDates = selectWeek(date);

  const getStudentsCard = async () => {
    setIsPending(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const _data = await useFetchTimetableData(router.query.id as string, currentWeekDates[0], currentWeekDates[6]);
    setTimetableCardsData(_data.data);
    setIsPending(false);
  };

  const mondayTimetableData: ITimetableResponse = [];
  const tuesdayTimetableData: ITimetableResponse = [];
  const wednesdayTimetableData: ITimetableResponse = [];
  const thursdayTimetableData: ITimetableResponse = [];
  const fridayTimetableData: ITimetableResponse = [];
  const saturdayTimetableData: ITimetableResponse = [];

  let mondayTimetable: ReactNode[] = [];
  let tuesdayTimetable: ReactNode[] = [];
  let wednesdayTimetable: ReactNode[] = [];
  let thursdayTimetable: ReactNode[] = [];
  let fridayTimetable: ReactNode[] = [];
  let saturdayTimetable: ReactNode[] = [];

  useEffect(() => {
    getStudentsCard();
  }, []);

  useEffect(() => {
    timetableCardsData.map((cardData) => {
      switch (cardData.time.getDate()) {
        case 1:
          mondayTimetableData.push(cardData);
          break;
        case 2:
          tuesdayTimetableData.push(cardData);
          break;
        case 3:
          wednesdayTimetableData.push(cardData);
          break;
        case 4:
          thursdayTimetableData.push(cardData);
          break;
        case 5:
          fridayTimetableData.push(cardData);
          break;
        case 6:
          saturdayTimetableData.push(cardData);
          break;
        default:
          break;
      }
    });

    mondayTimetable = mondayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
    tuesdayTimetable = tuesdayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
    wednesdayTimetable = wednesdayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
    thursdayTimetable = thursdayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
    fridayTimetable = fridayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
    saturdayTimetable = saturdayTimetableData.map((item) => <TimetableLessonCard key={item.id} dataForCard={item} />);
  }, [timetableCardsData]);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSelectChange = (selecedValue: string) => {
    setGroup(selecedValue);
  };

  useEffect(() => {
    getStudentsCard();
  }, []);

  return (
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
  );
}
