
// SECOND STEP
async function getWeatherData() {
    try {
        let location = "istanbul";
        const response = await fetch(
  `http://api.weatherapi.com/v1/current.json?key=KEY?
&q=${location}&aqi=no`,
  { mode: "cors" }
);

      
        const getData = await response.json();

        console.log(getData);

        return getData;
    
    


    } catch(error) {
        console.log(error);
    }
}

/// THIRD STEP

async function displayWeatherData() {
      try { 
    
    const getJSON = await getWeatherData();


    
     
     
  const Data = {
   weather: getJSON.current.condition.text,

   temperature: getJSON.current.temp_c,

   location: getJSON.location.country,

   city: getJSON.location.name,
      

  }
       console.log(getJSON.current.condition.text);
        console.log(getJSON.current.temp_c);
        console.log(getJSON.location.country);
        console.log(getJSON.location.name);

        console.log(Data);




    }  catch(error) {
        console.log(error);
    }
}

displayWeatherData();

//FOURTH STEP

const searchInput = document.querySelector('form');  // Form element to listen for submission
const showDataDiv = document.querySelector('.showdata');  // Div where we will display the weather data

searchInput.addEventListener("submit", (event) => {
  event.preventDefault();  // Prevent form from reloading the page

  const searchQuery = document.querySelector('#search').value.trim();  // Get the value from the input field

  if (!searchQuery) {
    showDataDiv.innerHTML = '<p>Please enter a location.</p>';  // Show message if input is empty
    return;
  }

  // Fetch the weather data using the search query
  fetch(`http://api.weatherapi.com/v1/current.json?key=2131437186b046c39d7223234240802&q=${searchQuery}&aqi=no`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      // Display the weather data in the .showdata div
      showDataDiv.innerHTML = `
        <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
        <p class="cond">Condition: ${data.current.condition.text}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
      `;

      if (data.current.condition.text === "Partly cloudy") {

        showDataDiv.innerHTML += `

        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png"></img>

        `;

      }

      if (data.current.condition.text === "Partly Cloudy") {

        showDataDiv.innerHTML += `

        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png"></img>

        `;

      }

   else if (data.current.condition.text === "Sunny") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png"></img>

    `;

   }


   else if (data.current.condition.text === "Moderate or heavy rain with thunder") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/day/389.png"></img>

    `;

   }


   else if (data.current.condition.text === "Light snow") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/night/326.png"></img>

    `;

   }


   else if (data.current.condition.text === "Overcast") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/night/122.png"></img>

    `;

   }


   else if (data.current.condition.text === "Light rain") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/night/296.png"></img>

    `;

   }

   else if (data.current.condition.text === "Clear") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/night/113.png"></img>

    `;

}

else if (data.current.condition.text === "Patchy rain nearby") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/day/176.png"></img>

    `;

}

else if (data.current.condition.text === "Cloudy") {
    
    showDataDiv.innerHTML += `

    <img src="https://cdn.weatherapi.com/weather/64x64/night/119.png"></img>

    `;

}
      console.log(data.current.condition.text);
      console.log(data.current.condition.icon);
    })
    .catch(error => {
      showDataDiv.innerHTML = '<p>Error fetching weather data. Please try again.</p>';  // Show error message if fetch fails
      console.error("Error fetching data:", error);
    });
});
