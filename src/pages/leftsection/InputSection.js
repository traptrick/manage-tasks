import React, {useState} from 'react';
import "./InputSection.css";
import { customAlphabet } from 'nanoid'
import {addTodo} from "../../redux/actions/todoActions"
import {useDispatch} from 'react-redux';

const InputSection = () => {
    const dispatch = useDispatch();
    
    const generateIDs = () => {
        const nanoid = customAlphabet('1234567890abcdef', 10)
        let randID = nanoid();
        return randID;
    }
    
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateIDs()
    dispatch(addTodo({id: id, task: value}));
    setValue("");
  };

  return (
    <div className='inputSectionPage'>

    <form onSubmit={handleSubmit} className="formCss">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What are your tasks for the day?"
          value={value}
          onChange={handleChange}
          required
        />
        <button type="submit" className="addBtn">Add</button>
    </form>
    </div>
  )
}

export default InputSection