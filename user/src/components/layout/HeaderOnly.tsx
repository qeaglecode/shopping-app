import Header from "./common/Header";

const HeaderOnly = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content" style={{ background: 'red', color: 'red' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;