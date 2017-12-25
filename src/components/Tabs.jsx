import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';


function handleActive(tab) {
    // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="Active" >

        </Tab>
        <Tab label="Finished" >
        </Tab>
        <Tab
            label="All"
            data-route="/home"
            onActive={handleActive}
        >
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;