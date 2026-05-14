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