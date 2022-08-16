fetch ('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data => display (data));
//.then (data=> console.log(data));

function display (data){
  var countriesDiv = document.getElementById("countries");
for (var a = 0; a < data.length; a++) {
  var country = data[a];
  //console.log(country.name.common)
  var countryDiv = document.createElement("div");
  countryDiv.className= 'country';
  var countryInfo =`
  <h3 class="country" >${country.name.common}</h3>
  <p>${country.capital}</p>
  `
  countryDiv.innerHTML = countryInfo;
  countriesDiv.appendChild(countryDiv);

}



}