function func(){
    window.scrollTo({
        top:870,
        behavior: "smooth",
    })
}
function func1(){
    window.scrollTo({
        top:2450,
        behavior: "smooth",
    })
}
function func2(){
    window.scrollTo({
        top:4780,
        behavior: "smooth",
    })
}
function func3(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
}
window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  });
