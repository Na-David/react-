import Link from "next/link"; //Link는 넥스트에서 제공하는 컴포넌트로, SSR이 아닌 클라이언트가 컴포넌트만 바꿔쓰고싶을때 간단하게 사용할 수 있슴
import { useRouter } from "next/router";

export default function Home() {

  const code = "KOR";
  const router = useRouter();

  const onClickButton = () => {
    router.push("/search");//마찬가지로 URL 오브젝트도 가능
    // replace(뒤로가기방지페이지), reload, back 등등 많이있슴
  }

  return <div>
    Home

    <div>
      <button onClick={onClickButton}>GO to Search Page</button>
    </div>

    <div>
      <Link href={"/search"}>Search page</Link>
    </div>
    <div>
      <Link href={`/country/${code}`}>Go to {code}</Link> 
      {/* <Link href = {{
        pathname: "/country/[code]",
        query: {code : code}
      }} 이렇게 작성해도 됌 == URL object 로 구조화 한것*/}
    </div>
  </div>
}
