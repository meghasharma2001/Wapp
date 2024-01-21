const cityname = document.getElementById("cityname")
const submitbtn = document.getElementById("SubmitBtn")
const city_name = document.getElementById("city_name")
const temp_real_val = document.getElementById("temp_real_val")
const temp_status =document.getElementById("temp_status")
const datahide =document.querySelector(".middle_layer")

const getinfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;  
    if(cityval==="")
    {
        city_name.innertext = "plz write name before search";
        datahide.classList.add("data_hide");
    }
    else{
      
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q={cityval}&   appid=f222774470a98e3aff94a0778393f257 `
            const response =await fetch (url);
            const data=await response.json();
            const arrdata = [data];
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText=arr[0].main.temp;
            const tempMood = arrdata[0].weather[0].main;

            if(tempMood == "clear"){
                temp_status.innerHTML = "<i class='fa fa-cloud' aria-hidden='true'></i>"
            }
            if(tempMood == "rain"){
                temp_status.innerHTML = 
                    temp_status.innerHTML = "<i class='fa-duotone fa-cloud-rain'></i>"
            } 
            if(tempMood == "clouds"){
                temp_status.innerHTML = "<i class='fa fa-cloud' aria-hidden='true'></i>"
            }
            else(tempMood == "sun")
            {
                temp_status.innerHTML = "<i class='fa-light fa-brightness'></i>"
            }
            datahide.classList.remove("data_hide");
        }
        catch{
            city_name.innertext="plz enter city name properly";
            datahide_classList.add("data_hide");
        }
    }
}
submitbtn.addEventListener("click",getInfo); 