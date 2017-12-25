import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui";
import { connect } from "react-redux";

const TasksList = props => (
    <Table >
        <TableBody>
            {props.tasks.map((task, index) => (
                <TableRow selected={task.active} key={index} >
                    <TableRowColumn>
                        {task.name}
                    </TableRowColumn>
                </TableRow>)
            )}
        </TableBody>
    </Table>
)

const mapStateToProps = state => ({tasks: state.tasks});

export default connect(mapStateToProps)(TasksList);