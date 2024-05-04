import React, { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setCountry(data.country_name);
    }

    fetchCountry();
  }, []);

  /*var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
  setInterval(function () {
    var ele = document.getElementById("B");
    ele.style.display = ele.style.display === "none" ? "inline" : "none";
  }, blink_speed);
*/
  //second try
  var blink_speed = 1500; // every 1000 == 1 second, adjust to suit
  setInterval(function () {
    var ele = document.getElementById("B");
    ele.style.border =
    ele.style.border = ele.style.border === "none" ? "30px solid rgb(255, 255, 0)" : "none";

  }, blink_speed);

  return (
    <div id="A">
      <div id="B">Your country is: {country}</div>
    </div>
  );
}

export default App;
