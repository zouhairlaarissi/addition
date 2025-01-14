
document.getElementById("operation").onclick = function() {
    let a = document.getElementById("txt1").value;
    let b = document.getElementById("txt2").value;
    a = Number(a);
    b = Number(b);
    window.prompt(a + b);
    document.getElementById("affichage").textContent = a + b;
};