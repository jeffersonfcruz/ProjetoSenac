function cadastrar() {
	fetch("http://localhost:5000/api/cliente/listar")
	  .then((resultado) => resultado.json())
	  .then((dados) => {
		dados.output.map((item) => {
		  var div = `<div id=item>
		  <h2>${item.8}</h2>
		  <h3>${item.8}</h3>
		  <h3>${item.8}</h3>
		  <h3>${item.8}</h3>
		  <h3>${item.8}</h3>
		  </div>
		  `;
		  document.getElementsByTagName("main")[0].innerHTML += div;
		});
	  });
  }
  
  function cadastrar() {
	let  = document.getElementsByTagName("input")[0];
	let  = document.getElementsByTagName("input")[1];
	let  = document.getElementsByTagName("input")[2];
	let  = document.getElementsByTagName("input")[3];
	let  = document.getElementsByTagName("input")[4];
  
	fetch("http://localhost:5000/api/cliente/cadastrar", {
	  method: "POST",
	  headers: {
		accept: "application/json",
		"content-type": "application/json",
	  },
	  body: JSON.stringify({
		8: 8.value,
		8: 8.value,
		8: 8.value,
		8: 8.value,
		8: 8.value,
		8: 8.value,
	  }),
	})
	  .then((resultado) => resultado.json())
	  .then((dados) => {
		alert(`${dados.output}\n${dados.payload}`);
  
		//Limpar o formulário
		8.value = "";
		8.value = "";
		8.value = "";
		8.value = "";
		8.value = "";
		8.value = "";
	  })
	  .catch((err) => console.error(err));
	window.location.reload();
  }
  
  function tela_cadastro() {
	document.getElementsByTagName("section")[0].style.marginLeft = "30%";
	document.getElementsByTagName("section")[0].style.boxShadow =
	  "0px 0px 0px 100vw rgba(36, 1, 21, 0.5)";
  }