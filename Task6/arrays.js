// function Array(){
//     const Data=fetch("https://restcountries.com/v3.1/all").then(r=>r.json()).then(data=>{

//     const aisa=data.filter(county=>county.region==="Aisa");

//     console.log(aisa);

//     })

// }
fetch("https://restcountries.com/v3.1/all").then((r) => r.json()).then((data) => {

    const Aisa = data.filter((country) => country.region === "Asia");
    console.log(Aisa);

    const populationDetails = data.filter((country) => country.population < 2000000);
    console.log(populationDetails);

    Aisa.forEach((country) => {
      console.log("name :", country.name.common);
      console.log("capital:", country.capital);
      console.log("flag :", country.flag);
    });

    const tpopulationdetails=data.reduce((area,country)=> area+country.population,0); 
    console.log(tpopulationdetails);

    const usDollor=data.find(country=>{
        return country.currencies && Object.values(country.currencies).includes("USD");
    });

    if(usDollor){
        console.log("Country that uses US dollars:", usDollor.name.common);
    }
    else{
        console.log("No country uses US dollars as currency.");
    }

  }).catch(error=>console.error("the error data",error));