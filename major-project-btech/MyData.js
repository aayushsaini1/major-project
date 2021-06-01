import React from "react";
import { Line } from "react-chartjs-2";

var graphData = {
  labels: [
    "2019-12-02",
    "2019-12-03",
    "2019-12-04",
    "2019-12-05",
    "2019-12-06",
    "2019-12-09",
    "2019-12-10",
    "2019-12-11",
    "2019-12-12",
    "2019-12-13",
    "2019-12-16",
    "2019-12-17",
    "2019-12-18",
    "2019-12-19",
    "2019-12-20",
    "2019-12-23",
    "2019-12-24",
    "2019-12-26",
    "2019-12-27",
    "2019-12-30",
    "2019-12-31",
    "2020-01-02",
    "2020-01-03",
    "2020-01-06",
    "2020-01-07",
    "2020-01-08",
    "2020-01-09",
    "2020-01-10",
    "2020-01-13",
    "2020-01-14",
    "2020-01-15",
    "2020-01-16",
    "2020-01-17",
    "2020-01-21",
    "2020-01-22",
    "2020-01-23",
    "2020-01-24",
    "2020-01-27",
    "2020-01-28",
    "2020-01-29",
    "2020-01-30",
    "2020-01-31",
    "2020-02-03",
    "2020-02-04",
    "2020-02-05",
    "2020-02-06",
    "2020-02-07",
    "2020-02-10",
    "2020-02-11",
    "2020-02-12",
    "2020-02-13",
    "2020-02-14",
    "2020-02-18",
    "2020-02-19",
    "2020-02-20",
    "2020-02-21",
    "2020-02-24",
    "2020-02-25",
    "2020-02-26",
    "2020-02-27",
    "2020-02-28",
    "2020-03-02",
    "2020-03-03",
    "2020-03-04",
    "2020-03-05",
    "2020-03-06",
    "2020-03-09",
    "2020-03-10",
    "2020-03-11",
    "2020-03-12",
    "2020-03-13",
    "2020-03-16",
    "2020-03-17",
    "2020-03-18",
    "2020-03-19",
    "2020-03-20",
    "2020-03-23",
    "2020-03-24",
    "2020-03-25",
    "2020-03-26",
    "2020-03-27",
    "2020-03-30",
    "2020-03-31",
    "2020-04-01",
    "2020-04-02",
    "2020-04-03",
    "2020-04-06",
    "2020-04-07",
    "2020-04-08",
    "2020-04-09",
    "2020-04-13",
    "2020-04-14",
    "2020-04-15",
    "2020-04-16",
    "2020-04-17",
    "2020-04-20",
    "2020-04-21",
    "2020-04-22",
    "2020-04-23",
    "2020-04-24",
    "2020-04-27",
    "2020-04-28",
    "2020-04-29",
    "2020-04-30",
    "2020-05-01",
    "2020-05-04",
    "2020-05-05",
    "2020-05-06",
    "2020-05-07",
    "2020-05-08",
    "2020-05-11",
    "2020-05-12",
    "2020-05-13",
    "2020-05-14",
    "2020-05-15",
    "2020-05-18",
    "2020-05-19",
    "2020-05-20",
    "2020-05-21",
    "2020-05-22",
    "2020-05-26",
    "2020-05-27",
    "2020-05-28",
    "2020-05-29",
    "2020-06-01",
    "2020-06-02",
    "2020-06-03",
    "2020-06-04",
    "2020-06-05",
    "2020-06-08",
    "2020-06-09",
    "2020-06-10",
    "2020-06-11",
    "2020-06-12",
    "2020-06-15",
    "2020-06-16",
    "2020-06-17",
    "2020-06-18",
    "2020-06-19",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-20",
    "2020-07-21",
    "2020-07-22",
    "2020-07-23",
    "2020-07-24",
    "2020-07-27",
    "2020-07-28",
    "2020-07-29",
    "2020-07-30",
    "2020-07-31",
    "2020-08-03",
    "2020-08-04",
    "2020-08-05",
    "2020-08-06",
    "2020-08-07",
    "2020-08-10",
    "2020-08-11",
    "2020-08-12",
    "2020-08-13",
    "2020-08-14",
    "2020-08-17",
    "2020-08-18",
    "2020-08-19",
    "2020-08-20",
    "2020-08-21",
    "2020-08-24",
    "2020-08-25",
    "2020-08-26",
    "2020-08-27",
    "2020-08-28",
    "2020-08-31",
    "2020-09-01",
    "2020-09-02",
    "2020-09-03",
    "2020-09-04",
    "2020-09-08",
    "2020-09-09",
    "2020-09-10",
    "2020-09-11",
    "2020-09-14",
    "2020-09-15",
    "2020-09-16",
    "2020-09-17",
    "2020-09-18",
    "2020-09-21",
    "2020-09-22",
    "2020-09-23",
    "2020-09-24",
    "2020-09-25",
    "2020-09-28",
    "2020-09-29",
    "2020-09-30",
    "2020-10-01",
    "2020-10-02",
    "2020-10-05",
    "2020-10-06",
    "2020-10-07",
    "2020-10-08",
    "2020-10-09",
    "2020-10-12",
    "2020-10-13",
    "2020-10-14",
    "2020-10-15",
    "2020-10-16",
    "2020-10-19",
    "2020-10-20",
    "2020-10-21",
    "2020-10-22",
    "2020-10-23",
    "2020-10-26",
    "2020-10-27",
    "2020-10-28",
    "2020-10-29",
    "2020-10-30",
    "2020-11-02",
    "2020-11-03",
    "2020-11-04",
    "2020-11-05",
    "2020-11-06",
    "2020-11-09",
    "2020-11-10",
    "2020-11-11",
    "2020-11-12",
    "2020-11-13",
    "2020-11-16",
    "2020-11-17",
    "2020-11-18",
    "2020-11-19",
    "2020-11-20",
    "2020-11-23",
    "2020-11-24",
    "2020-11-25",
    "2020-11-27",
    "2020-11-30",
    "2020-12-01",
    "2020-12-02",
  ],
  datasets: [
    {
      label: "Close price",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        28.08, 27.290001, 27.379999, 27.24, 27.73, 27.49, 27, 26.860001,
        27.719999, 27.48, 27.92, 28.280001, 28, 28.549999, 29.040001, 29.299999,
        29.18, 29.67, 28.440001, 28.299999, 28.68, 29.09, 27.65, 27.32,
        27.219999, 27.84, 27.950001, 27.32, 27.389999, 27.530001, 27.58, 28.23,
        28.4, 27.200001, 27.32, 28.799999, 27.639999, 26.110001, 26.9,
        26.799999, 27.719999, 26.84, 27.16, 28.43, 29.1, 28.299999, 28.379999,
        28.790001, 29.84, 30.469999, 30.09, 29.200001, 28.629999, 28.33, 28.51,
        27.82, 25.450001, 23.120001, 22.309999, 20.6, 19.049999, 18.860001,
        17.85, 18.530001, 16.040001, 15.97, 14.75, 17, 16.26, 13.45, 14.31,
        15.92, 15.58, 11.65, 10.29, 10.38, 10.25, 13.92, 15.39, 15.66, 14.04,
        12.25, 12.19, 10.69, 10.06, 9.39, 9.5, 10.22, 11.33, 12.51, 11.56,
        11.95, 12.29, 11.07, 11.57, 11.06, 11, 10.27, 10.25, 10.31, 10.02,
        11.26, 12.63, 12.01, 10.64, 9.82, 9.51, 9.25, 9.54, 10.14, 10.1, 9.65,
        9.11, 9.15, 9.04, 9.87, 9.64, 9.87, 9.89, 9.7, 11.14, 11.98, 10.98,
        10.5, 11.11, 11.22, 11.85, 16.719999, 18.59, 20.309999, 18.549999,
        17.02, 14.38, 16.74, 16.700001, 17.030001, 16.98, 16.49, 16, 14.92, 14,
        13.04, 13.17, 12.38, 13.32, 13.07, 12.81, 12.5, 12.8, 11.91, 11.99,
        11.18, 11.94, 11.63, 11.57, 13.44, 12.45, 11.91, 11.47, 11.47, 11.36,
        11.77, 11.39, 11.39, 11.77, 11.4, 11.18, 11.12, 11.08, 11.47, 12.56,
        13.04, 13.03, 14, 13.73, 13.54, 13.3, 13.33, 12.62, 12.6, 12.68, 12.5,
        12.16, 13.44, 13.14, 12.79, 13.28, 13.59, 13.05, 13.1, 13.23, 13.36,
        13.61, 13.63, 13.05, 13.01, 12.95, 13.26, 13.14, 13.8, 13.63, 13.19,
        12.21, 12.34, 11.93, 11.77, 12.29, 12.76, 12.25, 12.29, 12.58, 13,
        13.12, 12.53, 13.07, 13.16, 13.2, 12.92, 12.22, 12.36, 12.23, 12.46,
        12.56, 12.8, 12.75, 13.15, 12.6, 11.8, 11.23, 10.95, 11.16, 11.28,
        11.19, 11.25, 11.01, 11.6, 11.46, 13.2, 12.38, 12.04, 11.74, 12.24,
        12.79, 12.7, 12.74, 12.79, 12.53, 13.56, 14.82, 14.94, 14.98, 14.13,
        14.27, 14.705,
      ],
    },
  ],
};

{
  /*
var labels = graphData.jsonarray.map(function (e) {
  return e.Date;
'';
v
  return e.Close;
});

var ctx = canvas.getContext("2d");
var config = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Graph Line",
        data: data,
        backgroundColor: "rgba(0, 180, 242, 0.8)",
      },
    ],
  },
};

Chart.defaults.global.defaultFontColor = "white";

var chart = new Chart(ctx, config);
*/
}

const MyData = () => {
  return (
    <>
      <Line data={graphData} />
    </>
  );
};

export default MyData;