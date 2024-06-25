
var bottone = document.getElementById("bottone");
var px = document.getElementById("px");
var rem = document.getElementById("rem");
bottone.addEventListener('click', function(){
    var valore = px.value/16;
    rem.setAttribute('value', valore);
    rem.innerHTML = valore + 'rem';
    // var valoreRem = rem.value*16;
    // px.setAttribute('value', valoreRem);
    // rem.innerHTML = valoreRem + 'px';
});
