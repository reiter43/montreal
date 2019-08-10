let scrolled;
let timer;

document.getElementById('top').onclick = (event) => {	
	event.preventDefault(); //отмена стандартного поведения
	scrolled = window.pageYOffset;  //определение текущей координаты по Y
	scrollToTop();
};

// Функция плавного скроллинга
function scrollToTop(){
	if (scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 20; //скорость прокрутки
		timer = setTimeout(scrollToTop, 2); //время этапа прокрутки
	}
	else {
		clearTimeout(timer);
		window.scrollTo(0,0);
	}
};

// Плавная прокрутка к якорям

// let anchors = document.querySelectorAll(".nav__link");

// for (let i = 0; i < anchors.length; i++){
//     anchors[i].onclick = function(event){
//         event.preventDefault(); //отмена стандартного поведения
//         for ( let j = 0; j < anchors.length; j++ ){
//             let atr = this.getAttribute("data-anchor");            
//             scrollNoAnchors(atr);
//         }   
//     }    
// }

// function scrollNoAnchors(atr) {
// let anchorsSections = document.querySelectorAll("section");
// let scrollTop;

// for (let i = 0; i < anchorsSections.length; i++){
//     if(anchorsSections[i].classList.contains(atr)){        
//         scrollTop = anchorsSections[i].getBoundingClientRect().top;
//         console.log(scrollTop);
//         smoothly(scrollTop);
//     }
// }
// function smoothly(scrollTop){
//     // window.scrollTo(0, scrollTop);
// 	let step;
// 	step = 0;
    
//     // let timer;
//     if ( step <= scrollTop){
//     window.scrollTo(0, step);
// 	step += 20;
// 	console.log(step);
//     setTimeout(smoothly, 200);
//     }
// }
// }


	






   
    