//Traer el lugar donde se mostrarán los numeros
const display = document.querySelector("#display");
//Traer todos los buttons
const buttons = document.querySelectorAll("button");

// Selecciona todos los botones de la calculadora y les asigna un evento "click"
buttons.forEach((item) => {
    item.onclick = () => {
      // Si el botón presionado es el botón "clear", borra todo el contenido de la pantalla de la calculadora
      if (item.id == "clear") {
        display.innerText = "";
      }
      // Si el botón presionado es el botón "backspace", elimina el último carácter de la pantalla de la calculadora
      else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      }
      // Si la pantalla de la calculadora no está vacía y el botón presionado es el botón "equal", evalúa la expresión matemática en la pantalla
      else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      }
      // Si la pantalla de la calculadora está vacía y el botón presionado es el botón "equal", muestra un mensaje de "Empty!" durante 2 segundos
      else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
      // Para todos los demás botones, agrega el valor del botón presionado a la pantalla de la calculadora
      else {
        display.innerText += item.id;
      }
    };
  });
  
  // Selecciona el botón de alternancia de tema, la calculadora y el icono de alternancia de tema
  const themeToggleBtn = document.querySelector(".theme-toggler");
  const calculator = document.querySelector(".calculator");
  const toggleIcon = document.querySelector(".toggler-icon");
  
  // Inicializa una variable "isDark" que indica si el tema actual es oscuro
  let isDark = true;
  
  // Asigna un evento "click" al botón de alternancia de tema
  themeToggleBtn.onclick = () => {
    // Alterna la clase "dark" en la calculadora para alternar entre temas claro y oscuro
    calculator.classList.toggle("dark");
    // Alterna la clase "active" en el botón de alternancia de tema para cambiar la apariencia del botón
    themeToggleBtn.classList.toggle("active");
    // Invierte el valor de "isDark" para reflejar el nuevo tema
    isDark = !isDark;
  };