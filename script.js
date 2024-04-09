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
