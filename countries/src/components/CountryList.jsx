import CountryItem from "./CountryItem";

export default function CountryList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountryList.defaultprops = {
  countries: [],
};
