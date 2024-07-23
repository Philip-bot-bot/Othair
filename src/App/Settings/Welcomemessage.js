import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";


export const WelcomemessageStyled = styled.div`
font-size:50px;
`


export default function({firstVisit}) {
    return (
        <AppContext.Consumer>
       {({firstVisit})  =>
       firstVisit ? <div>
     Welcome to CRYPTOOTHAIR, Kindly select your favorites coins to begin.{''} 
      </div> : null
    }


        </AppContext.Consumer>
    );
}