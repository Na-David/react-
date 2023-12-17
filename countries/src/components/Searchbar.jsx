import { useState } from "react";
import style from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [search, setSearch] = useState();
  const nav = useNavigate();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="Enter a keyword"
      />
      <button onClick={onClickSearch}>Search</button>
    </div>
  );
}
