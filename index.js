

const seleccion = document.getElementById('select')
const color = document.getElementById('seleccion-color')


document.getElementById('color-scheme').addEventListener('submit', function getColor(e) {
    e.preventDefault()
    const seleccionValor = seleccion.value.toLowerCase()
    const colorValor = color.value.slice(1)
    console.log(seleccionValor)
    console.log(colorValor)
    getScheme(colorValor, seleccionValor)
})

function getScheme(color, tipoScheme) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${tipoScheme}&count=5`)
    .then(response => response.json())
    .then(data => {
        let html = ''
        const colores = data.colors
        data.colors.map(color => {
                html += 
                    `<div class="color-div scale">
                        <div class="color-svg" style="background-color:${color.hex.value};"></div>
                        <p class="color-hex">${color.hex.value}</p>
                    </div>
                    ` 
            }).join("");
            
            document.getElementById('main').innerHTML = html
    })
}

//copy clipboard me falta
