let saludo = document.getElementById('saludo');
console.log(saludo.innerText);

let descripcion = document.getElementById('descripcion');
console.log(descripcion.innerText);

let dText = document.getElementById('dText');
console.log(dText.innerText);

let sas_img = document.getElementById('sas_img');
console.log(sas_img.src);


let email = document.getElementById('floatingInput');
console.log(email);

let comentario = document.getElementById('floatingTextarea2');
console.log(comentario);

let registrado = false
function entrar() {
  registrado = !registrado;
    //habilitar botones de edicion
    console.log(registrado);
}

let bet = `<section class="card-group">
<section class="container card-columns gap-3">
  <article class="card ">
    <img class="card-img-top"
      src="https://udemy-certificate.s3.amazonaws.com/image/UC-3e578c49-26f7-42c3-9d28-f30b6f7b81ed.jpg?v=1624413948000"
      alt="Card image cap">
    <div class="card-body p3">
      <h3 class="card-title">MongoDB</h3>
      <p class="card-text">De cero a experto</p>
    </div>
  </article>
  <article class="card ">
    <img class="card-img-top" src="https://udemy-certificate.s3.amazonaws.com/image/UC-6855782e-e151-40b7-8ee9-e617a13714ed.jpg?v=1653598381000
      " alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">SQL</h3>
      <p class="card-text">Consultas básicas a complejas</p>
    </div>
  </article>
  <article class="card ">
    <img class="card-img-top" src="https://udemy-certificate.s3.amazonaws.com/image/UC-4e802311-1788-4f52-97cf-a80b92eb0307.jpg?v=1646528170000
      " alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">Node.js - Express - Deno</h3>
      <p class="card-text">Creacion de Api</p>
    </div>
  </article>
  </div>
</section>
</section>`

let fet = `<section class="card-group">
<section class="container card-columns gap-3">
  <article class="card ">
    <img class="card-img-top"
      src="https://udemy-certificate.s3.amazonaws.com/image/UC-34aea90f-b698-4a7a-9d54-bc75c6807861.jpg?v=1626632647000      "
      alt="Card image cap">
    <div class="card-body p3">
      <h3 class="card-title">MERN Stack</h3>
      <p class="card-text">Proyecto - Blog</p>
    </div>
  </article>
  <article class="card ">
    <img class="card-img-top" src="assets/images/SharedScreenshot.jpg" alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">HTML - CSS - JS</h3>
      <p class="card-text">Diseño de paginas web responsive </p>
    </div>
  </article>
  </div>
</section>
</section>`

let dot = `<section class="card-group">
<section class="container card-columns gap-3">
  <article class="card ">
    <img class="card-img-top"
      src="https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2016/04/docker.jpg?width=1200&enable=upscale"
      alt="Card image cap">
    <div class="card-body p3">
      <h3 class="card-title">Docker Essentials</h3>
      <p class="card-text">Docker, Compose and Swarm</p>
    </div>
  </article>
  <article class="card ">
    <img class="card-img-top" src="https://udemy-certificate.s3.amazonaws.com/image/UC-6855782e-e151-40b7-8ee9-e617a13714ed.jpg?v=1653598381000
      " alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">SQL</h3>
      <p class="card-text">Consultas básicas a complejas</p>
    </div>
  </article>
  <article class="card ">
    <img class="card-img-top" src="https://udemy-certificate.s3.amazonaws.com/image/UC-4e802311-1788-4f52-97cf-a80b92eb0307.jpg?v=1646528170000
      " alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">Node.js - Express - Deno</h3>
      <p class="card-text">Creacion de Api</p>
    </div>
  </article>
  </div>
</section>
</section>`

function enviar(){
    if((email.value != "")&&(comentario.value != "")){
    console.log('eMail: ' + email.value);
    console.log('comentario: ' + comentario.value);
}else{
    alert("Error: Complete los datos antes de enviar, es necesario ingresar el email y el comentario a enviar."); 
}

}

function backEnd() {
    dText.classList.remove('orange')
    dText.classList.remove('green')
    dText.classList.add('blue')
    dText.innerHTML = bet;

}
function frontEnd() {
    dText.classList.remove('blue')
    dText.classList.remove('green')
    dText.classList.add('orange')
    dText.innerHTML = fet;


}
function devOps() {
    dText.classList.remove('blue')
    dText.classList.remove('orange')
    dText.classList.add('green')
    dText.innerHTML = dot;

}


