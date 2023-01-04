// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    
    nombre === '' || password === '' ? 
        console.log('Todos los campos son obligatorios')
    
        : console.log('Todo bien, enviando...')
    
})