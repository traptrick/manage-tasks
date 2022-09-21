import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PendingTask.css";
import { addToTrash } from "../../../redux/actions/todoActions";
import { addToDone } from "../../../redux/actions/todoActions";
import { updateTaskContent } from "../../../redux/actions/todoActions";
import checkedIcon from "../../../assets/checked.svg";
import editIcon from "../../../assets/edit.svg";
import saveIcon from "../../../assets/save.png";
import trashIcon from "../../../assets/trash.svg";
import autoAnimate from '@formkit/auto-animate';

const PendingTask = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({id:'', val: false});
  const [text, setText] = useState('');
  const [editBtnDisable, setEditBtnDisable] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef])
  
  const taskDelHandler = (task) => {
    dispatch(addToTrash(task));
  };
  const taskDoneHandler = (task) => {
    dispatch(addToDone(task));
  };
  const taskEditHandler = (e, id) => {
    e.preventDefault();
    setEditBtnDisable(!editBtnDisable);
    setEditInput((prev) => {
      return {
        id: id,
        val: !prev.val,
      }
    });
  };

  const editSaveBtn = (e, data) => {
    e.preventDefault();
    setEditBtnDisable(!editBtnDisable);
    setEditInput((prev) => {
      return {
        id: data.id,
        val: !prev.val,
      }
    });
    if(text.length > 0){
      dispatch(updateTaskContent({id: data.id, task: text}));
      setText('');
    }
    
  }

  const editTextContentHandler = (e) => {
    setText(e.target.value);
  }

  return (
    <div ref={parentRef}>
      {todoList.length > 0 ? (
        todoList.map((list, idx) => {
          return (
            <div className="singleTodo" key={list.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {
                  !editInput.val || (list.id !== editInput.id) ? (
                    <img
                    src={editIcon}
                    alt="edit btn"
                    width="25rem"
                    onClick={editBtnDisable ? ()=> {} : (e) => taskEditHandler(e, list.id)}
                    style={{cursor: 'pointer'}}
                  />
                  ) : (
                    <img
                    src={saveIcon}
                    alt="edit save btn"
                    width="25rem"
                    onClick={(e) => editSaveBtn(e, list)}
                    style={{cursor: 'pointer'}}
                    />
                  )
                }
                <div
                  style={{ borderLeft: "1px solid black", height: "2rem", margin: '0 8px'}}
                ></div>
                <span style={{fontSize: 'small', marginRight: '3px', color: '#545454'}}>{`${idx + 1})`}</span>
                <input
                type="text" 
                value={(list.id === editInput.id && text) || `${list.task}`}
                className="editInputTag"
                disabled={editInput.val && list.id === editInput.id ? false : true}
                onChange={editTextContentHandler}
                />
              </div>
              <div className="todoActionBtns">
                <img
                  src={trashIcon}
                  alt="del btn"
                  width="28rem"
                  onClick={() => taskDelHandler(list)}
                />
                <img
                  src={checkedIcon}
                  alt="done btn"
                  width="28rem"
                  onClick={() => taskDoneHandler(list)}
                />
              </div>
            </div>
          );
        })
      ) : (
        <h4 style={{ textAlign: "center" }}>
          Your Tasks List Is Empty, Add Something
        </h4>
      )}
    </div>
  );
};

export default PendingTask;
