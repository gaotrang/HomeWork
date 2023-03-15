
import 'antd/dist/reset.css';
import './App.css';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Bai1 from './components/Bai1';

const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <div>
      <Bai1 />
    </div>
  )
};
export default App;