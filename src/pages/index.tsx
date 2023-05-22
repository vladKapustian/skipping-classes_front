import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./styles.module.css";
import { TimetableLessonCard, IDataForTimetableLessonCard } from "@/components/TimetableLessonCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const timeTableCardsData: IDataForTimetableLessonCard[] = [
    {
      id: 1,
      lessonName: "Проектирование баз данных",
      lessonStartTime: new Date(),
      teacherName: "Серов А.О",
      classroomNumber: 302,
      lessonType: "Практика",
    },
    {
      id: 2,
      lessonName: "Проектирование баз данных",
      lessonStartTime: new Date(),
      teacherName: "Щербаков С.М.",
      classroomNumber: 522,
      lessonType: "Практика",
    },
    {
      id: 3,
      lessonName: "Проектирование баз данных",
      lessonStartTime: new Date(),
      teacherName: "Серов А.О",
      classroomNumber: 213,
      lessonType: "Практика",
    },
  ];
  const timetable = timeTableCardsData.map((lessonData) => (
    <TimetableLessonCard key={lessonData.id} dataForCard={lessonData} />
  ));
  return (
    <>
      <div className={styles.cardLayout}>{timetable}</div>
    </>
  );
}
