
// Apartado de la pagina de Productos

document.querySelectorAll('.truck-button').forEach(button => {
	button.addEventListener('click', e => {

		e.preventDefault();

		let box = button.querySelector('.box'),
			truck = button.querySelector('.truck');

		if (!button.classList.contains('done')) {

			if (!button.classList.contains('animation')) {

				button.classList.add('animation');

				gsap.to(button, {
					'--box-s': 1,
					'--box-o': 1,
					duration: .3,
					delay: .5
				});

				gsap.to(box, {
					x: 0,
					duration: .4,
					delay: .7
				});

				gsap.to(button, {
					'--hx': -5,
					'--bx': 50,
					duration: .18,
					delay: .92
				});

				gsap.to(box, {
					y: 0,
					duration: .1,
					delay: 1.15
				});

				gsap.set(button, {
					'--truck-y': 0,
					'--truck-y-n': -26
				});

				gsap.to(button, {
					'--truck-y': 1,
					'--truck-y-n': -25,
					duration: .2,
					delay: 1.25,
					onComplete() {
						gsap.timeline({
							onComplete() {
								button.classList.add('done');
							}
						}).to(truck, {
							x: 0,
							duration: .4
						}).to(truck, {
							x: 40,
							duration: 1
						}).to(truck, {
							x: 20,
							duration: .6
						}).to(truck, {
							x: 96,
							duration: .4
						});
						gsap.to(button, {
							'--progress': 1,
							duration: 2.4,
							ease: "power2.in"
						});
					}
				});

			}

		} else {
			button.classList.remove('animation', 'done');
			gsap.set(truck, {
				x: 4
			});
			gsap.set(button, {
				'--progress': 0,
				'--hx': 0,
				'--bx': 0,
				'--box-s': .5,
				'--box-o': 0,
				'--truck-y': 0,
				'--truck-y-n': -26
			});
			gsap.set(box, {
				x: -24,
				y: -6
			});
		}

	});
});

///////////////////////////////////////////////


// Validacion de fechas:
function validarFecha() {
	var fechaInput = document.getElementById("fecha").value;
	
	var fechaUsu = new Date(fechaInput); // Fecha del usuarios
	
	var fechaActual = new Date(); // Fecha Actual

	if (fechaUsu < fechaActual) {
		alert("La fecha seleccionada no puede ser anterior a la fecha de hoy.");
		document.getElementById("fecha").value = ""; // Limpiar el campo de fecha
	}
}


// Validacion de la cantidad de numeros introducidos en el CVV
function limitarTresDigitos() {
	var cvvTarjeta = document.getElementById("cvv");
	if (cvvTarjeta.value.length > 3) {
		cvvTarjeta.value = cvvTarjeta.value.slice(0, 3); // Limitar a los primeros 3 dígitos
	}
}





// Carga de elementos 
const totalDisplay = document.getElementById("total");
const totalProductos = document.getElementById("totalProductos");
const impuestosContadorDiv = document.getElementById("totalImpuestos");
const FashionFusionHQContadorDiv = document.getElementById("FashionFusionHQContadorDiv");
const MindfulMeditatorContadorDiv = document.getElementById("MindfulMeditatorContadorDiv");
const CulinaryCraftsmenContadorDiv = document.getElementById("CulinaryCraftsmenContadorDiv");
const ArtisanCraftersContadorDiv = document.getElementById("ArtisanCraftersContadorDiv");
const totalCompletoDiv = document.getElementById("totalCompleto");

// Variables en 0
let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;
let FashionFusionHQContador = localStorage.getItem('FashionFusionHQContador') ? parseInt(localStorage.getItem('FashionFusionHQContador')) : 0;
let MindfulMeditatorContador = localStorage.getItem('MindfulMeditatorContador') ? parseInt(localStorage.getItem('MindfulMeditatorContador')) : 0;
let CulinaryCraftsmenContador = localStorage.getItem('CulinaryCraftsmenContador') ? parseInt(localStorage.getItem('CulinaryCraftsmenContador')) : 0;
let ArtisanCraftersContador = localStorage.getItem('ArtisanCraftersContador') ? parseInt(localStorage.getItem('ArtisanCraftersContador')) : 0;
let impuestosPrecio = localStorage.getItem('impuestosPrecio') ? parseInt(localStorage.getItem('impuestosPrecio')) : 0;
let totalCompleto = localStorage.getItem('totalCompleto') ? parseInt(localStorage.getItem('totalCompleto')) : 0;


general();

// Funciones de Suma
function FashionFusionHQSuma() {
	total += 89;

	FashionFusionHQContador++;
	if (FashionFusionHQContadorDiv)
		impuestosPrecio = total * 0.21;

	if (total <= 0) {
		total = 0;
		impuestosPrecio = 0;
		totalCompleto = 0;
	}

	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }

	general();

}


function MindfulMeditatorSuma() {
	total += 120;

	MindfulMeditatorContador++;
	if (MindfulMeditatorContadorDiv)

		impuestosPrecio = total * 0.21;


	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		totalCompleto = 0;


	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }

	general();


}

