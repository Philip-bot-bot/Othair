import React from "react"
import Welcome from "./Welcomemessage"
import ConfirmButton from "./ConfirmButton"
import Search from "./Search"
import Page from "../Shared/Page"
import CoinGrid from "./CoinGrid"

export default function () {
    return <Page name="SETTINGS"> 
        <Welcome/> 
        <CoinGrid topSection/>
        <ConfirmButton/>
        <Search/>
        <CoinGrid/>
        </Page> 
}