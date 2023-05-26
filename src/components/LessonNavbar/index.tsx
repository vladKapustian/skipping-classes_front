import Avatar from "antd/es/avatar/avatar";
import style from "./styles.module.scss";
import vector from "../../../public/Vector.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import starryNight from "../../../public/starry-night.jpg";

const LessonNavbar = () => {
  const router = useRouter();
  const date = new Date(Date.parse(router.query.date as string));
  const day = date.getDay();
  let daysOfTheWeek = ["Восресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className={style.leftSideNavbar}>
          <Image className={style.toMain} onClick={router.back} alt="" src={vector}></Image>
          <p>
            {daysOfTheWeek[day]}, {date.getDate()} Мая
          </p>
          <p>{router.query.lessonName}</p>
        </div>
        <Avatar className={style.avatar} size={45} icon={<Image src={starryNight} alt={""} />} />
      </div>
    </div>
  );
};

export default LessonNavbar;
