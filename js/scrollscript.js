const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth'
    })
  })
}

function Up() {
  let tmp = document.getElementById('up');
  if (window.scrollY >= 85){
      tmp.style.display = 'block';
  }
  else{
      tmp.style.display = 'none';
  }
};
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


window.addEventListener("scroll", Up);
let btn = document.getElementById("btm-img");
btn.addEventListener("mouseenter", function(){
  let btn = document.getElementById("btm-img");
  btn.style.width = "55px";
  btn.style.height = "55px";
  btn.style.cursor = "pointer";
});
btn.addEventListener("mouseleave", function(){
  let btn = document.getElementById("btm-img");
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.style.cursor = "pointer";
});
let btn_up = document.getElementById("up");
btn_up.onclick = scrollToTop;