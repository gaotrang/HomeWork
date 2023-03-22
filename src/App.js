
import 'antd/dist/reset.css';
import './App.css';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Bai4 from './components/Bai4';

// const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <div>
      <Bai4 />
    </div>
  )
};
export default App;