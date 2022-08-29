let vis=document.querySelector(".bar");
let cancel=document.querySelector(".cancel");
let nav=document.getElementById("Home");
vis.onclick=function(){
    nav.classList.remove("none");
}
cancel.onclick=function(){
    nav.classList.add("none");
}