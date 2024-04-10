function relocate_home()
{
    location.href = "http://127.0.0.1:5500/index.html#Contact";
} 

function relocate_github() {
    window.open('https://github.com/Krysthecoder', '_blank');
}

function relocate_scheduling(){
  window.open('https://calendly.com/krysthopher/30min', '_blank');
}


//all elements from the DOM
const contactForm = document.getElementById("contact-form");
const { user_name, user_email, message, emailSent, submitBtn } =
  Object.fromEntries(
    [...contactForm.querySelectorAll("[id]")].map((el) => [el.id, el])
  );

//needed data from email JS
const publicKey = "1bKIq8S3BUPPj2ZFi";
const serviceID = "service_kp5234l";
const templateID = "template_blf6lkt";

//initializing the email JS with public key
emailjs.init(publicKey);

//add submit event to the form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form default behaviour
  submitBtn.innerText = "Sending"; //changing the button text
  const inputFields = {
    //getting all the input fields value
    name: user_name.value || "",
    email: user_email.value || "",
    message: message.value || "",
  };
  /* send the email
    add services, template ID and input field values*/
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      emailSent.textContent = "Your Email has been sent";
      submitBtn.innerText = "Sent"; //changing the sending btn text
      user_name.value = ""; //clear all input fields
      user_email.value = "";
      message.value = "";
      setTimeout(() => {
        emailSent.textContent = "";
        submitBtn.innerText = "Submit";
      }, 3000);
    },
    (error) => {
      emailSent.textContent = "An Error has ocurred. Please try again!";
      console.log(error);
      submitBtn.innerText = "Failed";
    }
  );
});


//////////////////////// 
//Phrase generator
///////

//content
const phrase1 = " \"No te perturbes por lo que no puedes controlar; en cambio, enfócate en lo que sí puedes.\"";
const phrase2 = "\"La felicidad no depende de lo que tienes o de lo que eres, sino exclusivamente de lo que piensas.\"";
const phrase3 = "\"No es lo que nos pasa lo que nos afecta, sino nuestra reacción a lo que nos pasa.\"";
const phrase4 = "\"La vida es muy simple, pero insistimos en hacerla complicada.\"";
const phrase5 = "\"No te preguntes qué necesita el mundo; pregúntate qué te hace sentir vivo y ve a hacer eso, porque lo que el mundo necesita es gente que ha cobrado vida.\"";
const phrase6 = "\"El coraje no es la ausencia de miedo, sino el juicio de que algo es más importante que el miedo.\"";
const phrase7 = "\"No basta con sobrevivir; uno tiene que ser digno de sobrevivir.\"";
const phrase8 = "\"Busca en tu interior; ahí reside la fuente del bien, y esta puede fluir siempre si cavas.\"";
const phrase9 = "\"No es porque las cosas son difíciles que no nos atrevemos; es porque no nos atrevemos que son difíciles.\"";
const phrase10 = "\"Tienes poder sobre tu mente, no sobre los eventos externos. Date cuenta de esto, y encontrarás la fuerza.\"";

//dom
let parallaxText = document.getElementById("parallaxText")
let parallaxText2 = document.getElementById("parallaxText2")


setInterval(testing, 6500);
let arr = [phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8, phrase9, phrase10];

function testing(){
  let index = Math.floor(Math.random() * 10);
  parallaxText.innerText =  arr[index];
  let index2 = Math.floor(Math.random() * 10);
  parallaxText2.innerText = arr[index2]; 
}