import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounceIn} from 'react-animations';

const tabContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 20
}

const tabStyle = {
    marginRight: 5,
    border: 'solid 2px lightgray',
    height: 50,
    flex: 1,
    cursor: 'pointer'
}

const tabSelectedStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    height: 50,
    flex: 1
}

const selectedDiv = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginRight: 5,
    border: 'none',
    height: 50,
    flex: 1
}


const BounceIn = styled.div`animation: 1s ${keyframes`${bounceIn}`}`;

const Tabs = (props) => {
    const tabList = [1, 2, 3, 4, 5];
    const {selected, setSelected} = props;
    return (
        <div style={tabContainerStyle}>
            {
                tabList.map((tab, index) => {
                    if(index == selected){
                        return(
                            <BounceIn style={selectedDiv}>
                                <button
                                key={index}
                                style={tabSelectedStyle}
                                >
                                    Tab {tab}
                                </button>
                            </BounceIn>
                        )
                    } else {
                        return(
                            <button
                            key={index}
                            style={tabStyle}
                            className="tab"
                            onClick={(e) => setSelected(index)}>
                                Tab {tab}
                            </button>
                        )
                    }
                })
            }
        </div>
    )
}

export default Tabs;