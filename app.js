/* ########## PARALLAX SCROLL ########### */
/* parallaxScrollFUnction */
function parallaxScrollY(el, speed){
    window.addEventListener('scroll', function(){
        var distance = window.scrollY;

        el.style.transform = `translateY(${distance * speed}px)`;
    })
}
/* #### parallax declararions ##### */
const hpTitle = document.getElementById('hpTitle');
const hpTitleSpeed = hpTitle.getAttribute('data-speed');
const ppTitle = document.querySelector('.pp-title');
const ppTitleSpeed = ppTitle.getAttribute('data-speed');
const hpSpidey = document.getElementById('spidey');
const hpSpideySpeed = hpSpidey.getAttribute('data-speed');

const ppDesc = document.querySelector('.pp-desc');
const ppDescSpeed = ppDesc.getAttribute('data-speed');


/* #### parallax Calls #### */
parallaxScrollY(hpTitle, hpTitleSpeed);
parallaxScrollY(ppTitle, ppTitleSpeed);
parallaxScrollY(ppDesc, ppDescSpeed);
