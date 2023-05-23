import Avatar from "antd/es/avatar/avatar";
import style from "./styles.module.scss";
import Link from "next/link";
import vector from "../../../public/Vector.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import starryNight from "../../../public/starry-night.jpg";

const Navbar = () => {
  const router = useRouter();
  const date = new Date(Date.parse(router.query.date as string));
  const day = date.getDay();
  let daysOfTheWeek = ["Восресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
        <Image onClick={router.back} alt="" src={vector}></Image>

        <Image className={style.avatar} src={starryNight} alt={""} />
      </div>
    </div>
  );
};

export default Navbar;
