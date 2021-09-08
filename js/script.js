var numQuadrati = prompt("Inserisci il numero di quadrati da generare");

function nuovoCampo(celle) {
    for (i = 1; i <= celle; i++) {
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`;
    }
}

// creazione campo

nuovoCampo(numQuadrati);


document.getElementById("campo").addEventListener("click",
	function(event) {
		event.target.classList.toggle("cliccato");
	}
);