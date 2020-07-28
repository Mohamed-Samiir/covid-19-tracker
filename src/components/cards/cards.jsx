import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return <img src="/loading.gif" alt="" />;
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Infected</Typography>
            <Typography variant={"h5"}>
              <CountUp
                start={0}
                end={confirmed.value}
                speed={2.5}
                separator=","
              />
            </Typography>
            <Typography color={"textSecondary"}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Recovered</Typography>
            <Typography variant={"h5"}>
              <CountUp
                start={0}
                end={recovered.value}
                speed={2.5}
                separator=","
              />
            </Typography>
            <Typography color={"textSecondary"}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of recoveries cases from covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Deaths</Typography>
            <Typography variant={"h5"}>
              <CountUp start={0} end={deaths.value} speed={2.5} separator="," />
            </Typography>
            <Typography color={"textSecondary"}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of death cases by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
