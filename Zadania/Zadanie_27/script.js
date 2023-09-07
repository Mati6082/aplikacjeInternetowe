let btn = document.querySelector("button")
let wynik = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    let x1 = document.querySelector("#x1").value
    let y1 = document.querySelector("#y1").value
    let x2 = document.querySelector("#x2").value
    let y2 = document.querySelector("#y2").value
    let x3 = document.querySelector("#x3").value
    let y3 = document.querySelector("#y3").value

    wynik.innerHTML = `
    Odległość między punktami P1, P2 wynosi ${Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))}.<br>
    Odległość między punktami P1, P3 wynosi ${Math.sqrt(Math.pow((x1 - x3), 2) + Math.pow((y1 - y3), 2))}.<br>
    Odległość między punktami P2, P3 wynosi ${Math.sqrt(Math.pow((x2 - x3), 2) + Math.pow((y2 - y3), 2))}.`
})