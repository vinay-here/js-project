const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById(
  "complementaryContainer",
);
const saveColorButton = document.getElementById("saveColorButton");
const favouriteContainer = document.getElementById("favouriteContainer");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  updateColorDisplay(selectedColor);
  showComplementaryColor(selectedColor); // ✅ spelling fix
});

function updateColorDisplay(color) {
  colorCode.textContent = color;
  colorCode.style.color = color;
}

function showComplementaryColor(color) {
  const complementaryColors = getComplementaryColor(color);
  complementaryContainer.innerHTML = "";

  complementaryColors.forEach((compColor) => {
    // ✅ fix variable name
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = compColor; // ✅ FIX
    complementaryContainer.appendChild(colorBox);
  });
}

function getComplementaryColor(color) {
  const base = parseInt(color.slice(1), 16);
  const complement = (0xffffff ^ base).toString(16).padStart(6, "0");
  return [`#${complement}`];
}

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => alert("Color code copied"))
    .catch((err) => console.error("Failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
  const color = colorCode.textContent;
  addFavouriteColor(color);
});

function addFavouriteColor(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorBox.title = color;

  favouriteContainer.append(colorBox);
}
