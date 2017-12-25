import React from "react";
import { TextField } from "material-ui";
import { connect } from "react-redux";
import { createTask, setTask } from "../redux/actions";

const CreateTask = props => (
    <form onSubmit={props.setNewTask}>
        <TextField id="taskCreator" value={props.newTask} onChange={props.addTask}/>
    </form>
)

const mapDispatchToProps = dispatch => ({
    addTask(e) {
        dispatch(createTask(e.target.value));
    },
    setNewTask(e) {
        e.preventDefault();
        dispatch(setTask());
    }
})

const mapStateToProps = state => ({newTask: state.newTask});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);