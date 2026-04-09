
function buscar() {
  var cep = document.getElementById("cep").value;

  fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(res => res.json())
    .then(data => {
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    });
}
