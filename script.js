document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");


    const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const cores = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth();



    let diaAbsoluto = 1;


    for (let mes = 0; mes < 12; mes++) {
        for (let dia = 1; dia <= meses[mes]; dia++) {
            const div = document.createElement("div");
            div.classList.add("day", cores[mes]);
            div.innerText = `${dia}/${mes + 1} - ${diaAbsoluto}`;

            if (dia === diaAtual && mes === mesAtual){
                div.classList.add("today");

            }
            
            calendar.appendChild(div);
            diaAbsoluto++;
        }
    }
});