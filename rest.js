var xhr = new XMLHttpRequest();
var parsedResponse = [];

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        resp = this.responseText;
        //console.log(resp);
        parsedResponse = JSON.parse(resp);
        
        
         for(nm of parsedResponse){
            let name1 = nm.name.common;
            let region = nm.region;
            let sub_region = nm.subregion;
            let pop = nm.population;
            let nameOfCountry = document.getElementById("container");
            const countryBox = document.createElement('div');
            countryBox.classList.add('country_box')    
            let innerBox = `
                <h3>Name : ${name1}</h3>
                <ul>
                <li>Region : ${region}</li>
                <li>SubRegion : ${sub_region}</li>
                <li>Population : ${pop}</li>
                </ul>
            `
            countryBox.innerHTML = innerBox;
            nameOfCountry.append(countryBox)

         }
        
        for(i of parsedResponse){
            console.log(`Flag: ${i.flags.png}`)
        }
    }
}

xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.send();