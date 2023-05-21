import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/layout/DefaultLayout';
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#fff', // text color
          colorPrimary: '#393E46',
          colorPrimaryText: '#5D3891', // Tím
          colorTextDisabled: 'grey', // Xám nhạt
          colorTextBase: '#fff', // Menu title
          // colorPrimaryBg: '#6D9886', // background when focus menu con
          colorBgElevated: '#6D9886', // background menu dropdown

          colorBgBase: '#6D9886',

          colorBorderBg: 'transparent',
          controlItemBgActiveHover: 'red',
          controlItemBgHover: 'yellow'
        },
      }}
    >
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const HomePage = route.component

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null){
              Layout = Fragment as any
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                      <HomePage />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
    </ConfigProvider>
  );
}

export default App;
