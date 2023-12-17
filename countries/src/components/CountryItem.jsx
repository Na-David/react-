import style from "./CountryItem.module.css";

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}) {
  return (
    <div className={style.container}>
      <img className={style.flag_img} src={flagImg} />
      <div className={style.content}>
        <div>
          {flagEmoji} {commonName}
        </div>
        <div>Region: {region}</div>
        <div>Capital: {capital.join(",")}</div>
      </div>
    </div>
  );
}
