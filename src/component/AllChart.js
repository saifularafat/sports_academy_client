const bookingBarChart = {
    series: [{
        data: [1400, 7000, 2300, 1100, 2700]
    },
    {
        data: [1300, 1300, 1300, 1300, 1300]
    }],
    options: {
        chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: '22%',
            }
        },
        colors: ['#f39c12', '#dfe6e9'],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: true,
        },
        grid: {
            show: false
        },
    },
}


const sportStudentLineChart = {
    series: [{
        name: "series-1",
        data: [10, 31, 17, 38, 22, 48]
    }],
    options: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#00d2d3'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3.5
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        markers: {
            size: 2.3,
            strokeColors: '#00d2d3',
            colors: '#00d2d3',
            hover: {
                size: 2.3,
                sizeOffset: 3
            },
            discrete: [{
                seriesIndex: 0,
                dataPointIndex: 5,
                fillColor: '#fff',
                strokeColor: '#00d2d3',
                size: 5,
                shape: "circle"
            }],
        }
    },
}

const earningPieChart = {
    series: [18, 23, 13, 19, 9, 14, 6],
    options: {
        stroke: {
            width: 0
        },
        labels: ['Cricket', 'Football', 'Baseball', 'Hockey', "Tennis", "Archer", "Basket", "surfing"],
        chart: {
            type: 'donut',
            height: 350
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '12px',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 400,
                            color: "#95a5a6",
                            offsetY: 14,
                            formatter: function (val) {
                                return val
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '16px',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            color: "#576574",
                            offsetY: -16,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            label: 'Sports',
                            fontSize: '11px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            color: '#95a5a6',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return "100%"
                                }, 0)
                            }
                        }
                    }
                }
            },
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 180
                    },
                }
            },
            {
                breakpoint: 350,
                options: {
                    chart: {
                        height: 120
                    },
                }
            },
        ]
    },

}

const activatesBarChart = {
    series: [{
        data: [20, 16, 11, 24, 15, 19, 13, 29, 9, 13, 25, 12]
    }],
    options: {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                }
            }
        },
        colors: ['#f39c12', '#1E40AF', "#00075F", "#122033"],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['January'],
                ['February'],
                ['March'],
                ['April'],
                ['May'],
                ['Jun'],
                ['July'],
                ['August'],
                ['September'],
                ['October'],
                ['November'],
                ['December'],
            ],
            labels: {
                style: {
                    colors: ['#f39c12', '#dfe6e9'],
                    fontSize: '12px'
                }
            }
        }
    },


};

const classActivateChart = {

    series: [{
        name: 'Activities',
        data: [14, 15, 14, 17, 15, 16, 17]
    }],
    options: {
        annotations: {
            points: [{
                x: 'Activities',
                seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Student Activates Chart',
                }
            }]
        },
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            width: 2
        },

        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 
            ],
            tickPlacement: 'on'
        },
        yaxis: {
            title: {
                text: 'Attendant',
                fontSize: '16px'
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    },
};


export { sportStudentLineChart, bookingBarChart, earningPieChart, activatesBarChart, classActivateChart }