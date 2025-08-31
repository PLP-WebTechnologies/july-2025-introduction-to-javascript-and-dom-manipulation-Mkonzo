// Part 4: DOM Interactions

// 1. Change the color of the greeting
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.getElementById("greeting").style.color = "blue";
});

// 2. Toggle visibility of the greeting
document.getElementById("toggleVisibilityBtn").addEventListener("click", function() {
  let greeting = document.getElementById("greeting");
  greeting.style.display = (greeting.style.display === "none") ? "block" : "none";
});

// 3. Calculate the area of a rectangle
document.getElementById("calculateAreaBtn").addEventListener("click", function() {
  let length = 5;
  let width = 3;
  let area = length * width;
  document.getElementById("areaResult").textContent = `Area: ${area} square units`;
});
