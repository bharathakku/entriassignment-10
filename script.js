document.getElementById("header").textContent = "Text Changed!";


document.querySelectorAll(".text").forEach(paragraph =>{
  paragraph.style.color = "blue";
});

document.querySelectorAll(".list-item").forEach(item=> {
  console.log(item.textContent);
});

document.querySelector(".list-item").style.backgroundColor = "yellow";


document.querySelectorAll(".list-item").forEach(item=>{
  item.style.color = "green";
});