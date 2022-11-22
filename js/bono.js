function limpiar() {
  quitarClaseError();
  totalPago.innerHTML = '';
  document.getElementById('misformulario').reset();
}

const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let cantidadTickets = document.getElementById('cantidadTickets');
let categoria = document.getElementById('categoriaSelect');

function quitarClaseError() {
  let x = document.querySelectorAll('.form-control, .form-select');
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('is-invalid');
  }
}

function total_a_pagar() {
  let totalValorTickets = cantidadTickets.value * valorTicket;

  if (mail.value === '') {
    alert('Por favor, escribí tu email.');
    mail.classList.add('is-invalid');
    mail.focus();
    return;
  }

  const emailValido = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  if (!emailValido(mail.value)) {
    alert('Por favor, escribí un correo electrónico válido.');
    mail.classList.add('is-invalid');
    mail.focus();
    return;
  }
  if (categoria.value == 0) {
    totalValorTickets = totalValorTickets;
  }
  if (categoria.value == 1) {
    totalValorTickets =
      totalValorTickets - (descuentoEstudiante / 100) * totalValorTickets;
  }
  if (categoria.value == 2) {
    totalValorTickets =
      totalValorTickets - (descuentoTrainee / 100) * totalValorTickets;
  }
  if (categoria.value == 3) {
    totalValorTickets =
      totalValorTickets - (descuentoJunior / 100) * totalValorTickets;
  }

  totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener('click', total_a_pagar);
