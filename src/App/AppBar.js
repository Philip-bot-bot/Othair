
import React from "react";
import styled, {css } from "styled-components";
import {AppContext} from "./AppProvider";

const Logo = styled.div`
font-size: 1.8em;
`
const Bar = styled.div`
display:grid;
margin-bottom:40px;
grid-template-columns: 180px auto 100px 100px;
font-weight: bold;
`
const ControlButtonElem = styled.div`
cursor:pointer;
${props => props.active && css`
 text-shadow: 0px 0px 10px white;
`}
${props => props.hidden && css`
    display: none;
    `}
`

function ControlButton ({name}) {
return (
    <AppContext.Consumer>
    {({firstVisit, page, setPage}) => (
    <ControlButtonElem 
    active ={page === name}
    onClick={() => setPage(name)}
    hidden={firstVisit && name === 'DASHBOARD'}
    >
        {name}
    </ControlButtonElem>
    )}
    </AppContext.Consumer>
)
}



export default function() {
    return (
    <Bar>
        
        <Logo>CRYPTOOTHAIR</Logo>
        <div/>
        <ControlButton active name= "DASHBOARD"/>
        <ControlButton name= "SETTINGS"/>
        </Bar>
    );
}