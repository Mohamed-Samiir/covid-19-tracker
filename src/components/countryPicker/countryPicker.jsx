import React, { useEffect, useState } from "react";
import http from "../../services/httpService";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./countryPicker.module.css";

const CounrtryPicker = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const assignCountries = async () => {
      setCountries(await http.getCountries());
    };

    assignCountries();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => onCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CounrtryPicker;
