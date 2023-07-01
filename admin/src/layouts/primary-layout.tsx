import Header from '@components/common/layout/header';
import { FloatButton, Layout } from 'antd';

import style from './primary-layout.module.scss';

interface IPrimaryLayout {
  children: any;
}

function PrimaryLayout({
  children
}: IPrimaryLayout) {

  return (
    <Layout>
      <div className={style.container} id="primaryLayout">
        <Header />

        <Layout.Content>
          {children}
        </Layout.Content>

        <FloatButton.BackTop className={style.backTop} onClick={() => document.querySelector('#layoutHeader') as any} />
      </div>
    </Layout>
  );
}

export default PrimaryLayout;
