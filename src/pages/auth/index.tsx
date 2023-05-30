import { GetServerSideProps } from "next";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  return <div>AuthPahe</div>;
};

export default AuthPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {}, redirect: { destination: "/auth/sign-in", permanent: true } };
};
