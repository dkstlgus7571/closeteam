import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Nav} from "react-bootstrap"
import Teamdetail from './components/Teamdetail.js';
import {Routes, Route, Link} from "react-router-dom";
import Main from './components/main';
import {useNavigate} from 'react-router-dom';
import create from 'zustand'
import Writing from './components/Writing';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  

  let navigate = useNavigate();
  return (
    <div className="App">
      <nav className='navbar'><span className='logo' onClick={ ()=>{navigate("/")}}> closeteam</span>
        
        <div className='element-wrap'>
          <span className='post_register' onClick={ () => {navigate("/writing")}}>글쓰기</span>

        </div>
      </nav>
      <div className='text'>
          <Carousel>
            <Carousel.Item>
              <img src={process.env.PUBLIC_URL + "/images/team1.jpeg"} style={{height:'250px', width:'100%'}}/>
            </Carousel.Item>

            <Carousel.Item>
            <img src= {process.env.PUBLIC_URL + "/images/team2.jpeg"} style={{height:'250px', width:'100%'}}/>
             </Carousel.Item>

              <Carousel.Item>
              <img src={process.env.PUBLIC_URL + "/images/team3.jpeg"} style={{height:'250px', width:'100%'}}/>
              </Carousel.Item>
        </Carousel>

      </div>
   
      <Routes>
      <Route
          path='/' element={<Main />}/>
      <Route
          path='/Teamdetail' element={<Teamdetail/>}/>
      <Route
          path='/writing' element={<Writing/>}/>

      </Routes>
  
    </div>
  );
}

export default App;
