//jsx
const albums = [
    { name: "Album1", price: 12.99, inCart: false },
    { name: "Album2", price: 14.99, inCart: false },
    { name: "Album3", price: 9.99, inCart: false },
    { name: "Album4", price: 19.99, inCart: false }
  ];
  
  function nextImage() {
    for (var i = 0; i < albums.length; i++) {
      var sr = "Album" + (i + 1);
      var imgs = document.getElementById(sr);
      imgs.src = "Images/" + albums[i].name + ".png";
    }
  }