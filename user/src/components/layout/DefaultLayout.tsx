import { Layout } from "antd";

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout style={{ background: 'red' }}>
      {children}
    </Layout>
  );
}

export default DefaultLayout;