
import './App.css';
import Homepage from './pages/Homepage.js'
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import Create from './components/Create.js'
import RecordList from './components/RecordList.js'

function App() {
  return (
    <div className="App">
        
        <Nav />
        <Homepage />
        {/* <Create />
        <RecordList />
        <Homepage /> */}
        <Footer />
    </div>
  );
}

export default App;
