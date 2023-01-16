import './App.css';
import Homepage from './pages/Homepage.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import Intro from './components/Intro.js'
// import Create from './components/Create.js'
// import RecordList from './components/RecordList.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <Nav />
        
          <Homepage />  
        {/* <Create />
        <RecordList />
        <Homepage /> */}
        <Intro />
        <Footer />
    </div>
  );
}

export default App;
