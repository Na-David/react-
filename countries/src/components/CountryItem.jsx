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
    <div>
      {commonName},{flagEmoji}
    </div>
  );
}
