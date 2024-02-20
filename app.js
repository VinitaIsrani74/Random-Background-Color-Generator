const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomColor = "#" + randomNumber.toString(16);
  document.getElementById("color-code").innerText = randomColor;
document.getElementById("container").style.backgroundColor = randomColor;
  console.log(randomColor);
};

document.getElementById("btn").addEventListener("click", getColor);

//initial call when page loads
getColor();