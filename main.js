const wilayas =require('./cities')
const ps = require("prompt-sync")
const input  = ps()

async function get_prayers_time(lat,lot,city){
    try{
        let response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lot}&method=3`)
        if(response.ok){
            const data = await response.json()
            console.log(`Prayer times in the state:  ${city}`)
            console.log('                                    ')
            console.log(`Date (Hijri): ${data["data"]["date"]["hijri"]["date"]} / Date(Georgian): ${data["data"]["date"]["readable"]} 
----------------
|Fajr: ${data["data"]["timings"]["Fajr"]}   |
|Sunrise: ${data["data"]["timings"]["Sunrise"]}|
|Dhuhr: ${data["data"]["timings"]["Dhuhr"]}  |
|Asr: ${data["data"]["timings"]["Asr"]}    |
|Sunset: ${data["data"]["timings"]["Sunset"]} |
|Maghreb: ${data["data"]["timings"]["Maghrib"]}|
|Isha: ${data["data"]["timings"]["Isha"]}   |
----------------`)
        }else{
            console.log(`Error :(  / error ${response.status}`)
        }

    }catch (err){
        console.log(`Something went Wrong / error: ${err}`)
    }

}
function main(){
    let choice = input("Enter the name of the wilaya please: ")
    let i=0;
    let found = false;
    let latitude,longitude
    while(found === false && i<58){
        if(choice.toLowerCase() === wilayas[i]["name"].toLowerCase()) {
            found = true
            latitude = wilayas[i]["latitude"]
            longitude = wilayas[i]["longitude"]
        }
            else{
                i=i+1
            }
        }
        if(found === true){
        get_prayers_time(latitude, longitude, choice)
    }else{
        console.log("The city is wrong or doesn't exist")
    }

}


main()