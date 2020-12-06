//SMOOTH SCROLL FUNCTION
function smoothScroll(target){
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    window.scrollTo(0, targetPosition);
}
