

import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';

// Styled components
const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
color: green;
${props => props.red && css`
    color: red;
    `}
`

const numberFormat = (number, type) => {
  if (type === 'currency') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  } else if (type === 'percentage') {
    return `${number.toFixed(2)}%`;
  }
  return number;
};

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    ${fontSize3}
    grid-gap: 5
    grid-template-columns: repeat(3, 1fr);
    justfiy-items: right;
  `}
`;

function ChangePercent({data}){
    return (
        <JustifyRight>
       <ChangePct red ={data.CHANGEPCT24HOUR < 0}> 
       {numberFormat(data.CHANGEPCT24HOUR, 'percentage')}
       </ChangePct>
        </JustifyRight>
    );
}

// PriceTile component
function PriceTile({ sym, data }) {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <div> 
          <ChangePercent data ={data}/>
             </div>
      </CoinHeaderGridStyled>
      <TickerPrice>
        {numberFormat(data.PRICE, 'currency')}
      </TickerPrice>
    </PriceTileStyled>
  );
}


function PriceTileCompat({sym, data}){
    return (
        <PriceTileStyled compact>
       <JustifyLeft>   
        <div> {sym} </div>
        </JustifyLeft>  
          <div> 
            <ChangePercent data ={data}/>
               </div>
        <div>
          {numberFormat(data.PRICE, 'currency')}
        </div>
      </PriceTileStyled>
    )
}



// Export default function
export default function ({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTile : PriceTileCompat;
  return (
    
      <TileClass sym={sym} data={data} />
    
  );
}


