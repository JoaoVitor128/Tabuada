  const form = document.querySelector("form")
const number = document.querySelector(".number")
const multiplicator = document.querySelector(".multiplicator")
const submit = document.querySelector(".submit")
const paragrafo = document.querySelector(".multiplicationOperators p")
const span = document.querySelector(".multiplicationTitle span")

const criarTemplate = (number, multiplicator) => {
    paragrafo.innerHTML = ""
    span.innerHTML = number
    number.value = ""

    for (let i = 1; i <= multiplicator; i++) {
        const result = number * i
        const template = `<div class="row">
        <div class="operators">${number} x ${i}</div>
        <div class="result"> = ${result}</div>
    </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, 'text/html')

        const row = htmlTemplate.querySelector(".row")
        paragrafo.appendChild(row)
    }
    
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const numberValue = number.value
    const multiplicatorValue = multiplicator.value
    if (!numberValue || !multiplicatorValue) return;

    criarTemplate(numberValue, multiplicatorValue)
})