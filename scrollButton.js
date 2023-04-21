 function $(selector) {
   return document.querySelector(selector);
 }

 window.addEventListener('scroll', () => {
   if (window.pageYOffset > 100) {
     $(".to-top").classList.add('xyz');
   }
   else {
     $(".to-top").classList.remove('xyz');
   }
 })