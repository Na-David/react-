import axios from "axios";
import { useEffect, useState } from "react";

async function fetchCountries() {
  const response = await axios.get("https://naras-api.vercel.app/all");
  //기본적인 API함수들은 비동기이다. 따라서 response에 API의 값이 언제 저장될지는 모르기 때문에
  //async, await을 설정해줌으로써 동기적으로 바꿔준 후 사용을 한다.
  return response.data;
}

export default function Home() {
  const [countires, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return <div>Home</div>;
}
