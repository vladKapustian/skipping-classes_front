import { Card, Badge, Divider, Collapse } from "antd";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const { Panel } = Collapse;

export interface IDataForStudentCard {
  id: number;
  name: string;
  missedTotal: string | number;
  reasonedMissedTotal: string | number;
  attendanceRatePecentage: number;
  allDisciplinesAttendanceRate: number;
  allDisciplinesMissedTotal: number;
}

export const LessonStudentCard = ({ dataForCard }: { dataForCard: IDataForStudentCard }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const selectClickHandler = () => {
    setIsSelected(!isSelected);
  };

  const [isMorepanelOpen, setIsMorePanelOpen] = useState<boolean>(false);
  const [panelHeader, setPanelHeader] = useState<"Ещё" | "Скрыть">("Ещё");
  useEffect(() => {
    if (isMorepanelOpen === false) setPanelHeader("Ещё");
    else setPanelHeader("Скрыть");
  }, [isMorepanelOpen]);
  return (
    <Card
      className={`${isSelected ? styles.cardIsSelected : styles.cardIsNotSelected}${styles.card}`}
      title={<h3 className={styles.cardHeader}>{dataForCard.name}</h3>}
      onClick={selectClickHandler}
    >
      <p>Пропущено всего: {dataForCard.missedTotal}</p>
      <p>Пропущено по уважительной причине: {dataForCard.reasonedMissedTotal}</p>
      <Collapse accordion ghost className={styles.cardFooter}>
        <Panel key={1} header={panelHeader}>
          <p className={styles.cardFooterText}>Процент посещения{dataForCard.attendanceRatePecentage}</p>
          <p className={styles.cardFooterText}>
            Процент посещения по всем предметам: {dataForCard.allDisciplinesAttendanceRate}
          </p>
          <p className={styles.cardFooterText}>Пропусокв по всем предметам: {dataForCard.allDisciplinesMissedTotal}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};
