let inputTittle = document.querySelector("#tittle")
let inputAuthor = document.querySelector("#author")
let inputColor = document.querySelector("#color")
let btn = document.querySelector("button")
let tbody = document.querySelector("table tbody")

btn.addEventListener("click", () => {
    let radio = document.querySelector("input[name ='radio']:checked")

    let tr = document.createElement("tr")

    let tdTittle = document.createElement("td")
    tdTittle.innerText = inputTittle.value

    let tdAuthor = document.createElement("td")
    tdAuthor.innerText = inputAuthor.value;


    let tdType = document.createElement("td")

    if (inputTittle.value.trim() === "" || inputAuthor.value.trim() === "" || inputColor.value.trim() === "" || !radio) {
        alert("please , complete inputs carefully!")
    }
    else {
        tdType.innerText = radio.value;
        tr.append(tdTittle, tdAuthor, tdType)
        tr.style.background = inputColor.value
        tbody.append(tr)
        inputTittle.value = ""
        inputAuthor.value = ""
        inputColor.value = ""
        radio.checked = false
    }
})