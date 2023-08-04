import { menuArray } from `./data.js`

const shoppingCart = document.getElementById("shoppingCart")
let totalPrice = 0

document.addEventListener("click", function(e){
    if(e.target.dataset.btn){ 
        handleOrderClick(e.target.dataset.btn)
    }
})

function handleOrderClick(orderId) {
    menuArray.forEach(function(menu){
        if (menu.uuid === orderId) {
            totalPrice += menu.price
        }
        shoppingCart.innerHTML = `
        <p>total price: ${totalPrice}</p>
        `
    })
}

function getFeedHtml(){
    let feedHtml = ``
    
    menuArray.forEach(function(menu){
    
    feedHtml += `
      <div class="info">
      <span>${menu.emoji}</span>
         <p>${menu.name}</p>
         <p>${menu.ingredients}</p>
         <p>$${menu.price}</p>
         <button data-btn="${menu.uuid}">+</button>
      </div>
    `
    }) 
  return feedHtml
}

function render() {
    document.getElementById("menu").innerHTML = getFeedHtml()
}

render() 