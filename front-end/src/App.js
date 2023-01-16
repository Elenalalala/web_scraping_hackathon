import './App.css';
import Homepage from './pages/Homepage.js'
import Footer from './components/Footer.js'
import NavBar from './components/NavBar.js'

// import Create from './components/Create.js'
// import RecordList from './components/RecordList.js'
import 'bootstrap/dist/css/bootstrap.css';
import{Image, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
        
        <Row className= "px4 my-5">
            <Col sm={7}>
              <Image
                src= "https://picsum.photos/100/800"
                fluid
                rounded
                className=""
              />
            </Col>
          </Row>

          <Homepage />  
        </main>
        {/* <Create />
        <RecordList />
        <Homepage /> */}
        
        <Footer />
    </div>
  );
}

export default App;
