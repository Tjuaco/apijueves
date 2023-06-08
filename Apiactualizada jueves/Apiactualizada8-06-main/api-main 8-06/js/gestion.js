// Lista de clientes

function obtenerTipoGestion() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://159.223.103.211/api/tipo_gestion", requestOptions)
      .then(response => response.json())
      .then((json) => {json.forEach(completarOption)})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  //Completar fila

  function completarOption(element, index, arr) {
    arr[index] = document.querySelector('#sel_tipo_gestion').innerHTML +=
    `<option value="${element.id_tipo_gestion}"> ${element.id_tipo_gestion} ${element.nombre_tipo_gestion}</option>`
  }