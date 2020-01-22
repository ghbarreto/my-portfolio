// VUE




// Animations

$(document).ready(function(){
    $('.description').hide();
    $(function() {
        $(".learnProject").on('click', function() {
            $(this).parent().next(".description").toggle(500);
            $(this).find("i").toggleClass('fa-plus fa-minus');
        });
    })
});


function isElementInViewport(el){
    if(typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0 
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))   
    );
}

const scroll = window.requestAnimationFrame || 
    function (callback) {window.setTimeout(callback, 1000/60)};

const elements = document.querySelectorAll('.Anim');

function loop(){
    elements.forEach((element)=>{
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }else{
        }
    });
    scroll(loop);
}
loop();

new Vue({
    el: '.vue',
    data:{
        posts: [
            {name: 'Game', description: 'Game developed for a web programming class using javascript, this is my first program ever.', 
            image: '/img/game.png', demo: '#', src: '#', logos: ['img/js.png', 'img/html.png', 'img/css.png']},
            
            {name: 'Online Store', description: 'An Online Store', image: '/img/onlineStore.png', demo: '#', src: '#', 
            logos: ['img/js.png', 'img/html.png', 'img/css.png', 'img/ajax.php', 'img/jquery.png',
            'img/less.png', 'img/php.png', 'img/sql.png', 'img/twig.jpg', 'img/sf.png']},

        ],

        show: true,
    }
    
})
// name: 'Game', 
//         description: 'Game developed for a web programming class using javascript, this is my first program ever.',
//         image: '/img/game.png', 
//         logos: {['img/js.png', 'img/html.png', 'img/css.png']},
// ]