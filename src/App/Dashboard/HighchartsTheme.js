
import { lightTheme } from "../Shared/Styles";

export default {

    colors: ['#1f78b4', '#a6cee3', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a'],
    
    chart: {
        backgroundColor: lightTheme ? 'white' : '#001f3f',
        style: {
            fontFamily: 'Arial, sans-serif',
        },
        plotBorderColor: '#606063'
    },

    title: {
        style: {
            color: lightTheme ? '#000000' : '#E0E0E3',  // Black for light theme
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    accessibility: {
        enabled: false
    },

    subtitle: {
        style: {
            color: lightTheme ? '#000000' : '#E0E0E3',  // Black for light theme
            textTransform: 'uppercase'
        }
    },

    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: lightTheme ? '#000000' : '#E0E0E3'  // Black for light theme
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: lightTheme ? '#000000' : '#A0A0A3'  // Black for light theme
            }
        }
    },

    yAxis: {
        gridLineWidth: 0,
        gridLineColor: '#707073',
        labels: {
            style: {
                color: lightTheme ? '#000000' : '#E0E0E3'  // Black for light theme
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: lightTheme ? '#000000' : '#A0A0A3'  // Black for light theme
            }
        }
    },

    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                color: lightTheme ? '#000000' : '#B0B0B3'  // Black for light theme
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },

    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: lightTheme ? '#000000' : '#E0E0E3'  // Black for light theme
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: lightTheme ? '#000000' : '#C0C0C0'  // Black for light theme
            }
        }
    },

    credits: {
        enabled: false
    },

    labels: {
        style: {
            color: lightTheme ? '#000000' : '#707073'  // Black for light theme
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: lightTheme ? '#000000' : '#F0F0F3'  // Black for light theme
        },
        activeDataLabelStyle: {
            color: lightTheme ? '#000000' : '#F0F0F3'  // Black for light theme
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    }
}
