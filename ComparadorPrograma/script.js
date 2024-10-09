document.getElementById('comparar').addEventListener('click', function() {
    const texto1 = document.getElementById('texto1').value.split('. ');
    const texto2 = document.getElementById('texto2').value.split('. ');

    let resultadoHtml = '';
    let totalDiferencias = 0;

    for (let i = 0; i < Math.max(texto1.length, texto2.length); i++) {
        const oracion1 = texto1[i] || '';
        const oracion2 = texto2[i] || '';

        if (oracion1 !== oracion2) {
            totalDiferencias++;
            resultadoHtml += `<div class="diferencia-container">`;
            resultadoHtml += `<h3>Oración ${i + 1}:</h3>`;
            resultadoHtml += `<p><strong>Texto WORD:</strong> ${resaltarDiferencias(oracion1, oracion2, 'diferencia')}</p>`;
            resultadoHtml += `<p><strong>Texto PDF:</strong> ${resaltarDiferencias(oracion2, oracion1, 'agregado')}</p>`;
            resultadoHtml += `</div>`;
        }
    }

    if (totalDiferencias > 0) {
        resultadoHtml += `<h2>Total de diferencias encontradas: ${totalDiferencias}</h2>`;
    } else {
        resultadoHtml = '<p>No se encontraron diferencias, todo está correcto.</p>';
    }

    document.getElementById('resultado').innerHTML = resultadoHtml;
});

function resaltarDiferencias(oracion, comparacion, tipo) {
    const partes1 = oracion.split(' ');
    const partes2 = comparacion.split(' ');

    let resultado = '';

    partes1.forEach(p => {
        if (partes2.includes(p)) {
            resultado += p + ' ';
        } else {
            resultado += `<span class="${tipo}">${p}</span> `;
        }
    });

    partes2.forEach(p => {
        if (!partes1.includes(p)) {
            resultado += `<span class="${tipo}">${p}</span> `;
        }
    });

    return resultado.trim();
}
