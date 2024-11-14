function toggleMenu() {
    const menu = document.getElementById("navbar-menu");
    const button = document.getElementById("nav-btn");
    menu.classList.toggle("active");
    button.classList.toggle("active");
  }

  const navbar=document.querySelector('.navbar')

  window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
  })
   // Set the current year dynamically
   document.getElementById("year").textContent = new Date().getFullYear();