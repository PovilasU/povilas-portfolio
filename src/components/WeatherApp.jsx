const WeatherApp =()=>{

    const apiRoot = 'https://api.open-meteo.com/v1/'
    const geoRoot = 'https://geocoding-api.open-meteo.com/v1/search?name='

    const submit = async (e) =>{
        e.preventDefault();
        const geoRes = await fetch(geoRoot + e.target.city.value)
        const geoJSON = await geoRes.json()
        console.log(geoJSON)
        //await
      //  fetch
    }
    return (
        <div>

            <p>weather app</p>

            <form onSubmit={submit}>
                <input name="city" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default WeatherApp;