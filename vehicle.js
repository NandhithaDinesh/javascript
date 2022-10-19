var baleno={
    name:"baleno",
    colors:["red","white","grey"],
    price:"8lac",
    breakes:"abs",
    transmission:"manuel",
    getPrice(){
        return this.price
    }
}

var glanza={
    name:"glanza",
    brand:"toyota",
    price:"10lac"
}
glanza.__proto__=baleno

console.log(glanza.colors);
console.log(glanza.getPrice());
