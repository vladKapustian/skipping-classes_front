import { Card, Badge, Divider } from "antd";

import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";

export interface IDataForTimetableLessonCard {
  id: number;
  lessonStartTime: Date;
  lessonName: string;
  teacherName: string;
  classroomNumber: number | string | undefined; // TODO: добавляем номер аудитории в бд и в карточку
  lessonType: "Лекция" | "Практика" | undefined;
  lessonDate: string;
}

export const TimetableLessonCard = ({ dataForCard }: { dataForCard: IDataForTimetableLessonCard }) => {
  const { lessonStartTime } = dataForCard;
  const lessonEndTime = new Date(dataForCard.lessonStartTime.getTime() + 90 * 60 * 1000);
  const timestamps =
    lessonStartTime.getHours() +
    ":" +
    lessonStartTime.getMinutes() +
    " - " +
    lessonEndTime.getHours() +
    ":" +
    lessonEndTime.getMinutes();

  const isCurrentLessonBadge = () => {
    const currentTime = new Date();

    if (currentTime >= lessonStartTime && currentTime <= lessonEndTime) {
      return <Badge className={styles.cardHeaderIsLessonNow} color="#58E242" />;
    }
    return;
  };
  return (
    <Link className={styles.container} href={`/lessons/${dataForCard.id}`}>
      <Card
        className={`${styles.card}`}
        title={<h3 className={styles.cardHeader}>{timestamps}</h3>}
        extra={isCurrentLessonBadge()}
      >
        <p className={styles.lessonName}> {dataForCard.lessonName}</p>
        <Divider className={styles.cardDivider}></Divider>
        <p>{dataForCard.teacherName}</p>
        <div className={styles.cardFooter}>
          <p className={styles.cardFooterText}>{dataForCard.classroomNumber}</p>
          <p className={styles.cardFooterText}>{dataForCard.lessonType}</p>
        </div>
      </Card>
    </Link>
  );
};
