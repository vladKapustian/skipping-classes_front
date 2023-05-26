import LessonNavbar from "@/components/LessonNavbar";
import { LessonStudentCard } from "@/components/LessonStudentCard";
import { dataForStudentCard } from "@/utils/useStudentsData";
import styles from "./styles.module.css";
import { Button, Select } from "antd";
import { useState } from "react";

export default function Lesson() {
  const [itemsSelectedIds, setItemsSelectedIds] = useState<number[]>([]);
  const useItemsSelectedIds = (id: number) => {
    if (itemsSelectedIds.indexOf(id) !== -1) {
      setItemsSelectedIds(itemsSelectedIds.splice(itemsSelectedIds.indexOf(id), 2));
    } else {
      itemsSelectedIds.push(id);
    }
  };

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

  const students = dataForStudentCard.map((studentData) => (
    <LessonStudentCard
      missedClassFunction={useItemsSelectedIds}
      reasonedMissedClassFucntion={reasonedMissedClassFucntion}
      key={studentData.id}
      dataForCard={studentData}
    ></LessonStudentCard>
  ));

  const [statisticsPeriod, setStatisticsPeriod] = useState();
  const selectOptions = [
    { value: "Day", label: "День" },
    { value: "Month", label: "Месяц" },
    { value: "Year", label: "Год" },
  ];
  const handleSelectChange = (selecedValue: string) => {
    selecedValue;
  };

  return (
    <div>
      <LessonNavbar />
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <div className={styles.filters}>
            <p className={styles.filterText}>Показывать статистику за:</p>
            <Select
              onChange={handleSelectChange}
              style={{ height: 28 }}
              defaultValue={"День"}
              className={styles.select}
              options={selectOptions}
            />
          </div>
          <div className={styles.buttons}>
            {itemsSelectedIds.length && (
              <div className={styles.selectedContainer}>
                <p className={styles.selectedIds}>Выбрано:</p>
                <p>{itemsSelectedIds.length}</p>
              </div>
            )}
            <Button
              onClick={() => setItemsSelectedIds([])}
              className={styles.missedButton}
              disabled={!itemsSelectedIds.length}
              type="primary"
            >
              Отметить пропуск
            </Button>
          </div>
        </div>
        <h3 className={styles.groupName}>Группа ПИ-311</h3>
        <div className={styles.studentsGrid}>{students}</div>
      </div>
    </div>
  );
}
