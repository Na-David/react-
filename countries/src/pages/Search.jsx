import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import style from "./Search.module.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <div>
        Search Results "<b>{q}</b>"
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
