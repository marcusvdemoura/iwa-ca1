'use strict'

fetch("https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=8c0421336bf19ae390c470eb7858662f82772d84").  then(
    res=>{
         res.json().then(
            data=>{
                console.log(data);
                if(data.length >0){
                    var temp = "";
                    data.forEach((u)=>{
                        temp+="<tr>";
                        temp += "<td>" + u.number+"</td>";
                        temp += "<td>"+u.address+"</td>";
                        temp += "<td>"+u.available_bikes+"</td>";
                        temp += "<td>"+u.available_bike_stands+"</td></tr>";
                    })
                    document.getElementById("data").innerHTML=temp;
                }
            }
        )

    }
)