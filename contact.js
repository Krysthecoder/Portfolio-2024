//all elements from the DOM

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameImput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

//needed data from email JS
const publicKey = "1bKIq8S3BUPPj2ZFi";
const serviceID = "service_kp5234l";
const templateID = "template_blf6lkt";

//initializing the email JS with public key
emailjs.init(publicKey);

//add submit event to the form
contactForm.addEventListener("submit", e => {
    e.preventDefault();//prevent form default behaviour
    submitBtn.innerText = "Sending"//changing the button text
    const inputFields = { //getting all the input fields value
        name: nameImput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    /* send the email
    add services, template ID and input field values*/
    emailjs.send(serviceID, templateID, inputFields)
    .then(()=>{
        submitBtn.innerText = "Sent";//changing the sending btn text
        nameImput.value = ''; //clear all input fields
        emailInput.value = '';
        messageInput.value = '';
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Failed";
    });
});