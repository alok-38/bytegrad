const sidebarToggleButton = document.querySelector(".sidebar-toggle");
const asideElement = document.querySelector("aside");
const closeButton = document.querySelector(".close-btn");

const showSideBar = () => {
  asideElement.classList.toggle("show-sidebar");
};

sidebarToggleButton.addEventListener("click", showSideBar);

const closeSideBar = () => {
  asideElement.classList.remove("show-sidebar");
};

closeButton.addEventListener("click", closeSideBar);
