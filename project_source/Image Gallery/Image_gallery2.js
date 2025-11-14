// Function to show the clicked image in the large preview box
function showImage(element) {
  const preview = document.getElementById("previewImg");
  preview.src = element.src;

  // Add a smooth zoom animation
  preview.style.transform = "scale(0.95)";
  setTimeout(() => {
    preview.style.transform = "scale(1)";
  }, 200);
}
