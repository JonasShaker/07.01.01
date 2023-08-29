fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(data=>showProducts(data));

function showProducts(products){
    // Looper og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product){

    // console.log(product);
    // fang template
const template = document.querySelector("#smallProductTemplate").content;
    // lav en kopi
const copy = template.cloneNode(true);

    // ændre indhold

    copy.querySelector("h3").textContent = product.productdisplayname;
    
     if (product.soldout) {
    // prodyktet er udsolgt 
    copy.querySelector("article").classList.add("sold-out-text")
}


if (product.discount){
    // prodyktet er på udsalg 
  

    copy.querySelector("p.p3").textContent=product.price-(product.price/100)* product.discount;
    copy.querySelector("p.p4").textContent= product.discount + "%";
    copy.querySelector("p.p4").textContent= product.discount + "%"   ;
} else{
    copy.querySelector(".discounted").remove();
}
    

    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;   

    copy.querySelector("p.subtle").textContent = product.brandname;
    copy.querySelector("p.subtle").textContent +="/"+ product.brandname.articletype;
    copy.querySelector("p.price").textContent = product.price;



copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
    // appende
document.querySelector("main").appendChild(copy);

}


// // {

/* <template id="smallProductTemplate">
<article class="smallProduct">
  <img
    src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
    alt="Sahara Team India Fanwear Round Neck Jersey"
  />
  <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
  <p class="subtle">
    T-shirts | Nike
    <span>Prev.</span>
    DKK 1000Kr.
  </p>

  <a href="produkt.html"> Read More </a>
</article>
</template> */



//   "id": 1164,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Winter",
//   "productionyear": 2015,
//   "usagetype": "Sports",
//   "productdisplayname": "Blue T20 Indian Cricket Jersey",
//   "price": 1595,
//   "discount": 28,
//   "brandname": "Nike",
//   "soldout": 1
// }