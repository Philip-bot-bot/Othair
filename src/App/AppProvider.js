import React from 'react';
import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends React.Component{

constructor(props){
    super(props);
    this.state = {
        page: 'DASHBOARD',
        favorites: ['BTC', 'ETH', 'XMR','DOGE'],
        showWarning: false, //warning message
        warningMessage: '', // New state to hold warning message
        timeInterval: 'months',
        ...this.savedSettings(),
        setPage: this.setPage,
        addCoin: this.addCoin,
        removeCoin: this.removeCoin,
        isInFavorites: this.isInFavorites,
        confirmFavorites: this.confirmFavorites,
        setCurrentFavorite: this.setCurrentFavorite,
        setFilteredCoins: this.setFilteredCoins,
        changeChartSelect: this.changeChartSelect
    }
}

componentDidMount = () => {
this.fetchCoins();
this.fetchPrices();
this.fetchHistorical();
}

fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList}); 
}

fetchPrices = async () => {
    if(this.state.firstVisit) return;
    let prices = await this.prices();
    // We must filter the empty price objects (not in the lecture)
    prices = prices.filter(price => Object.keys(price).length);
    console.log(prices);
    this.setState({prices});
  }

 fetchHistorical = async () => {
    if(this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
        {
            name: this.state.currentFavorite,
            data: results.map((ticker, index) => [
            moment().subtract({[this.state.timeInterval]:TIME_UNITS - index}).valueOf(),
            ticker.USD
            ])    
        }
    ]
    this.setState({historical});
 } 

prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++){
        try{
         let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
         returnData.push(priceData);
        }catch (e){
            console.warn('fetch price error: ', e);
        }
    }
    return returnData;
}

historical = () => {
 let promises = [];
 for (let units = TIME_UNITS; units > 0; units--){
    promises.push(
        cc.priceHistorical(
        this.state.currentFavorite, 
        ['USD'],
        moment()
        .subtract({[this.state.timeInterval]: units})
        .toDate()
        )
    )
 }
return Promise.all(promises);

}

addCoin = key => {
    let favorites = [...this.state.favorites];
   if(favorites.length <MAX_FAVORITES){
    favorites.push(key);
    this.setState({favorites});
   }
}

removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)})

}

isInFavorites = key => _.includes(this.state.favorites, key)

confirmFavorites =() => {
    let currentFavorite = this.state.favorites[0];
    this.setState({
        firstVisit: false,
        page: 'DASHBOARD',
        currentFavorite,
        prices: null,
        historical: null
    }, () => {
        this.fetchPrices();
        this.fetchHistorical();
    });
    localStorage.setItem('CRYPTOOTHAIR', JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
    }));
}

setCurrentFavorite = (sym) => {
this.setState({
    currentFavorite: sym,
    historical: null
}, this.fetchHistorical);
localStorage.setItem('CRYPTOOTHAIR', JSON.stringify({
    ...JSON.parse(localStorage.getItem('CRYPTOOTHAIR')),
    currentFavorite: sym
}))

}

savedSettings() {
    let CRYPTOOTHAIR = JSON.parse(localStorage.getItem ('CRYPTOOTHAIR'));
    if(!CRYPTOOTHAIR){
    return {page: 'SETTNIGS', firstVisit: true} 
  }
  let {favorites, currentFavorite} = CRYPTOOTHAIR;
    return {favorites, currentFavorite};
}

setPage = page => this.setState({page})

setFilteredCoins = (filteredCoins) => this.setState({filteredCoins})

changeChartSelect = (value) => {
    console.log(value);
    this.setState ({timeInterval: value, historical: null}, this.fetchHistorical);
}

render(){
return (
    <AppContext.Provider value={this.state}>
    {this.props.children}
    </AppContext.Provider>
)

}

}