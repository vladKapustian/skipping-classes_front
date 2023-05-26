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

export const LessonStudentCard = ({
  dataForCard,
  missedClassFunction,
  reasonedMissedClassFucntion,
}: {
  dataForCard: IDataForStudentCard;
  missedClassFunction: (id: number) => void;
  reasonedMissedClassFucntion: <T>(data: T, delay: number) => Promise<T>;
}) => {
  const collapseStyle = {
    marginLeft: 0,
    paddingLeft: 0,
    border: "none",
  };
  const panelStyle = {
    marginBottom: 24,
    border: "none",
  };
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
    missedClassFunction(dataForCard.id);
  };

  enum EBadgeColor {
    blue = "blue",
    green = "greeen",
    red = "red",
  }
  const [badgeColor, setBadgeColor] = useState(EBadgeColor.green);

  const [isMorepanelOpen, setIsMorePanelOpen] = useState<boolean>(false);
  const [panelHeader, setPanelHeader] = useState<"Ещё" | "Скрыть">("Ещё");
  useEffect(() => {
    if (isMorepanelOpen === false) setPanelHeader("Ещё");
    else setPanelHeader("Скрыть");
  }, [isMorepanelOpen]);
  return (
    <Card
      className={`${selected ? styles.cardIsSelected : styles.cardIsNotSelected}${styles.card}`}
      bordered={selected}
      title={
        <div className={styles.cardHeader}>
          <h3 className={styles.cardHeader}>{dataForCard.name}</h3>
          <Badge color={badgeColor} />
        </div>
      }
      onClick={handleOnClick}
    >
      <p>
        Пропущено всего: <strong>{dataForCard.missedTotal}</strong>
      </p>
      <p>
        Пропущено по уважительной причине: <strong>{dataForCard.reasonedMissedTotal}</strong>
      </p>
      <Collapse style={collapseStyle} ghost className={styles.cardFooter}>
        <Panel style={panelStyle} key={1} header={<p className={styles.panelHeader}>{panelHeader}</p>}>
          <p className={styles.cardFooterText}>
            Процент посещения: <strong>{dataForCard.attendanceRatePecentage}</strong>
          </p>
          <p className={styles.cardFooterText}>
            Процент посещения по всем предметам: <strong>{dataForCard.allDisciplinesAttendanceRate}</strong>
          </p>
          <p className={styles.cardFooterText}>
            Пропусокв по всем предметам: <strong>{dataForCard.allDisciplinesMissedTotal}</strong>
          </p>
          <button className={styles.markMissedClass} onClick={() => missedClassFunction(dataForCard.id)}>
            Отметить пропуск
          </button>
          <button className={styles.markMissedUnreasonedClass} onClick={() => reasonedMissedClassFucntion}>
            По уважительной причине
          </button>
        </Panel>
      </Collapse>
    </Card>
  );
};
