import React from "react"
import Welcome from "./Welcomemessage"
import ConfirmButton from "./ConfirmButton"
import Page from "../Shared/Page";

export default function () {
    return <Page name="SETTINGS"> 
        <Welcome/> 
        <ConfirmButton/>
        </Page> 
}