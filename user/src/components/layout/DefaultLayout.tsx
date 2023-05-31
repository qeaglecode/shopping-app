import { Layout } from "antd";
import Header from "./common/Header";
import Footer from "./common/Footer";
import RightSider from "./common/right-sider";
import LeftSider from "./common/left-sider";

import s from './default-layout.module.scss';

interface IProps {
  children: any;
}

const { Sider } = Layout;

const DefaultLayout = ({ children }: IProps) => {
  return (
    <Layout className={s['default-layout']}>
      <Header />
      <Layout>
        
        <Sider className={s['left-sider-layout']}>
          <LeftSider />
        </Sider>
        
        {children}

        <Sider className={s['right-sider-layout']}>
          <RightSider />
        </Sider>

      </Layout>
      <Footer />
    </Layout>
  );
}

export default DefaultLayout;