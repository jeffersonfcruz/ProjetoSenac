function cadastrar() {
	fetch("http://localhost:5000/api/cliente/listar")
	  .then((resultado) => resultado.json())
	  .then((dados) => {
		dados.output.map((item) => {
		  var div = `<div id=item>
		  <h2>${item.name}</h2>
		  <h3>${item.tel}</h3>
		  <h3>${item.email}</h3>
		  <h3>${item.end}</h3>
		  </div>
		  `;
		  document.getElementsByTagName("main")[0].innerHTML += div;
		});
	  });
  }
  
  function cadastrar() {
	let name = document.getElementsByTagName("input")[0];
	let tel = document.getElementsByTagName("input")[1];
	let email = document.getElementsByTagName("input")[2];
	let end = document.getElementsByTagName("input")[3];
  
	fetch("http://localhost:5000/api/cliente/cadastrar", {
	  method: "POST",
	  headers: {
		accept: "application/json",
		"content-type": "application/json",
	  },
	  body: JSON.stringify({
		name: name.value,
		tel: tel.value,
		email: email.value,
		end: end.value,
	  }),
	})
	  .then((resultado) => resultado.json())
	  .then((dados) => {
		alert(`${dados.output}\n${dados.payload}`);
  
		//Limpar o formulário
		name.value = "";
		tel.value = "";
		email.value = "";
		end.value = "";
	  })
	  .catch((err) => console.error(err));
	window.location.reload();
  }
  
  function tela_cadastro() {
	document.getElementsByTagName("section")[0].style.marginLeft = "30%";
	document.getElementsByTagName("section")[0].style.boxShadow =
	  "0px 0px 0px 100vw rgba(36, 1, 21, 0.5)";
  }