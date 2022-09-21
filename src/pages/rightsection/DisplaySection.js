import React, { useState} from "react";
import "./DisplaySection.css";
import PendingTask from "../tabsContent/pending/PendingTask";
import DoneTask from "../tabsContent/done/DoneTask";
import TrashedTask from "../tabsContent/trash/TrashedTask";

const DisplaySection = () => {
  const [tabSwitch, setTabSwitch] = useState(0);
  const tabChangeHandler = (tabVal) => {
    setTabSwitch(tabVal);
  }

  return (
    <div className="toDoLists">
      <div className="tabsDiv">
        <span className={`tabVal ${tabSwitch === 0 ? "selected" : ""}`} onClick={() => tabChangeHandler(0)}>Pending Tasks</span>
        <span>|</span>
        <span className={`tabVal ${tabSwitch === 1 ? "selected" : ""}`} onClick={() => tabChangeHandler(1)}>Completed</span>
        <span>|</span>
        <span className={`tabVal ${tabSwitch === 2 ? "selected" : ""}`} onClick={() => tabChangeHandler(2)}>Trashed</span>
      </div>
      {tabSwitch === 0 && <PendingTask />}
      {tabSwitch === 1 && <DoneTask />}
      {tabSwitch === 2 && <TrashedTask />}
    </div>
  );
};

export default DisplaySection;
