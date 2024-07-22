import React from "react";
import { AppContext } from "../AppProvider";

export default function({firstVisit}) {
    return (
        <AppContext.Consumer>
       {({firstVisit})  =>
       firstVisit ? <div>
     <bold>Welcome to CRYPTOOTHAIR, Kindly select your favorites coins to begin.{''} </bold>
      </div> : null
    }


        </AppContext.Consumer>
    );
}