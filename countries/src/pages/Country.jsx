import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import { useEffect, useState } from "react";
import style from "./Country.module.css";

export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  if (!country) {
    return <div>Loading ... ...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji} &nbsp; {country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}'s Country Image`}
      />
      <div className={style.body}>
        <div>
          <b>Code :</b>&nbsp;{country.code}
          {/* &nbsp = 공백 */}
        </div>
        <div>
          <b>Capital :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>Region :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>Map :</b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}
