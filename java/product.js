const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then(res=>res.json())
.then(data=>showProduct(data));


function showProduct(product){
    console.log(product);
    document.querySelector(".purchaseBox h3").textContent=
    product.productdisplyname;
    document.querySelector(".purchaseBox .brand").textContent = product.brandname;
    document.querySelector(
        "img"
    ). src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

    document.querySelector(".InventoryNumber").textContent = product.relid;
    document.querySelector(".ModelName").textContent = product.productdisplayname;
    document.querySelector(".color").textContent = product.basecolour;
    document.querySelector(".Name").textContent = product.productdisplayname;
    document.querySelector(".variantname").textContent = product.variantname;
    document.querySelector(".brandbio").textContent = product.brandbio;
    document.querySelector(".season").textContent = product.season;
    document.querySelector(".Gender").textContent = product.gender;
}