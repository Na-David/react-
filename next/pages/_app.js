//모든 컴포넌트의 부모역할로서 페이지 레이아웃은 이 파일에

import '@/styles/globals.css'
import Layout from '@/components/Layout';
import SubLayout from '@/components/SubLayout';

export default function App({ Component, pageProps }) {

  const EmptyLayout = ({children}) => <>{children}</>
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
    );
}

