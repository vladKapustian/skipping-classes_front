/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.scss";
import { TimetableLessonCard } from "@/components/TimetableLessonCard";
import Navbar from "@/components/Navbar";

import { DatePicker, DatePickerProps, Select } from "antd";
import locale from "@/utils/useCalendarLocale";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { IGroupsData, IGroupsSelectPreparedData, ITimetableResponse } from "@/types";
import { fetchGroupsData } from "@/utils/grops/fetchGroupsList";
import { FetchTimetableData } from "@/utils/grops/fetchTimetableData";

const daysName = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const selectWeek = (date: Date) => {
  return Array(7)
    .fill(new Date(date))
    .map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)));
};

export default function Home() {
  const [isPending, setIsPending] = useState(false);
  const [timetableCardsData, setTimetableCardsData] = useState<ITimetableResponse | []>([]);
  const [groups, setGroups] = useState<IGroupsSelectPreparedData[] | undefined>(undefined);
  const [selectedGroup, setSelctedGroup] = useState<IGroupsSelectPreparedData | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    fetchGroupsData().then((groups: AxiosResponse<IGroupsData[]> | undefined) => {
      if (groups !== undefined) {
        const preparedDataForGropsSelect: IGroupsSelectPreparedData[] = groups.data?.map((group: IGroupsData) => ({
          id: group.id,
          label: group.name,
          value: group.name,
        }));
        setGroups(preparedDataForGropsSelect);
        console.log(preparedDataForGropsSelect);
      }
    });
  }, []);

  const date = new Date();
  const currentWeekDates = selectWeek(date);

  const getTimetableCard = async () => {
    setIsPending(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const _data = await FetchTimetableData(router.query.id as string, currentWeekDates[0], currentWeekDates[6]);
    if (_data === null) return;
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

  const prepareDataForTable = () => {
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
  };

  useEffect(() => {
    getTimetableCard().then(() => {
      prepareDataForTable();
    });
  }, [groups]);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  // const handleGroup = (selecedValue: string) => {
  //   setSelctedGroup(groups[selecedValue]);
  // };

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <DatePicker locale={locale} className={styles.datePicker} onChange={onChange} picker="week" />
        <Select
          // onChange={handleGroup}
          style={{ height: 40 }}
          defaultValue={"Выберите группу"}
          className={styles.select}
          options={groups}
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
