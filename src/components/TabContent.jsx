import React, {useState} from 'react';

const tabContentStyle = {
    border: 'solid 2px gray',
    width: '30em',
    height: 250,
    overflow: 'auto'
}

const TabContent = (props) => {
    const {selected} = props;
    return (
        <div style={tabContentStyle}>
            Tab content for tab {selected + 1} goes here
        </div>
    )
}

export default TabContent;