const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const scrollProgress = document.querySelector("#scrollProgress");
const submitBtn = document.querySelector("#submitBtn");
const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#correo");
const productoInput = document.querySelector("#producto");
const nombreError = document.querySelector("#nombreError");
const correoError = document.querySelector("#correoError");
const productoError = document.querySelector("#productoError");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
};

const updateParallax = () => {
  const y = window.scrollY;
  parallaxItems.forEach((item, index) => {
    const speed = index === 0 ? 0.08 : 0.045 + index * 0.01;
    const scale = item.classList.contains("hero-bg") ? 1.03 : 1;
    item.style.transform = `translateY(${y * speed}px) scale(${scale})`;
  });
};

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateParallax();
});

window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.body.style.setProperty("--mx", `${x}%`);
  document.body.style.setProperty("--my", `${y}%`);
});

updateScrollProgress();
updateParallax();

if (contactForm && formStatus) {
  const setFieldState = (input, errorNode, message) => {
    if (!input || !errorNode) return false;
    errorNode.textContent = message;
    if (message) {
      input.classList.add("invalid");
      input.setAttribute("aria-invalid", "true");
      return false;
    }
    input.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
    return true;
  };

  const validateForm = () => {
    const nombre = nombreInput ? nombreInput.value.trim() : "";
    const correo = correoInput ? correoInput.value.trim() : "";
    const producto = productoInput ? productoInput.value.trim() : "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNombreValid = setFieldState(
      nombreInput,
      nombreError,
      nombre ? "" : "Ingresa tu nombre."
    );
    const isCorreoValid = setFieldState(
      correoInput,
      correoError,
      !correo ? "Ingresa un correo." : emailPattern.test(correo) ? "" : "Correo no valido."
    );
    const isProductoValid = setFieldState(
      productoInput,
      productoError,
      producto ? "" : "Selecciona un producto."
    );

    return isNombreValid && isCorreoValid && isProductoValid;
  };

  [nombreInput, correoInput, productoInput].forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => {
      validateForm();
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.classList.remove("error");
    if (!validateForm()) {
      formStatus.textContent = "Corrige los campos marcados para continuar.";
      formStatus.classList.add("error");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";
    }

    window.setTimeout(() => {
      formStatus.textContent = "Solicitud enviada con exito. Te responderemos pronto.";
      contactForm.reset();
      validateForm();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar solicitud";
      }
    }, 900);
  });
}
