import React from "react"
import styled from "styled-components"
import Page from "../Shared/Page"
import PriceGrid from "./PriceGrid"
import CoinSpotlight from "./CoinSpotlight"
import PriceChart from "./PriceChart"


const ChartGrid = styled.div `
display: grid;
margin-top: 20px;
grid-gap: 15px;
grid-template-columns: 1fr 3fr;
`

export default function () {
    return <Page name="DASHBOARD"> 
      {/* Warning Message */}
      <div style={{  padding: '10px', marginBottom: '10px', fontWeight: 'bold', textAlign: 'center' }}>
            Notice: If a coin doesn't respond, please refresh the page or note that market data may be unavailable.
            </div>
        <PriceGrid/>
        <ChartGrid>
       <CoinSpotlight/>
       <PriceChart/>
      </ChartGrid>
        </Page> 
}