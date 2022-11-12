let edittext=document.querySelector(".edit-text");

const textLoad = () => {
    setTimeout(() => {
        edittext.textContent = "AFFORDABLE";
    },0 );
    setTimeout(() => {
        edittext.textContent = "RELIABLE";
    }, 4000);
    setTimeout(() => {
        edittext.textContent = "VALUABLE";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

// counter

let valueDisplays = document.querySelectorAll(".number");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// slider 
sliderimg = document.querySelectorAll(".slider-img");
// console.log(sliderimg.length);
nextimg= document.querySelector(".next");
backimg=document.querySelector(".back");
let currentimg=0;
function showfirstimg(n){
  sliderimg.forEach(function(slide){
    slide.style.display='none';
  })
  sliderimg[n].style.display='block';
}
showfirstimg(currentimg);

//next button
nextimg.addEventListener('click',next)
function next(){
  if(currentimg<sliderimg.length-1){
    currentimg ++;
  }
  else{
    currentimg=0;
  }
  showfirstimg(currentimg);
}

//prev btn
backimg.addEventListener('click',back);
function back(){
  if(currentimg<=0){
    currentimg=sliderimg.length-1;
  }
  else{
    currentimg --;
  }
   showfirstimg(currentimg); 
}



// responsive navbar
const mobile_nav = document.querySelector(".open-menu"),
closebtn = document.querySelector(".close-menu");
const nav_header = document.querySelector(".navbar");


const toggleNavbar = () => {
//   alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
  if( nav_header.classList.contains("active")){
      closebtn.style.display = 'block';
      mobile_nav.style.display='none';

  }
  else{
    closebtn.style.display = 'none';
    mobile_nav.style.display='block';
  }
};
mobile_nav.addEventListener("click", () => toggleNavbar());
closebtn.addEventListener("click", () => toggleNavbar());


 //dropdown content

// const classArrow = document.querySelectorAll(' .nav .dropdown .dropbtn');
// const dropContent = document.querySelectorAll('.dropdown')
 
//     for (let i=0;i<classArrow.length;i++){
//       classArrow[i].addEventListener("click", function () {
//         dropContent[i].classList.toggle("active2");
        
//         console.log(i);
//         // dropContent.classList.toggle( 'active2');
       
//           });
//     }


// const dropbtn = document.querySelectorAll(".nav .dropdown .dropbtn");
// const labels = document.querySelectorAll(".dropdown");
// for(let i=0;i<dropbtn.length;i++){
//   dropbtn[i].addEventListener('click',function(){
//          for(let j=0;j< labels.length;j++){
//           if(i==j){
//             labels[j].classList.toggle("active");
//           }
//           else{
//             labels[j].classList.remove("active");
//           }
//          }
//     });   
// }







