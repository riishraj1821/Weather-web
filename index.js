const apikey="3a629b54b8a60c74ad6c474521d525ae";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const wheatherIcon = document.querySelector(".weather-icon");


const weather = document.querySelector(".weather")
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const error = document.querySelector(".error");
async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);

    if(response.status==404){
        error.style.display="block";
        weather.style.display="none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
    if(data.weather[0].main=="Clouds"){
        wheatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wheatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        wheatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        wheatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        wheatherIcon.src="images/mist.png";
    }
    
    weather.style.display = "block";
    error.style.display="none";
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

