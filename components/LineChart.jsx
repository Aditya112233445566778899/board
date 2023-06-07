"use client";

import Chart from "react-apexcharts";

const LineChart = () => {
  const chartData = {
    options: {
      colors: ["#9BDD7C", "#E9A0A0"],
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'right', 
        floating: false,
        fontSize: '14px',
        fontFamily: 'lato, lato',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
      },
      chart: {
        id: "activityBar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
      },
      stroke: {
        curve: "smooth",
      },
    },
    series: [
      {
        name: "Guest",
        data: [30, 90, 45, 50, 10],
      },
      {
        name: "User",
        data: [91, 30, 40, 45, 90],
      },
    ],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      width="1000"
      height="320"
    />
  );
};

export default LineChart;
