import { useEffect, useState } from "react";
import style from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Searchbar({ q }) {
  const [search, setSearch] = useState();
  const nav = useNavigate();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  return (
    <div className={style.container}>
      <input
        onKeyDown={onKeyDown}
        value={search}
        onChange={onChangeSearch}
        placeholder="Enter a keyword"
      />
      <button onClick={onClickSearch}>Search</button>
    </div>
  );
}
