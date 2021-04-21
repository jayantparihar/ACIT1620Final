//jsx
const albums = [
    { name: "Album 1", price: 12.99, inCart: false },
    { name: "Album 2", price: 14.99, inCart: false },
    { name: "Album 3", price: 9.99, inCart: false },
    { name: "Album 4", price: 19.99, inCart: false }
  ];
  
  function nextImage() {
    for (var i = 0; i < albums.length; i++) {
      var sr = "Album" + (i + 1);
      var imgs = document.getElementById(sr);
      imgs.src = "Images/" + albums[i].name.replace(' ', '') + ".png";
    }
  
  
  }
  
  var shop_items = "";
  var cart = null;
  window.addEventListener("load", function () {
    nextImage();
    shop_items = document.querySelectorAll('.shop-item');
    shop_items.forEach(item => {
      item.addEventListener('click', () => handleAlbumClick(item));
    });
    cart = document.getElementById('cart-items');
    cartItems();
  });
  
  function handleAlbumClick(item) {
    clicked_Album = item.childNodes[1].textContent;
    for (const a of albums) {
      if (a.name == clicked_Album) {
        aa = a;
      }
    }
  
    if (aa.inCart) {
      alert('That album is already in your cart!')
      return;
    }
  
    aa.inCart = true;
  
    cartItems();
  }
  
  function cartItems() {
    cart.innerHTML = '';
  
    for (const a of albums) {
      if (a.inCart == false) {
        continue;
      }
      let html = `
            <div class="cart-row">
                <span class="cart-image"><img src="./Images/${(a.name).replace(' ', '')}.png"></img></span>
                <span class="cart-name">${a.name}</span>
                <span class="cart-price">$${a.price}</span>
            </div>
        `;
  
      cart.innerHTML += html;
    }
  }