function CulinaryCraftsmenSuma() {
	total += 88;

	CulinaryCraftsmenContador++;
	if (CulinaryCraftsmenContadorDiv)

		impuestosPrecio = total * 0.21;

	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		totalCompleto = 0;


	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();


}

function ArtisanCraftersSuma() {
	total += 75;

	ArtisanCraftersContador++;
	if (ArtisanCraftersContadorDiv)


		impuestosPrecio = total * 0.21;
	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;

	}

	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();


}



// Funciones de Resta
function FashionFusionHQResta() {

	if (FashionFusionHQContador <= 0) {
		return; // Sale de la función si el contador es 0 o menor
	}


	total -= 89;

	FashionFusionHQContador--;
	impuestosPrecio = total * 0.21;
	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		FashionFusionHQContador = 0;

	}

	if (FashionFusionHQContador <= 0) {

		FashionFusionHQContador = 0;
	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();


}


function MindfulMeditatorResta() {

	if (MindfulMeditatorContador <= 0) {
		return; // Sale de la función si el contador es 0 o menor
	}

	total -= 120;

	MindfulMeditatorContador--;
	impuestosPrecio = total * 0.21;
	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		MindfulMeditatorContador = 0;

	}

	if (MindfulMeditatorContador <= 0) {

		MindfulMeditatorContador = 0;

	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();


}

function CulinaryCraftsmenResta() {


	if (CulinaryCraftsmenContador <= 0) {
		return; // Sale de la función si el contador es 0 o menor
	}

	total -= 88;
	CulinaryCraftsmenContador--;


	impuestosPrecio = total * 0.21;
	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		CulinaryCraftsmenContador = 0;

	}

	if (CulinaryCraftsmenContador < 0) {

		CulinaryCraftsmenContador = 0;
	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }

	general();


}

function ArtisanCraftersResta() {


	if (ArtisanCraftersContador <= 0) {
		return; // Sale de la función si el contador es 0 o menor
	}

	ArtisanCraftersContador--;
	total -= 75;


	impuestosPrecio = total * 0.21;
	if (total <= 0) {

		total = 0;
		impuestosPrecio = 0;
		ArtisanCraftersContador = 0;

	}

	if (ArtisanCraftersContador < 0) {

		ArtisanCraftersContador = 0;
	}



	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();

}



// Botones de reseteo de Productos - Cesta

function resetFashionFusionHQ() {




	total -= FashionFusionHQContador * 89;
	impuestosPrecio = total * 0.21;

	FashionFusionHQContador = 0;
	if (total < 0) {

		total = 0;
	}
	else if (impuestosPrecio < 0) {

		impuestosPrecio = 0;
	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }

	general();

}

function resetMindfulMeditator() {

	total -= MindfulMeditatorContador * 120;
	impuestosPrecio = total * 0.21;
	MindfulMeditatorContador = 0;
	if (total < 0) {

		total = 0;
	}
	else if (impuestosPrecio < 0) {

		impuestosPrecio = 0;
	}

	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }
	general();

}

function resetCulinaryCraftsmen() {

	total -= CulinaryCraftsmenContador * 88;
	impuestosPrecio = total * 0.21;

	CulinaryCraftsmenContador = 0;

	if (total < 0) {

		total = 0;
	}
	else if (impuestosPrecio < 0) {

		impuestosPrecio = 0;
	}
	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }


	general();

}

function resetArtisanCrafters() {

	total -= ArtisanCraftersContador * 75;
	impuestosPrecio = total * 0.21;
	ArtisanCraftersContador = 0;
	if (total < 0) {

		total = 0;
	}
	else if (impuestosPrecio < 0) {

		impuestosPrecio = 0;
	}

	else if (FashionFusionHQContador) { }
	else if (MindfulMeditatorContador) { }
	else if (CulinaryCraftsmenContador) { }
	else if (ArtisanCraftersContador) { }

	general();
}


function functionReseteoCesta() {

	resetFashionFusionHQ();
	resetMindfulMeditator();
	resetCulinaryCraftsmen();
	resetArtisanCrafters()

}

function general() {

	//escribo 

	totalDisplay.innerHTML = total;

	impuestosContadorDiv.innerHTML = impuestosPrecio.toFixed(2);

	
	totalCompletoDiv.innerHTML = parseFloat(total) + parseFloat(impuestosPrecio.toFixed(2));


	FashionFusionHQContadorDiv.innerHTML = FashionFusionHQContador;

	MindfulMeditatorContadorDiv.innerHTML = MindfulMeditatorContador;

	CulinaryCraftsmenContadorDiv.innerHTML = CulinaryCraftsmenContador;

	ArtisanCraftersContadorDiv.innerHTML = ArtisanCraftersContador;


	// Actualizar valores en localStorage

	localStorage.setItem("total", total);

	localStorage.setItem("FashionFusionHQContador", FashionFusionHQContador);

	localStorage.setItem("MindfulMeditatorContador", MindfulMeditatorContador);

	localStorage.setItem("CulinaryCraftsmenContador", CulinaryCraftsmenContador);

	localStorage.setItem("ArtisanCraftersContador", ArtisanCraftersContador);

	localStorage.setItem("impuestosPrecio", impuestosPrecio);

	localStorage.setItem("totalCompleto", totalCompleto);


}








