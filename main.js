const wilayas = [
    {"id":"1","code":"1","name":"Adrar","ar_name":"أدرار","longitude":-0.20396,"latitude":27.9766155},
    {"id":"2","code":"2","name":"Chlef","ar_name":"الشلف","longitude":1.3539002,"latitude":36.1691245},
    {"id":"3","code":"3","name":"Laghouat","ar_name":"الأغواط","longitude":2.8829115,"latitude":33.7873735},
    {"id":"4","code":"4","name":"Oum El Bouaghi","ar_name":"أم البواقي","longitude":7.1180248,"latitude":35.8726014},
    {"id":"5","code":"5","name":"Batna","ar_name":"باتنة","longitude":3.1066502,"latitude":35.32147},
    {"id":"6","code":"6","name":"Béjaïa","ar_name":"بجاية","longitude":5.0085855,"latitude":36.7695969},
    {"id":"7","code":"7","name":"Biskra","ar_name":"بسكرة","longitude":5.7246709,"latitude":34.8515041},
    {"id":"8","code":"8","name":"Bechar","ar_name":"بشار","longitude":-1.8540446,"latitude":31.5977602},
    {"id":"9","code":"9","name":"Blida","ar_name":"البليدة","longitude":2.8009379,"latitude":36.4803023},
    {"id":"10","code":"10","name":"Bouira","ar_name":"البويرة","longitude":3.925049,"latitude":36.2084234},
    {"id":"11","code":"11","name":"Tamanrasset","ar_name":"تمنراست","longitude":5.6754684,"latitude":22.2746227},
    {"id":"12","code":"12","name":"Tbessa","ar_name":"تبسة","longitude":8.110545,"latitude":35.4117259},
    {"id":"13","code":"13","name":"Tlemcen","ar_name":"تلمسان","longitude":-1.3150979,"latitude":34.8959541},
    {"id":"14","code":"14","name":"Tiaret","ar_name":"تيارت","longitude":1.3916159,"latitude":35.3599899},
    {"id":"15","code":"15","name":"Tizi Ouzou","ar_name":"تيزي وزو","longitude":4.075957,"latitude":36.7002068},
    {"id":"16","code":"16","name":"Alger","ar_name":"الجزائر","longitude":3.057841,"latitude":36.7538259},
    {"id":"17","code":"17","name":"Djelfa","ar_name":"الجلفة","longitude":3.2993118,"latitude":34.6672467},
    {"id":"18","code":"18","name":"Jijel","ar_name":"جيجل","longitude":5.7504845,"latitude":36.7962714},
    {"id":"19","code":"19","name":"Se9tif","ar_name":"سطيف","longitude":5.4202134,"latitude":36.1905173},
    {"id":"20","code":"20","name":"Saefda","ar_name":"سعيدة","longitude":0.1483583,"latitude":34.841945},
    {"id":"21","code":"21","name":"Skikda","ar_name":"سكيكدة","longitude":6.9357204,"latitude":36.8777912},
    {"id":"22","code":"22","name":"Sidi Bel Abbes","ar_name":"سيدي بلعباس","longitude":-0.6301368,"latitude":35.206334},
    {"id":"23","code":"23","name":"Annaba","ar_name":"عنابة","longitude":7.7452755,"latitude":36.9184345},
    {"id":"24","code":"24","name":"Guelma","ar_name":"قالمة","longitude":7.4334312,"latitude":36.4569088},
    {"id":"25","code":"25","name":"Constantine","ar_name":"قسنطينة","longitude":6.7370571,"latitude":36.319475},
    {"id":"26","code":"26","name":"Medea","ar_name":"المدية","longitude":2.7728462,"latitude":36.2838408},
    {"id":"27","code":"27","name":"Mostaganem","ar_name":"مستغانم","longitude":0.1149273,"latitude":35.9751841},
    {"id":"28","code":"28","name":"M'Sila","ar_name":"المسيلة","longitude":4.5187283,"latitude":35.7211476},
    {"id":"29","code":"29","name":"Mascara","ar_name":"معسكر","longitude":0.1542592,"latitude":35.382998},
    {"id":"30","code":"30","name":"Ouargla","ar_name":"ورقلة","longitude":4.9634113,"latitude":32.1961967},
    {"id":"31","code":"31","name":"Oran","ar_name":"وهران","longitude":-0.6405861,"latitude":35.7066928},
    {"id":"32","code":"32","name":"El Bayadh","ar_name":"البيض","longitude":0.950011,"latitude":32.5722756},
    {"id":"33","code":"33","name":"Illizi","ar_name":"إليزي","longitude":8.480587,"latitude":26.5065999},
    {"id":"34","code":"34","name":"Bordj Bou Arreridj","ar_name":"برج بوعريريج","longitude":4.7691823,"latitude":36.0686488},
    {"id":"35","code":"35","name":"Boumerdes","ar_name":"بومرداس","longitude":3.4917212,"latitude":36.7564181},
    {"id":"36","code":"36","name":"El Tarf","ar_name":"الطارف","longitude":8.2984543,"latitude":36.7534258},
    {"id":"37","code":"37","name":"Tindouf","ar_name":"تندوف","longitude":-6.3252899,"latitude":27.2460501},
    {"id":"38","code":"38","name":"Tissemsilt","ar_name":"تيسمسيلت","longitude":1.802187,"latitude":35.6021906},
    {"id":"39","code":"39","name":"El Oued","ar_name":"الوادي","longitude":6.8573436,"latitude":33.3714492},
    {"id":"40","code":"40","name":"Khenchela","ar_name":"خنشلة","longitude":7.1414137,"latitude":35.4263293},
    {"id":"41","code":"41","name":"Souk Ahras","ar_name":"سوق أهراس","longitude":7.9592299,"latitude":36.277849},
    {"id":"42","code":"42","name":"Tipaza","ar_name":"تيبازة","longitude":2.4085379,"latitude":36.5980966},
    {"id":"43","code":"43","name":"Mila","ar_name":"ميلة","longitude":6.2487316,"latitude":36.4514882},
    {"id":"44","code":"44","name":"Ain Defla","ar_name":"عين الدفلى","longitude":2.1772514,"latitude":36.1283915},
    {"id":"45","code":"45","name":"Naama","ar_name":"النعامة","longitude":-0.8021968,"latitude":33.1995605},
    {"id":"46","code":"46","name":"Ain Temouchent","ar_name":"عين تموشنت","longitude":-1.0580975,"latitude":35.404044},
    {"id":"47","code":"47","name":"Ghardaefa","ar_name":"غرداية","longitude":3.7455655,"latitude":32.5891743},
    {"id":"48","code":"48","name":"Relizane","ar_name":"غليزان","longitude":0.867381,"latitude":35.8050195},
    {"id":"49","code":"49","name":"El M'ghair","ar_name":"المغير","longitude":5.922222,"latitude":33.947222},
    {"id":"50","code":"50","name":"El Menia","ar_name":"المنيعة","longitude":2.879167,"latitude":30.579167},
    {"id":"51","code":"51","name":"Ouled Djellal","ar_name":"أولاد جلال","longitude":5.066667,"latitude":34.433333},
    {"id":"52","code":"52","name":"Bordj Baji Mokhtar","ar_name":"برج باجي مختار","longitude":0.955556,"latitude":21.327778},
    {"id":"53","code":"53","name":"Béni Abbès","ar_name":"بني عباس","longitude":-2.166667,"latitude":30.133333},
    {"id":"54","code":"54","name":"Timimoun","ar_name":"تيميمون","longitude":0.230556,"latitude":29.258333},
    {"id":"55","code":"55","name":"Touggourt","ar_name":"تقرت","longitude":6.063889,"latitude":33.108333},
    {"id":"56","code":"56","name":"Djanet","ar_name":"جانت","longitude":9.484722,"latitude":24.554167},
    {"id":"57","code":"57","name":"In Salah","ar_name":"عين صالح","longitude":2.483333,"latitude":27.197222},
    {"id":"58","code":"58","name":"In Guezzam","ar_name":"عين قزام","longitude":5.769444,"latitude":19.572222}
]

