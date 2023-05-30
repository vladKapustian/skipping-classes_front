import React, { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";

import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) router.replace("/auth/sign-in");
  }, [cookies.token]);

  if (router.pathname.includes("/auth")) return <div className={styles.layout}>{children}</div>;

  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
