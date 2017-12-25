
const initialStore = {
    newTask: "",
    tasks: [
        {name: "be happy", complete: false},
        {name: "don't worry", complete: false},
    ],
    show: "active",
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
                tasks: [...store.tasks, {name: store.newTask, complete: false}],
            }
        case "toggle":
            const tasks = store.tasks.slice();
            tasks.forEach(task => {
                if (task.name === action.payload) {
                    task.complete = !task.complete;
                }
            })
            return {
                ...store,
                tasks: tasks
            }
        case "filter":
            const newShow = action.payload;
            return {
                ...store,
                show: newShow
            }
        default:
            return store;
    }
}

export default reducer;