import React from "react";
import Rows from "./components/Rows";
import Columns from "./components/Columns";
import DataTable from "./components/DataTable ";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.tableApplication}>
        <div className={styles.rowsTitle}>
          <div className={styles.cornerBlock}></div>
          <Rows />
        </div>
        <div className={styles.dataContent}>
          <div className={styles.columnHeader}>
            <Columns />
          </div>
          <div className={styles.contentTable}>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
