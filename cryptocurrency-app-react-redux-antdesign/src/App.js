import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import { Button, Layout, Typography, Space } from 'antd';
import {CryptoCurrencies, CryptoDetails, Exchange, HomePage, Navbar, News } from "./components"


const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
      <Content className='main'>
          <Layout>

            <Sider className='navbar' width={250}>
              <Navbar/>
            </Sider>

            <Content className='routes'>
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>

                <Route exact path="/cryptocurrencies" element={<CryptoCurrencies/>}/>

                <Route exact path="/news" element={<News/>}/>

                <Route exact path="/exchange" element={<Exchange/>}/>

                <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              </Routes>
            </Content>

          </Layout>
      </Content>

      <Footer className='footer'>
        <Typography.Title level={5} style={{color : 'white', textAlign: "center"}}>
          CryptoInfo <br/> All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchange">Exchange</Link>
          <Link to="/news">News</Link>
        </Space>
      </Footer>
      </Layout>
    </div>
  );
}

export default App;
