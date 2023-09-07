let btn = document.querySelector("button")
let wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    let x1 = document.querySelector("#x1").value
    let y1 = document.querySelector("#y1").value
    let x2 = document.querySelector("#x2").value
    let y2 = document.querySelector("#y2").value

    wynik.innerHTML = `Odległość między tymi punktami wynosi ${Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))}`
})