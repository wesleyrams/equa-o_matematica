function handleSubmit() {

    // Pega os inputs
    const valorA = document.querySelector('#valor1').value
    const valorB = document.querySelector('#valor2').value
    const valorC = document.querySelector('#valor3').value

    const delta = valorB * valorB - 4 * valorA * valorC

    const todoValor = document.getElementById('valorSpan')
    todoValor.innerHTML = `
                    <span id="valorSpan">${valorA}x² + ${valorB}x + ${valorC} = 0</span>
`

    const resultadoValor = document.getElementById('resultadoDelta')
    resultadoValor.innerHTML = `
                    <p id="resultadoDelta">${delta}</p>

`
    return false
}
