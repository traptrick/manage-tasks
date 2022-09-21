import React, {useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../pending/PendingTask.css";
import { deletePermanently } from "../../../redux/actions/todoActions";
import { clearTrashList } from "../../../redux/actions/todoActions";
import autoAnimate from '@formkit/auto-animate';
import trashIcon from "../../../assets/trash.svg";
import clearAllIcon from "../../../assets/broom.png";

const TrashedTask = () => {
    const trashList = useSelector((state) => state.todo.trashList);
    const dispatch = useDispatch();
    const parentRef = useRef();

    const taskDelHandler = (task) => {
      dispatch(deletePermanently(task));
    };

    const clearAllHandler = () => {
      dispatch(clearTrashList());
    }

    useEffect(() => {
      if (parentRef.current) {
        autoAnimate(parentRef.current);
      }
    }, [parentRef])

    return (
      <div className="tabPageDiv" ref={parentRef}>
        {trashList.length > 0 &&  <button onClick={clearAllHandler} className="clearAllBtn">
                <img
                  src={clearAllIcon}
                  alt="clear All btn"
                />
        </button>
        }
        {trashList.length > 0 ? trashList.map((list, idx) => {
          return (
            <div className="singleTodo" key={list.id}>
              {`${idx + 1}) ${list.task}`}
              <div className="todoActionBtns">
                <img
                  src={trashIcon}
                  alt="del btn"
                  width="28rem"
                  onClick={() => taskDelHandler(list)}
                />
              </div>
            </div>
          );
        }) : <h4 style={{alignSelf: 'center'}}>Nothing Here... 👻</h4>}
        </div>
    );
};

export default TrashedTask