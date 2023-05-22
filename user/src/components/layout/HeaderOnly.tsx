import Header from "./common/Header";

const HeaderOnly = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;