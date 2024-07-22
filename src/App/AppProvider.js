import React from 'react';

const cc = require('cryptocompare');

export const AppContext = React.createContext();
export class AppProvider extends React.Component{

constructor(props){
    super(props);
    this.state = {
        page: 'DASHBOARD',
        ...this.savedSettings(),
        setPage: this.setPage,
        confirmFavorites: this.confirmFavorites
    }
}

componentDidMount = () => {
this.fetchCoins();
}

fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
   
}


confirmFavorites =() => {
    this.setState({
        firstVisit: false,
        page: 'DASHBOARD'
    });
    localStorage.setItem('CRYPTOOTHAIR', JSON.stringify({
        test: 'hello'
    }));
}

savedSettings() {
    let CRYPTOOTHAIR = JSON.parse(localStorage.getItem ('CRYPTOOTHAIR'));
    if(!CRYPTOOTHAIR) {
    return {page: 'SETTNIGS', firstVisit: true} 
}
    return {};
}

setPage = page => this.setState({page})

render(){
return (
    <AppContext.Provider value={this.state}>
    {this.props.children}
    </AppContext.Provider>
)

}

}