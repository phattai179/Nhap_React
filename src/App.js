import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapReact from './Components/BaiTapReact/BaiTapReact';
import DataBinding from './Components/DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapReact/> */}
      <DataBinding/>
    </div>
  );
}

export default App;
