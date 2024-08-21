
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../AppProvider";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsConfig from "./HighchartsConfig";
import HighchartsTheme from "./HighchartsTheme";
import ChartSelect from "./ChartSelect";

Highcharts.setOptions(HighchartsTheme);

export default function PriceChart() {
    return (
        <AppContext.Consumer>
            {({ historical, changeChartSelect }) => {
                const options = HighchartsConfig(historical); // Pass historical data to HighchartsConfig
                return (
                    <Tile>
                      <ChartSelect
                      defaultValue= "months"
                      onChange={e => changeChartSelect(e.target.value)}
                      >
                     <option value="days">Days</option>
                     <option value="weeks">Weeks</option>
                     <option value="months">Months</option>
                      </ChartSelect>
                       { historical ?
                        
                        <HighchartsReact 
                            highcharts={Highcharts} // Pass Highcharts directly
                       
                            options={options} // Use options configured with historical data
                          
                        />
                        :<div>Loading historical data</div>
                        }
                    </Tile>
                );
            }}
        </AppContext.Consumer>
    );
}

