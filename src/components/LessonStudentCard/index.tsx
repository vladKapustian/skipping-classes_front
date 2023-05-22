import { Card, Badge, Divider, Collapse } from "antd";

import styles from "./styles.module.scss";
import { useState } from "react";

export interface IDataForStudentCard {
  id: number;
  name: string;
  missedTotal: string;
  reasonedMissedTotal: string;
  attendanceRate: number;
  allDisciplinesAttendanceRate: number;
  allDisciplinesMissedTotal: number;
}

export const LessonStudentCard = ({ dataForCard }: { dataForCard: IDataForStudentCard }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const selectClickHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Card
      className={`${isSelected ? styles.cardIsSelected : styles.cardIsNotSelected}${styles.card}`}
      title={<h3 className={styles.cardHeader}>{}</h3>}
      onClick={selectClickHandler}
    >
      <p>Пропущено всего: {dataForCard.missedTotal}</p>
      <p>Пропущено по уважительной причине: {dataForCard.reasonedMissedTotal}</p>
      <Collapse className={styles.cardFooter}>
        <p className={styles.cardFooterText}>Процент посещения по текущему предмету: {dataForCard.classroomNumber}</p>
        <p className={styles.cardFooterText}>{dataForCard.lessonType}</p>
      </Collapse>
    </Card>
  );
};
