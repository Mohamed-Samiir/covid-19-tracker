import React, { useEffect, useState } from "react";
import http from "../../services/httpService";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const assignDailyData = async () => {
      setDailyData(await http.getDailyData());
    };

    assignDailyData();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "reba(255, 0, 0, 0.7)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = country ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Cases",
            backgroundColor: [
              "rgba(0, 0, 255, 0.7)",
              "rgba(0, 255, 0, 0.7)",
              "rgba(255, 0, 0, 0.7)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
