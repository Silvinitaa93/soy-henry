// Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la ruta http://localhost:5000/amigos

$("#boton").click(function () {
  const list = $("#lista");
  $.get("http://localhost:5000/amigos", (respuesta) => {
    list.empty();
    respuesta.forEach((element) => {
      list.append(`<li>${element.name}</li>`);
    });
  });
});

// Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de un amigo en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar, Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1

$("#search").click(() => {
  const id = $("#input").val();
  if (!isNaN(Number(id))) {
    $.get(`http://localhost:5000/amigos/${id}`, (respuesta) => {
      $("#amigo").text(respuesta.name);
    });
  }
});

// Un input que reciba el id de un amigo y un boton "borrar". Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar. Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2

$("#delete").click(() => {
  const id = $("#inputDelete").val();
  if (!isNaN(Number(id))) {
    $.ajax({
      url: `http://localhost:5000/amigos/${id}`,
      type: "delete",
      success: () => {
        $("#success").text(
          "Amigo borrado con éxito, actualiza la lista de amigos para ver los cambios"
        );
      },
    });
  }
});
