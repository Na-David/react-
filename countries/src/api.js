import axios from "axios";

export async function fetchCountries() {
    try {
      const response = await axios.get("https://naras-api.vercel.app/all");
      //기본적인 API함수들은 비동기이다. 따라서 response에 API의 값이 언제 저장될지는 모르기 때문에
      //async, await을 설정해줌으로써 동기적으로 바꿔준 후 사용을 한다.
      return response.data;
    } catch (e) {
      return [];
    }
}

export async function fetchSearchResults(q){
    try {
        const response = await axios.get(`https://naras-api.vercel.app/search?q=${q}`);
        return response.data;
    }
    catch (e) {
        return [];
    }
}