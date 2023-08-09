// Función constructora
function CursoFunc(nombre, precio, categoria, duracion, id) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.duracion = duracion;
  this.id = id;
}

// Clase constructora
class Curso {
  constructor(nombre, precio, categoria, duracion, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.duracion = duracion;
    this.id = id;
  }
}

// Crear array
const cursos = [];

cursos.push(new Curso('Auditoría Avanzada', 150, 'Auditoría Financiera', '4 semanas', 1));
cursos.push(new Curso('Gestión de Inversiones', 200, 'Finanzas', '6 semanas', 2));
cursos.push(new Curso('Contabilidad Corporativa', 120, 'Auditoría Financiera', '5 semanas', 3));
cursos.push(new Curso('Finanzas Personales', 100, 'Finanzas', '3 semanas', 4));
cursos.push(new Curso('Auditoría Interna', 180, 'Auditoría Financiera', '4 semanas', 5));

// Método
cursos.ordenarPorNombre = function () {
  this.sort((a, b) => a.nombre.localeCompare(b.nombre));
};

cursos.ordenarPorNombre();

// Pedirle al usuario qué curso desea comprar
const cursoDeseado = prompt('¿Qué curso deseas comprar?');

// Buscar 
const cursoEncontrado = cursos.find(curso => curso.nombre.toLowerCase() === cursoDeseado.toLowerCase());

if (cursoEncontrado) {
  const confirmacion = confirm(`Estás seguro de adquirir el curso ${cursoEncontrado.nombre} por ${cursoEncontrado.precio} dólares?`);

  if (confirmacion) {
    alert(`Gracias por tu compra del curso ${cursoEncontrado.nombre} por ${cursoEncontrado.precio} dólares. Disfrutá el aprendizaje`);
  } else {
    alert('Compra cancelada. ¡Esperamos verte de nuevo pronto!');
  }
} else {
  alert('Curso no encontrado.');
}