const INITIAL_STATE = {
    todoList: [],
    doneList: [],
    trashList: [],
  };
  
  const todoReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADDTOLIST":
        return {
          ...state,
          todoList: [...state.todoList ,payload]
        };

        case "UPDATETASK":
        return {
          ...state,
          todoList: state.todoList.map(val => val.id === payload.id ? {...val, task: payload.task}: val)
        };
      
        case "ADDTODONELIST":
          return {
            ...state,
            todoList: state.todoList.filter(task => task.id !== payload.id),
            doneList: [...state.doneList ,payload]
          };

        case "ADDTOTRASHLIST":
            return {
              ...state,
              todoList: state.todoList.filter(task => task.id !== payload.id),
              trashList: [...state.trashList ,payload]
            };
        
        case "CLEARDONE":
            return {
              ...state,
              doneList: []
            };

        case "CLEARTRASH":
            return {
              ...state,
              trashList: []
            };
        
        case "DELETEPERMANENTLY":
            return {
              ...state,
            trashList: state.trashList.filter(task => task.id !== payload.id)
            };

      /********** return the initial state ************/
      default:
        return state;
    }
  };
  
  export default todoReducer;