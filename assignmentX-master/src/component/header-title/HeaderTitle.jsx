import styles from "./HeaderTitle.module.css";

const HeaderTitle = ({ firstTitle, secondTitle }) => {
  return (
    <div className={styles.container}>
      <h1>{firstTitle}</h1>
      <div>{secondTitle}</div>
    </div>
  );
};

export default HeaderTitle;