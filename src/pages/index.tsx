import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home | Tracks App">
      <h1 className={styles.h1}>Home page Tracks</h1>
    </Layout>
  );
};

export default Home;
