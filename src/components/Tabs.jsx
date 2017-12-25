import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from "react-redux";
import { filter } from "../redux/actions";

const TabsTodo = props => (
    <Tabs>
        <Tab label="Active" name="active" onActive={props.switchList}>
        </Tab>
        <Tab label="Finished" name="complete" onActive={props.switchList}>
        </Tab>
        <Tab label="All" name="all" onActive={props.switchList}>
        </Tab>
    </Tabs>
);

const mapDispatchToProps = dispatch => ({
    switchList(event) {
        dispatch(filter(event.props.name));
    }
})

export default connect(null, mapDispatchToProps)(TabsTodo);