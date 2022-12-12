const listaProductos = document.querySelector("#lista-productos");

const printProduct = JSON.parse(localStorage.getItem("tempPrduc"));
if (printProduct && printProduct.length > 0) {
  for (let products of printProduct) {
    const li = document.createElement("li");
    li.textContent = products.title + "\n" + products.price;
    let ul = document.querySelector("#lista-productos");
    ul.appendChild(li);
  }
}
let order = [];
document.addEventListener("DOMContentLoaded", () => {
  console.log("dom cargado");

  let lnkCancel = document.querySelector("#linStarOver");

  lnkCancel.addEventListener("click", (evt) => {
    evt.preventDefault();
    order = [];
    updateCart();
    localStorage.removeItem('tempPrduc')
  });

  const beers = document.querySelectorAll(".beer");

  for (let beer of beers) {
    beer.addEventListener("click", (evt) => {
      // console.log(evt.currentTarget.dataset.title);
      // console.log(evt.currentTarget.dataset.price);
      let title = evt.currentTarget.dataset.title;
      let price = evt.currentTarget.dataset.price;
      let id = Date.now();

      order.push({ title, price, id });
      localStorage.setItem("tempPrduc", JSON.stringify(order));
      // console.log(order)
      updateCart();
    });
  }
});

function updateCart() {
  let html = "";
  for (let beer of order) {
    html += "<li>" + beer.title + "<br>" + beer.price + "</li>" + "<br>";
    // html = `<li>${beer}</li>`
    // html = '<div>''</div>'
  }

  let ul = document.querySelector("#lista-productos");
  ul.innerHTML = html;
  localStorage.getItem("tempPrduc");
}

// function updateCart() {
//   let html = "";
//   for (let beer of order) {
//     html += "<li>" + beer.title + "<br>" + beer.price + "</li>" + "<br>";
//     // html = `<li>${beer}</li>`
//     // html = '<div>''</div>'
//   }

//   let ul = document.querySelector("#car ul");
//   ul.innerHTML = html;

//   let cart = document.querySelector("#car");
//   if (order.length == 0) {
//     cart.style.backgroundColor = "gray";
//   } else {
//     cart.style.backgroundColor = "blue";
//   }
// }
