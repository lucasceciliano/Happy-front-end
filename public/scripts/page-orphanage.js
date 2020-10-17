const opitons = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
};

const map = L.map("mapid", opitons).setView([-22.8958971, -43.2686054], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//icon creat
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2],
});

L.marker([-22.8958971, -43.2686054], { icon }).addTo(map);

//img gallery

function selectImage(event) {
  const button = event.currentTarget;

  console.log(button.children);

  // remover
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //select img
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //att o container img
  imageContainer.src = image.src;
  //add a classe active
  button.classList.add("active");
}
