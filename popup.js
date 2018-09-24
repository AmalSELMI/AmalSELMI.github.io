
setTimeout(
    function(){
        response = confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please!\n Veux-tu le découvrir maintenant?');
        !!response && (document.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ');
     }, 10000);

function changeColor() {
 document.body.style.backgroundColor = "magenta";
    var allp = document.querySelectorAll("p");
for (var i=0, max=allp.length; i < max; i++) {
 allp[i].style.color = "blue";
 allp[i].style.fontFamily = "papyrus";
}
var allH = document.querySelectorAll("h1,h2,h3");
for (var i=0, max=allH.length; i < max; i++) {
 allH[i].style.color = "green";
 allH[i].style.fontFamily = "Comic Sans";
}
}
