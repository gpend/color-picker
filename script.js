
async function getColors (color, mode){
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`
    const result = await fetch(URL=url)
    const data = await result.json()
    return data
}

function organizeColors (colorArray){
    console.log(colorArray)
    const getColorHTML = colorArray.map((color, i) =>{
        `<div style="background-color: ${color.hex.value};" class=color${i}>`
    })
    return getColorHTML
}

function handleClick () {
    let color = document.getElementById('colorSeed').value.slice(1)
    const theme = document.getElementById('theme_picker').value
    // const colorData = 
    getColors(color, theme).then(data => document.getElementsByClassName('colors').innerHtml =  organizeColors(data.colors).join(''))
}

document.getElementById('get_scheme').addEventListener('click', handleClick)