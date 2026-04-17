// SCROLL ANIMATION
const items = document.querySelectorAll('.card, .about, .contact');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

items.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});


// EMAILJS
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    'service_b0r2o6g',
    'template_xinp4ii',
    this
  )
  .then(function(){
    document.getElementById("status").innerText = "Message sent successfully!";
  }, function(error){
    document.getElementById("status").innerText = "Failed to send message.";
  });
});