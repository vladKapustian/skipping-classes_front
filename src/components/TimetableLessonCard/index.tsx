import { Card, Badge, Divider } from "antd";

import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import { ITimetableData } from "@/types";

export const TimetableLessonCard = ({ dataForCard }: { dataForCard: ITimetableData }) => {
  const lessonStartTime = dataForCard.time;
  const lessonEndTime = new Date(lessonStartTime.getTime() + 90 * 60 * 1000);
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
        <p className={styles.lessonName}> {dataForCard.disciplineId}</p>
        <Divider className={styles.cardDivider}></Divider>
        <div className={styles.cardFooter}></div>
      </Card>
    </Link>
  );
};
