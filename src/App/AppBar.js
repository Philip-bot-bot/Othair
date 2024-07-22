
import React from "react";
import styled, {css } from "styled-components";

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
`

function ControlButton ({name, active}) {
return (
    <ControlButtonElem active = {active}>
        {name}
    </ControlButtonElem>
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