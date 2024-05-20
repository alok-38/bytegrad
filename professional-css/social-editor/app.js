document.addEventListener("DOMContentLoaded", () => {
  const panelImagesElement = document.querySelector(".panel__images");
  const canvasElement = document.querySelector(".canvas");
  const toolsElement = document.querySelector(".tools");

  // Function to add a new image to the panel
  function addImageToPanel(src) {
    const img = document.createElement("img");
    img.classList.add("panel__img");
    img.src = src;
    img.alt = "Uploaded image";
    panelImagesElement.insertBefore(img, panelImagesElement.lastElementChild);

    img.addEventListener("click", () => {
      addImageToCanvas(src);
    });
  }

  // Function to add a new image to the canvas
  function addImageToCanvas(src) {
    const img = document.createElement("img");
    img.classList.add("canvas__fg-img");
    img.src = src;
    img.alt = "Foreground image";
    canvasElement.appendChild(img);

    // Make the image draggable
    img.draggable = true;
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", null); // Needed for Firefox
      img.classList.add("dragging");
    });

    img.addEventListener("dragend", () => {
      img.classList.remove("dragging");
    });
  }

  // Function to handle tool actions
  function handleToolClick(event) {
    const tool = event.target.closest(".tool");
    if (tool) {
      const toolType = tool.querySelector("i").classList[1]; // Get the tool type

      // Implement different tool actions
      switch (toolType) {
        case "fa-crop-alt":
          console.log("Crop tool selected");
          break;
        case "fa-object-group":
          console.log("Group objects tool selected");
          break;
        case "fa-pen":
          console.log("Pen tool selected");
          break;
        case "fa-trash":
          console.log("Delete tool selected");
          const selectedElement = canvasElement.querySelector(".selected");
          if (selectedElement) {
            canvasElement.removeChild(selectedElement);
          }
          break;
        default:
          break;
      }
    }
  }

  // Event listener for adding a new image
  document.querySelector(".panel__btn").addEventListener("click", () => {
    const newImageUrl = prompt("Enter the URL of the new image:");
    if (newImageUrl) {
      addImageToPanel(newImageUrl);
    }
  });

  // Event listener for tool actions
  toolsElement.addEventListener("click", handleToolClick);

  // Example: Adding initial images
  addImageToPanel(
    "https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=280&q=100"
  );
  addImageToPanel(
    "https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=280&q=100"
  );
});
