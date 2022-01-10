fetch("http://www.omdbapi.com/?t=Requiem+for+a+Dream&plot=full&apikey=82e85d65")
    .then(function (response){return response.json()})
    .then(function (data){
        document.querySelector('.movie-title').innerHTML=data.Title;
        document.querySelector('.year').innerHTML=data.Year;
        document.querySelector('.plot').innerHTML=data.Plot;
    })
    .catch(function (){
        console.log(error)
    })

fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "4c036d613emsh1690c437cd6019cp1b81e7jsn5141debdec9a"
    }
})
    .then(function (response){return response.json()})
    .then(function (data){
        document.querySelector('.song-title').innerHTML=data.tracks[0]['title'];
        document.querySelector('.subtitle').innerHTML=data.tracks[0]['subtitle'];
    })
    .catch(function (){
        console.log(error)
    })

fetch('http://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=72d37bd2132ad8546d276aa9addb3f0d')
    .then(function (response){return response.json()})
    .then(function (data){
        document.querySelector('.weather-name').innerHTML=data.name;
        document.querySelector('.temperature').innerHTML= Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.descript').innerHTML=data.weather[0]['description'];
    })
    .catch(function (){
        console.log(error)
    })