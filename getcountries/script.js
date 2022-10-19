var countries=[
    {id:1,cname:"India",population:1000000,currency:"rs",language:"Hindi"},
    {id:1,cname:"USA",population:200000,currency:"dollar",language:"English"},
    {id:1,cname:"China",population:2000000,currency:"yen",language:"Chinese"},
    {id:1,cname:"Sreelanka",population:1000000,currency:"sreelanken rs",language:"Simhala"},
]

var htmldata=``
countries.forEach(cntry=>{
    htmldata+=`
    <tr>
        <td>${cntry.id}</td>
        <td>${cntry.cname}</td>
        <td>${cntry.population}</td>
        <td>${cntry.currency}</td>
        <td>${cntry.language}</td>
        <td><button onClick="countryDetails(${cntry.id})">View</button></td>
    </tr>
    `
})

document.querySelector("#result").innerHTML=htmldata;
function countryDetails(id) {
   let details=countries.find(cnt=>cnt.id=id)
   populateValue(details)
}
function populateValue(country){
    let displaydata=`
    <ul class="list-group list-group-flush">
  <li class="list-group-item">${country.cname}</li>
  <li class="list-group-item">${country.population}</li>
  <li class="list-group-item">${country.currency}</li>
  <li class="list-group-item">${country.language}</li>
</ul>
    `
    document.querySelector("#id_details").innerHTML=displaydata;

}
