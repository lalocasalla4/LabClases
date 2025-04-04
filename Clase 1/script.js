function sumar() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const resultado = Number(a) + Number(b);
    document.getElementById('resultado').textContent = resultado;
}
