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
        <Link href={"/"} className={style.flex}>
          <Image alt="" src={vector}></Image>
          <p className={style.toMain}>На главную</p>
        </Link>

        <Image className={style.avatar} src={starryNight} alt={""} />
      </div>
    </div>
  );
};

export default Navbar;
