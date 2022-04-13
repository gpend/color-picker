
async function getColors (color, mode){
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`
    const result = await fetch(URL=url)
    const data = await result.json()
    return data
}

function getColorHTML (colorArray){
    // console.log(colorArray)
    const colorHTML = colorArray.map((color, i) =>{
        // console.log(color.hex.value)
        return `<div style="background-color: ${color.hex.value};" class=color${i}></div>`
    })//.join('')
    return colorHTML
}

function getColorLabelHTML(colorArray){
    const colorLabelHTML = colorArray.map(color => {
        console.log(`<p>${color.hex.value}</p>`)
        return `<p>${color.hex.value}</p>`
    })

    return colorLabelHTML
}

function handleClick () {
    let color = document.getElementById('colorSeed').value.slice(1)
    const theme = document.getElementById('theme_picker').value
    getColors(color, theme).then(data =>  {
        document.querySelector('.colors').innerHTML = getColorHTML(data.colors).join('')
        document.querySelector('.color-labels').innerHTML = getColorLabelHTML(data.colors).join('')
    })
}

document.getElementById('get_scheme').addEventListener('click', handleClick)
