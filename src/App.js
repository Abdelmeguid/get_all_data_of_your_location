import React, { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [country, setCountry] = useState("");
  const [ip, setIp] = useState("");
  const [currency, setCurrency] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setCountry(data.country_name);
      setIp(data.ip);
      setCurrency(data.currency);
    }

    fetchCountry();
  }, []);

  /*var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
  setInterval(function () {
    var ele = document.getElementById("B");
    ele.style.display = ele.style.display === "none" ? "inline" : "none";
  }, blink_speed);
*/
  // second try
  // var blink_speed = 1500; // every 1000 == 1 second, adjust to suit
  // setInterval(function () {
  //   var ele = document.getElementById("A");
  //   // ele.style.border =
  //   //  ele.style.border === "none" ? "30px solid rgb(255, 255, 0)" : "none";
  //   //  ele.style.border === "30px solid rgb(255, 255, 0) " ? "30px solid rgb(255, 255, 255) " : "30px solid rgb(255, 255, 0) ";
  //   ele.style.border = "30px solid rgb(255, 255, 0) ";
    

  // }, blink_speed);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="A" className={isBlinking ? "yellow" : "black"}>
      

      <table className="table table-bordered" style={{border:"10px solid rgb(0,0,0)", height:"100%"}} >
      <thead>
        <tr>
      
          <th >Property</th>
          <th>Value</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
         
        <td >Your country</td>
        
          <td style={{ color: '#1157e2' }}>{country}</td>
          
        </tr>
        <tr>
       
          <td>Your Ip</td>
          <td style={{ color: '#1157e2' }}>{ip}</td>
          
        </tr>
        <tr>
      
          <td>currency</td>
          <td style={{ color: '#1157e2' }}>{currency}</td>
          
        </tr>
      </tbody>
    </table>
    </div>

    
  );
}

export default App;
