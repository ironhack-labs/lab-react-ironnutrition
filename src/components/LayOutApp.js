import { Layout, Input } from 'antd';
import React from 'react'

const { Header, Footer, Content } = Layout;


// Este es un componente wapper que encierra otros componentes para agregar siempre el mismo contenido al rededor
const LayoutApp = ({ children, title }) => {

  return (
    <Layout>
      <Header style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue', color: 'white', fontSize:'26px' }}>
        {title}
        <br/>
      </Header>
      <Content
        style={{
          minHeight: 'calc(100vh - 64px - 112px)',
          padding: '2rem 5rem',
        }}
      >
        {children}
      </Content>
      <Footer>With 💙 by Ironhack</Footer>
    </Layout>
  );
};

export default LayoutApp;
