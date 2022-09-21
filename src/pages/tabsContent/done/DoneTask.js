import React, {useEffect,useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../pending/PendingTask.css";
import { clearDoneList } from "../../../redux/actions/todoActions";
import autoAnimate from '@formkit/auto-animate'
import clearAllIcon from "../../../assets/broom.png"

const DoneTask = () => {
    const doneList = useSelector((state) => state.todo.doneList);
    const dispatch = useDispatch();
    const parentRef = useRef();

    const clearAllHandler = () => {
      dispatch(clearDoneList());
    }

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef])
  
    return (
      <div className="tabPageDiv" ref={parentRef}>
        {doneList.length > 0 && <button onClick={clearAllHandler} className="clearAllBtn">
                <img
                  src={clearAllIcon}
                  alt="clear All btn"
                />  
        </button>}
        {doneList.length > 0 ? doneList.map((list, idx) => {
          return (
            <div className="singleTodo" key={list.id}>
              <s>{`${idx + 1}) ${list.task}`}</s>
            </div>
          );
        }): <h4 style={{alignSelf: 'center'}}>Nothing Here! 👎</h4>}
        </div>
    );
};

export default DoneTask