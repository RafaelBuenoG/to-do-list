const v = document.querySelector('#item')
const submit = document.querySelector('#submit')
const clean = document.querySelector('#clean')
const ul = document.querySelector('#ul')

submit.addEventListener("click", function add() 
{
    if (v.value == 0) return // não executa o comando se o input estiver vazio

    const li = document.createElement('li')
    let i = v.value
    const item = ul.appendChild(li)
    item.innerHTML = `${i}`
    v.value = ''
    v.focus()
})

clean.addEventListener("click", function clean() {
    v.value = ''
    ul.innerHTML = ''
})