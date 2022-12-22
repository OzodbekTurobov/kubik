const colours = ['#EC6E23', '#692B82', '#F6A81C', '#3CAD49', '#2E3281', '#E51565'];

let iterations = 0;

const boxes = document.querySelectorAll("#preloader .box");

const coloursLength = colours.length;

boxes.forEach(function(box) {
  box.setAttribute("originalStyle", box.style.fill);
})

 const interval = setInterval(function(int) {
   boxes.forEach(function(box) {
     let randColour = colours[Math.floor(Math.random() * coloursLength)];
     
     box.style.fill = randColour;
   })
   
   iterations+=1;
   if(iterations == 20) {       clearInterval(interval);
   boxes.forEach(function(box) {
     
     box.style.fill = box.getAttribute('originalStyle');
  document.querySelector("#preloader").classList.add("loaded");
   })
 }
 }, 200);

