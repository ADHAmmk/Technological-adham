console.log("انا احب البرمجه");
console.log("شكرا لمستر عبد الرحمن");
let a = 10+50;
console.log(a);

function sendWhatsApp6() {
  let phone = "201013984024";
  
 

  let message = `ممكن حضرتك احجز موقع `;
  
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}




console.log ("hi");

console.log ("hi"+" adham");

console.log (4+5+3+5+5+4);




// let nume = prompt ("من فضلك ادخل اسمك");

// let age = prompt ("ادخل عمرك");

// let sa = prompt  ("ادخل رقمك");

// console.log ("welcome " + nume + " your age " + age + " numper "+ sa);


let menu = document.getElementById("menu-toggle");
let nav = document.getElementById("nav");

menu.onclick = function(){
    nav.classList.toggle("active");
}


function sendWhatsApp() {
  let phone = "201013984024";
  
 

  let message = `ممكن حضرتك استفصر عن المواقع`;
  
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}