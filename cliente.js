function consultaClima() {
  let ciudad = document.getElementById("ciudad").value;


  const options = {
    method: "GET"
  };

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
    .then(response => response.text())
    .then(data => {
      //convertimos formato json cadena en objeto de javascript
      let infoClima = JSON.parse(data);
      let temperatura = parseFloat((infoClima.main.temp) - 273.15).toFixed(2);
      let viento =(infoClima.wind.speed);
      let cielo = (infoClima.weather[0].description)
      console.log(temperatura);
      let temp = document.getElementById("temp").innerHTML ="temperatura: "+ temperatura + "°";
      let sky = document.getElementById("sky").innerHTML = "Cielo: "+ cielo;
      let wind = document.getElementById("wind").innerHTML = "Vientos: " + viento;
      let icon= (data.weather[0].icon)
      document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png`)
    }).catch((err) => { console.log("Info error: ", err); })
    
}