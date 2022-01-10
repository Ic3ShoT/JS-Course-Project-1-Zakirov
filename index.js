const modalImdb = $.modal({
    closable: true,
    title: `<h1 style="color: #f5c518">IMDb</h1>`,
    content: `<p>Random movie:</p>`,
    api: `
        <div class="container">
            <div class="doesntmatter">
                <h1 class="movie-title"></h1>
                <h3 class="year"></h3>
                <h6 class="plot"></h6>
            </div>
        </div>`
})

const modalShazam = $.modal({
    closable: true,
    title: `<h1 style="color: #007bff">Shazam</h1>`,
    content: `<p>Most popular song:</p>`,
    api: `
        <div class="container">
            <div class="doesntmatter">
                <h1 class="song-title"></h1>
                <p>By:</p>
                <h3 style="font-style: italic" class="subtitle"></h3>  
            </div>
        </div>`
})

const modalWeather = $.modal({
    closable: true,
    title: `<h1 style="color: #eb563e">Weather</h1>`,
    content: `<p>Current weather:</p>`,
    api: `
        <div class="container">
            <div class="doesntmatter">
                <h1 class="weather-name"></h1>
                <h3 class="temperature"></h3>
                <h5 style="font-style: italic" class="descript"></h5>
            </div>
        </div>`
})

document.addEventListener('click', event =>{
    event.preventDefault()
    const btnType = event.target.dataset.btn
    if (btnType ==='valueImdb'){
        modalImdb.open()
    }
    else if (btnType ==='valueShazam'){
        modalShazam.open()
    }
    else if (btnType ==='valueWeather'){
        modalWeather.open()
    }
})