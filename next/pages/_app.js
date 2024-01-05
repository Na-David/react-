//모든 컴포넌트의 부모역할로서 페이지 레이아웃은 이 파일에

import '@/styles/globals.css'
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
}
