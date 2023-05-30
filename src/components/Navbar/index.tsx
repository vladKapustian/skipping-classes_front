import style from "./styles.module.scss";
import Link from "next/link";
import vector from "../../../public/Vector.svg";
import Image from "next/image";
import starryNight from "../../../public/starry-night.jpg";

const Navbar = () => {
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
