import http from "axios";

const url = "https://covid19.mathdro.id/api";

export const getData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await http.get(url);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const getCountryData = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await http.get(`${url}/countries/${country}`);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const getDailyData = async () => {
  try {
    const { data } = await http.get(`${url}/daily`);

    const modifiedData = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths: data.deaths.total,
      date: data.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await http.get(`${url}/countries`);

    //   console.log(countries);

    const modifiedData = countries.map((country) => country.name);

    return modifiedData;
  } catch (error) {}
};
export default { getData, getDailyData, getCountries, getCountryData };
