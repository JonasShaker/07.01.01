const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then(res=>res.json())
.then(data=>showProduct(data));


function showProduct(product){
    console.log(product);
    document.querySelector(".purchaseBox h3").textContent=
    product.productdisplyname;
    if (!product.soldout) {
        // prodyktet er udsolgt 
        console.log("udsolgt")
        document.querySelector(".soldout").remove();
    }
    if (!product.discount){
        // prodyktet er på udsalg 
        console.log("på udsalg ")
    } else{
        document.querySelector(".discounted").remove();
    }

    // document.querySelector(".InventoryNumber").textContent = product.relid;

    document.querySelector(".color").textContent = product.basecolour;
    // document.querySelector(".Name").textContent = product.productdisplayname;
    document.querySelector(".produkt").textContent = product.variantname;
    document.querySelector(".brandbio").textContent = product.brandbio;
    document.querySelector(".season").textContent = product.season;
    document.querySelector(".Gender").textContent = product.gender;
    document.querySelector(".brand").textContent = product.articletype;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".purchaseBox .brand").textContent = product.brandname;
    document.querySelector("img"). src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`




}
