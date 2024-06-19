document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("limpiar").addEventListener("click", limpiar)

function calcular () {
    const billeteDeA5 = parseInt(document.getElementById("b5").value) || 0;
    const billeteDeA10 = parseInt(document.getElementById("b10").value) || 0;
    const billeteDeA50 = parseInt(document.getElementById("b50").value)|| 0;
    const billeteDeA100 = parseInt(document.getElementById("b100").value) || 0;
    
    
    const total = (billeteDeA5 * 5) + (billeteDeA10 * 10) + (billeteDeA50 * 50) + (billeteDeA100 * 100);
    document.getElementById("resultado").textContent = "Resultado: $" + total;

    if (billeteDeA5  < 0 || billeteDeA10 < 0 || billeteDeA50 < 0 || billeteDeA100 < 0) {
        alert("Por favor ingrese un número positivo");
        return;
    }
}


function limpiar () {
   const inputs = document.querySelectorAll("[data-id]");
   inputs.forEach(input => {
    input.value = 0;
   })
   document.getElementById("resultado").textContent = "Resultado: $0";
}

