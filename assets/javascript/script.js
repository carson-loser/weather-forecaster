var searchButton = document.getElementById("search")

function city() {
  var cityName = document.getElementById('info').value

  fetch ("https://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid=f88d95134510a4e3688306254dbc934f") 
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
    console.log(data)
    console.log(data[0])
    console.log(data[0].name)
    
    var latitude = data[0].lat
    var longitude = data[0].lon
    weatherPull(latitude, longitude)
  })
}
  function weatherPull(lat, lon) {
    fetch ("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=f88d95134510a4e3688306254dbc934f")
    .then(function(res){
      return res.json()
      
    })
    .then(function(data){
      console.log(data)
      
    })
  }


searchButton.addEventListener("click", city)

      


        

    