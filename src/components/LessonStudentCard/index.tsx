import { Card, Badge, Divider, Collapse } from "antd";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { EUserRole } from "@/types";

const { Panel } = Collapse;

export interface IDataForStudentCard {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  role: EUserRole;
  email: string;
  groupId: number | null;
}

export const LessonStudentCard = ({
  dataForCard,
  missedClassFunction,
  reasonedMissedClassFucntion,
  selected,
}: {
  dataForCard: IDataForStudentCard;
  missedClassFunction: (id: number) => void;
  selected: boolean;
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
          <h3 className={styles.cardHeader}>{`${dataForCard.lastname} ${dataForCard.firstname}`}</h3>
          <Badge color={badgeColor} />
        </div>
      }
    >
      <p>Адрес электронной почты: {dataForCard.email}</p>
      <Collapse style={collapseStyle} ghost className={styles.cardFooter}>
        <Panel style={panelStyle} key={1} header={<p className={styles.panelHeader}>{panelHeader}</p>}>
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
