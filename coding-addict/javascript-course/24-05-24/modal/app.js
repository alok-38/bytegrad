const bannerDivElement = document.querySelector(".banner");
const openModalButtonElement = document.querySelector(".modal-btn");
const closeModalButtonElement = document.querySelector(".close-btn");
const modalElement = document.querySelector(".modal-overlay");
const modalOverlayDivElement = document.querySelector(".modal-overlay");

const openModal = () => {
  modalElement.classList.add("open-modal"); // Removed dot before class name
};

openModalButtonElement.addEventListener("click", openModal);

const closeModal = () => {
  modalElement.classList.remove("open-modal"); // Removed dot before class name
};

closeModalButtonElement.addEventListener("click", closeModal);

const handleOverlayEvent = () => {
  modalElement.classList.remove("open-modal");
};

modalOverlayDivElement.addEventListener("click", handleOverlayEvent);
