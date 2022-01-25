import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from 'react-router-dom'
import withRouter from "./utils/withRouter";

let HatsPage = (props) => {
    console.log(props)
    return <div>
        <h1>HATS PAGE</h1>
    </div>
}

const Hatspage = withRouter(HatsPage);




function App() {
  return <div>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hats' element={<Hatspage />} />
      </Routes>
  </div>;
}

export default App;
