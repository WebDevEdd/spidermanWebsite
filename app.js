//SMOOTH SCROLL FUNCTION
function smoothScroll(target){
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    window.scrollTo(0, targetPosition);
}

var castSection = document.querySelector('.cast-btn');
castSection.addEventListener('click', function(){
    smoothScroll('.cast');
})
var mediaSection = document.getElementById('mediaButton');
mediaSection.addEventListener('click', function(){
    smoothScroll('.media');
})