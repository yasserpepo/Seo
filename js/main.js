const container= document.getElementById("container"), 
burger= document.getElementById("burger");

burger.addEventListener("click",()=>{
  container.classList.toggle("nav-mobile");
  burger.classList.toggle("exit");
}
)