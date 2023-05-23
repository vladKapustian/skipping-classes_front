import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./styles.module.scss";
import { TimetableLessonCard, IDataForTimetableLessonCard } from "@/components/TimetableLessonCard";
import { IDataForStudentCard, LessonStudentCard } from "@/components/LessonStudentCard";
import Navbar from "@/components/Navbar";

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

  const dataForStudentCard: IDataForStudentCard[] = [
    {
      id: 1,
      name: "Кравцов А.Д.",
      missedTotal: 999,
      reasonedMissedTotal: 0,
      attendanceRatePecentage: 13,
      allDisciplinesAttendanceRate: 56,
      allDisciplinesMissedTotal: 20,
    },
    {
      id: 2,
      name: "Кравцов А.Д.",
      missedTotal: 999,
      reasonedMissedTotal: 0,
      attendanceRatePecentage: 13,
      allDisciplinesAttendanceRate: 56,
      allDisciplinesMissedTotal: 20,
    },
    {
      id: 3,
      name: "Кравцов А.Д.",
      missedTotal: 999,
      reasonedMissedTotal: 0,
      attendanceRatePecentage: 13,
      allDisciplinesAttendanceRate: 56,
      allDisciplinesMissedTotal: 20,
    },
  ];
  function missedClassFunction<T>(data: T, delay: number): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }

  function reasonedMissedClassFucntion<T>(data: T, delay: number): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }
  const timetable = timeTableCardsData.map((lessonData) => (
    <TimetableLessonCard key={lessonData.id} dataForCard={lessonData} />
  ));

  const students = dataForStudentCard.map((studentData) => (
    <LessonStudentCard
      missedClassFunction={missedClassFunction}
      reasonedMissedClassFucntion={reasonedMissedClassFucntion}
      key={studentData.id}
      dataForCard={studentData}
    ></LessonStudentCard>
  ));
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.cardLayout}>{timetable}</div>
        <div className={styles.cardLayout}>{students}</div>
      </div>
    </div>
  );
}
