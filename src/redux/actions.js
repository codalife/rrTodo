export const createTask = payload => ({type: "createTask",payload})

export const setTask = () => ({type: "setTask"});

export const toggle = payload => ({type: "toggle", payload});

export const filter = payload => ({type: "filter", payload});