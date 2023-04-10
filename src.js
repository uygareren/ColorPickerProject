var r = document.getElementById("red");
var g = document.getElementById("green");
var b = document.getElementById("blue");

const rgbOutput = document.getElementsByClassName("rgbOutput")[0];

r.addEventListener("input", function(){
    var valueR = parseInt(r.value);
    var valueG = parseInt(g.value);
    var valueB = parseInt(b.value);
    document.body.style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
    rgbOutput.textContent = `rgb(${valueR}, ${valueG}, ${valueB})`;

});

g.addEventListener("input", function(){
    var valueR = parseInt(r.value);
    var valueG = parseInt(g.value);
    var valueB = parseInt(b.value);
    document.body.style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
    rgbOutput.textContent = `rgb(${valueR}, ${valueG}, ${valueB})`;

});

b.addEventListener("input", function(){
    var valueR = parseInt(r.value);
    var valueG = parseInt(g.value);
    var valueB = parseInt(b.value);
    document.body.style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
    rgbOutput.textContent = `rgb(${valueR}, ${valueG}, ${valueB})`;

});


