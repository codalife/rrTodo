export const createTask = payload => (
    {
        type: "createTask",
        payload
    }
)

export const setTask = () => ({type: "setTask"})