
const initialStore = {
    newTask: "",
    tasks: [
        {name: "be happy"},
        {name: "don't worry"},
    ]
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case "createTask":
            return {
                ...store,
                newTask: action.payload
            };
        case "setTask":
            if (store.newTask.length < 3) {
                return store;
            }
            const emptyTask = "";
            return {
                ...store,
                newTask: emptyTask,
                tasks: [...store.tasks, {name: store.newTask}],
            }            
        default:
            return store;
    }
}

export default reducer;