var tudo = getComputedStyle(document.body);
var color = tudo.backgroundColor;

var texto = document.querySelectorAll("p");
for (var t of texto){
    t.style.color = color;
}
