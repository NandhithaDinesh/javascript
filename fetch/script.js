fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))
function populateValues(products){
    let htmldata=``;
    products.forEach(p=>{
        htmldata=`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        </div>
        `
    })
    document.querySelector("#id_details").innerHTML=htmldata;

}