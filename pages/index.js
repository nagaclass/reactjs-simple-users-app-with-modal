import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import tabs from "../utils/tabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple users app with modal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className="tabs-navigator">
        {tabs.map(({ title, name }, idx) => (
          <li key={idx} onClick={() => setActiveTab(name)} className={name === activeTab ? "active" : ""}>
            {title}
          </li>
        ))}
      </ul>

      {tabs.map(({ name, component }, idx) => name === activeTab && <div key={idx}>{component}</div>)}
    </div>
  );
};

export default Home;