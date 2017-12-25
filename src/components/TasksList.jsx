import React from "react";
import { List, ListItem, Checkbox } from "material-ui";
import { connect } from "react-redux";
import { toggle } from "../redux/actions";

const TasksList = props => (
    <List >
        {props.tasks.filter(task => {
            if (props.show === "active") {
                return task.complete === false;
            } else if (props.show === "complete") {
                return task.complete === true;
            } else {
                return true;
            }
        }).map((task, index) => (
            <ListItem key={index}>
                <Checkbox
                    checked={task.complete}
                    onClick={props.toggleActive}
                    name={task.name}
                />
                <span>
                    {task.name}
                </span>
            </ListItem>)
        )}
    </List>
)

const mapStateToProps = state => ({ tasks: state.tasks, show: state.show});
const mapDispatchToProps = dispatch => ({
    toggleActive(event) {
        dispatch(toggle(event.target.name));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);