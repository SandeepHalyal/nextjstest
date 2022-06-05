import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home(prop) {
  const [here, setHere] = React.useState("");

  console.log(prop);
  return `${prop.data.Data}`;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://nextjstest-theta-six.vercel.app/api/new/thing`
  );
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
