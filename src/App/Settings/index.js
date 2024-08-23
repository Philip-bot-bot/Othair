// import React from "react"
// import Welcome from "./Welcomemessage"
// import ConfirmButton from "./ConfirmButton"
// import Search from "./Search"
// import Page from "../Shared/Page"
// import CoinGrid from "./CoinGrid"

// export default function () {
//     return <Page name="SETTINGS"> 

     
//         <Welcome/> 
//         <CoinGrid topSection/>
//         <ConfirmButton/>
//         <Search/>
//         <CoinGrid/>
//         </Page> 
// }

import React from "react";
import Welcome from "./Welcomemessage";
import ConfirmButton from "./ConfirmButton";
import Search from "./Search";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function Dashboard() {
    return (
        <Page name="SETTINGS">
            {/* Warning Message */}
            <div style={{  padding: '10px', marginBottom: '10px', fontWeight: 'bold', textAlign: 'center' }}>
            Notice: If a coin doesn't respond, please refresh the page or note that market data may be unavailable.
            </div>
            
            {/* Other Components */}
            <Welcome />
            <CoinGrid topSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    );
}
