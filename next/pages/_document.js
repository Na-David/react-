import { Html, Head, Main, NextScript } from 'next/document'
// 전체 페이지의 메타테그, 캐릭터셋, 폰트 같은것들을 설정해줄 수 있슴 -- 패이지 전체에 할당되는 내용들 담당
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
