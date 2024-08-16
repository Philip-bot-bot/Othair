import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../AppProvider";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsConfig from "./HighchartsConfig";
import HighchartsTheme from "./HighchartsTheme";

Highcharts.setOptions(HighchartsTheme);


export default function PriceChart() {
    const options = HighchartsConfig();

    return (
        <AppContext.Consumer>
            {() => (
                <Tile>
                    <HighchartsReact 
                        highcharts={Highcharts}
                        options={options}
                    />
                </Tile>
            )}
        </AppContext.Consumer>
    );
}
