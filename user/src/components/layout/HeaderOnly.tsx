import { Layout } from "antd";
import Header from "./common/Header";

const HeaderOnly = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

export default HeaderOnly;