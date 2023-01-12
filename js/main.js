

const badgeEl = document.querySelector('header .badges');

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //諛곗�� �닲湲곌린
       // gsap.to(�슂�냼,吏��냽�떆媛�,�샃�뀡);
       gsap.to(badgeEl,.6,{
        opacity: 0, 
        display: 'none'
       });
       //踰꾪듉 蹂댁씠湲�
       gsap.to(toTopEl,.2,{
        x: 0
    })
    }else{
        //諛곗�� 蹂댁씠湲�
        gsap.to(badgeEl,.6,{
            opacity: 1 ,
            display: 'block'
           });
        //踰꾪듉 �닲湲곌린
        gsap.to(toTopEl,.2,{
            x: 100
        })
        
    }
},300));
//_.throttle(�븿�닔,�떆媛�)

toTopEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        scrollTo:0 /* �솕硫댁쓽 �쐞移섎�� 0px 吏��젏�쑝濡� �삷寃⑥���떎. */
    })
    
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl , index) { /* index : 諛섎났�릺�뒗 �슏�닔 */
    gsap.to(fadeEl , 1 , {
        delay: (index+1)*.7, /* �닚李⑥쟻�쑝濡� �떎�뻾�떆�궎湲곗쐞�븳 �뵜�젅�씠 */
        /* 0.7 1.4 2.1 珥� �뮘�뿉 李⑤�����濡� �떆�뻾�맂�떎. */
        opacity: 1,
    })

});
// new Swiper(�꽑�깮�옄 , �샃�뀡(媛앹껜 �삎�떇))
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay:true,
    loop: true /* 諛섎났�옱�깮 �뿬遺� */
});

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal' 湲곕낯媛�
    slidesPerView: 3, //�븳踰덉뿉 蹂댁뿬以� �뒳�씪�씠�뱶 媛쒖닔
    spaceBetween:10 , // �뒳�씪�씠�뱶 �궗�씠 �뿬諛� (px)
    centeredSlides: true, //1踰� �뒳�씪�씠�뱶媛� 媛��슫�뜲 蹂댁씠湲�
    loop: true , // 泥ル쾲吏� �씠誘몄���쓽 �쇊履쎌뿉 留덉��留� �씠誘몄��媛� 蹂댁엫
    // autoplay : {
    //     delay:5000
    // },
    pagination : {
        el : '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView:5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }

})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function() {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //�닲源� 泥섎━
        promotionEl.classList.add('hide');
    }else {
        //蹂댁엫 泥섎━
        promotionEl.classList.remove('hide');
    }
})

//random function
function random(min , max) {
    return parseFloat((Math.random()*(max-min)+min).toFixed(2));
}

function floatingObject(selector, delay , size) {
   // gsap.to(�슂�냼 , �떆媛� , �샃�뀡 );
   gsap.to(selector ,random(1.5,2.5) , {
    y: size,
    repeat:-1,
    yoyo:true, //�븳踰� �옱�깮�맂 �븷�땲硫붿씠�뀡 �뿭�쑝濡� �떎�떆 �옱�깮
    ease: Power1.easeInOut,
    delay:random(0,delay),
   } );
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({ 
            triggerElement: spyEl, //蹂댁뿬吏� �뿬遺�瑜� 媛먯떆�븷 �슂�냼瑜� 吏��젙
            triggerHook : .8
         })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
});

