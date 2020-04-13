window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let placeLocation = document.querySelector('.place_location');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            location(lat,long);
        });
    }

    function location(lat, long){
        const proxy = 'https://cors.x7.workers.dev/'; //'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/63590751acd2e915658812cde6acf1e4/${lat},${long}`;
        const api2 = `${proxy}https://eu1.locationiq.com/v1/reverse.php?key=896a46365516fc&lat=${lat}&lon=${long}&format=json`; 
        
        fetch(api)
        .then(response => {
            return response.json(console.log(response));
        })
            .then(data =>{
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                //set DOM elements from the API
                temperatureDegree.textContent = Math.round((temperature - 32) * 5/9) +'C';
                temperatureDescription.textContent = 'Todays forcast is '+summary;
                locationTimezone.textContent = 'Your current timezone is '+data.timezone;
                console.log(icon);
                //set icon
                setIcons(icon, document.querySelector(".icon"));    
        });

        fetch(api2)
        .then(response => {
            return response.json(console.log(response));
        })
            .then(data =>{
                console.log(data);
                const address = data.display_name;
                placeLocation.textContent = 'This is the weather based on your location being '+address;
        });
    }

    function setIcons(icon, iconID){
        const skycons =  new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        console.log(currentIcon);
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon]);
    }
});
