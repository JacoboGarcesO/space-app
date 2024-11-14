const carouselWrapper = document.getElementById("carousel-wrapper");
const products = []

document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));

  if (currentUser) {
    const headerList = document.getElementById('header-list');
    headerList.innerHTML += `<li><a class="header-link" href="#">${currentUser.name}</a></li>`;
  }

  setInterval(() => {
    const scrollLeft = carouselWrapper.scrollLeft;
    const scrollWidth = carouselWrapper.scrollWidth;
    const clientWidth = carouselWrapper.clientWidth;

    if (scrollLeft + clientWidth >= scrollWidth) {
      carouselWrapper.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      carouselWrapper.scrollTo({
        left: carouselWrapper.scrollWidth + 100,
        behavior: 'smooth'
      });
    }

  }, 3000)
});

function selectProduct(product) {
  products.push(product);
  localStorage.setItem("PRODUCTS", JSON.stringify(products));
}

const domProducts = document.querySelectorAll(".carousel-item");

domProducts.forEach(product => {
  product.childNodes[3].childNodes[5].addEventListener("click", () => {
    selectProduct(product.innerHTML);    
  });
  
});