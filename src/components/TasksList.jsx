import React from "react";
import { List, ListItem } from "material-ui";
import { connect } from "react-redux";

const TasksList = props => (
    <List >
        {props.tasks.map((task, index) => (
            <ListItem primaryText={task.name} key={index} >

            </ListItem>)
        )}
    </List>
)

const mapStateToProps = state => ({tasks: state.tasks});

export default connect(mapStateToProps)(TasksList);