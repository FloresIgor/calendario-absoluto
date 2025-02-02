document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diaAbsoluto = 1;
    for (let mes = 0; mes < 12; mes++){
        for (let dia = 1; dia <= meses[mes]; dia++) {
            const div = document.createElement("div");
            div.classList.add("day");
            div.innerText = `${dia}/${mes + 1} - ${diaAbsoluto}`;
            calendar.appendChild(div);
            diaAbsoluto++;
        }
    }
});