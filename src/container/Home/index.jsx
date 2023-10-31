import React from "react";
import './styles.scss';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate'
 const Home=()=>{
   const navigate=useNavigate();
  // console.log(navigate);
   const handleNavigateToContactMePage=()=>{
     navigate('/contact') 
   }
    return(<section section id="name" className="home">
     <div className="home_text-wrapper">
        <h1>
            Hi I am Tribhuwan Pal <br></br>
          Java Full Stack  Developer
        </h1>
    </div>
    <Animate play
    duration={1.5}
    delay={1
    }
    start={{
      transform:'translateY(550px)'
    }}
    end={{
      transform :'translatex(0px)'
    }}> 
    <div className="home_contact-me" >
    <button style={{color:'white'}} onClick={handleNavigateToContactMePage}> Hire Me</button>
</div>
    </Animate>
    
    </section>);
 }
 export default Home;