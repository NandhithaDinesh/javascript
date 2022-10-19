var books=[
    {id:1,bname:"Ente kadha",auther:"madhavikutti",price:"150"},
    {id:1,bname:"randamuzham",auther:"MT",price:"250"},
    {id:1,bname:"iruttinte athmavu",auther:"MT",price:"150"},

    ]

var htmldata=``
books.forEach(book=>{
    htmldata+=`
    <tr>
        <td>${book.id}</td>
        <td>${book.bname}</td>
        <td>${book.auther}</td>
        <td>${book.price}</td>
        
    </tr>
    `
})

document.querySelector("#result").innerHTML=htmldata;