async function get_prayers_time(lat,lot,city){
    let result
    try{
        let response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lot}&method=3`)
        if(response.ok){
            const data = await response.json()
            console.log(`Prayer times in the state:  ${city}`)
            console.log('                                    ')
            result = data
            return result
        }else{
            console.log(`Error :(  / error ${response.status}`)
        }

    }catch (err){
        console.log(`Something went Wrong / error: ${err}`)
    }

}
function main(){
    const inp = document.getElementById('city')
    const button = document.getElementById('search')
    const output = document.getElementById('output')

    button.addEventListener("click",async ()=>{
        const city = inp.value
        let times
        let i=0;
        let found = false;
        let latitude,longitude
        while(found === false && i<58){
            if(city.toLowerCase() === wilayas[i]["name"].toLowerCase()) {
                found = true
                latitude = wilayas[i]["latitude"]
                longitude = wilayas[i]["longitude"]
            }
            else{
                i=i+1
            }
        }
        if(found === true){
            times = await  get_prayers_time(latitude, longitude, city)
            output.innerHTML = `<h3>📍 City: ${city} </h3>

<p>📅 Hijri: ${times["data"]["date"]["hijri"]["date"]}</p>
<p>📅 Gregorian: ${times["data"]["date"]["readable"]}</p>
<hr>
<p>🕌 Fajr: ${times["data"]["timings"]["Fajr"]}</p>
<p>🌅 Sunrise: ${times["data"]["timings"]["Sunrise"]}</p>
<p>☀️ Dhuhr: ${times["data"]["timings"]["Dhuhr"]}</p>
<p>🌤 Asr: ${times["data"]["timings"]["Asr"]}</p>
<p>🌇 Maghrib: ${times["data"]["timings"]["Maghrib"]}</p>
<p>🌙 Isha: ${times["data"]["timings"]["Isha"]}</p> `
        }else{
            output.textContent = "City Not found"
        }
        }
    )

}
main()