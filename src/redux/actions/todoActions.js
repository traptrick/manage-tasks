export const addTodo = (data) => async (dispatch) => {
    dispatch({ type: "ADDTOLIST", payload: data });
};
export const addToDone = (data) => async (dispatch) => {
    dispatch({ type: "ADDTODONELIST", payload: data });
};
export const addToTrash = (data) => async (dispatch) => {
    dispatch({ type: "ADDTOTRASHLIST", payload: data });
};

export const clearDoneList = () => async (dispatch) => {
    dispatch({ type: "CLEARDONE", payload: "" });
};
export const clearTrashList = () => async (dispatch) => {
    dispatch({ type: "CLEARTRASH", payload: "" });
};

export const deletePermanently = (data) => async (dispatch) => {
    dispatch({ type: "DELETEPERMANENTLY", payload: data });
};

export const updateTaskContent = (data) => async (dispatch) => {
    dispatch({ type: "UPDATETASK", payload: data });
};