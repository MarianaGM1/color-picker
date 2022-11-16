const colorsContainer = document.getElementsByClassName("colors-container")[0]
const colorsCollection = colorsContainer.children

const hexCodesContainer = document.getElementsByClassName("hex-codes")[0]
const hexCodesCollection = hexCodesContainer.children

const colorInput = document.getElementById("color-input")
let selectedColor = colorInput.value.replace('#', '')
const modeSelect = document.getElementById("mode-select")
let selectedMode = modeSelect.value


function getScheme() {
    
    let path = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=5`
    fetch(path)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < colorsCollection.length; i++) {
                colorsCollection[i].style.backgroundColor = data.colors[i].hex.value
                hexCodesCollection[i].textContent = data.colors[i].hex.value
            }
        })
}

colorInput.addEventListener("input", () => {
        selectedColor = colorInput.value.replace('#', '')
        getScheme()
})

modeSelect.addEventListener("change", () => {
    selectedMode = modeSelect.value
    getScheme()
})


getScheme()
