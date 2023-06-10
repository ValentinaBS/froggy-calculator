const buttons = document.querySelectorAll(".btn")
const display = document.getElementById("display");
const frogSound = new Audio("https://docs.google.com/uc?export=download&id=1h5YrL8Wyw-AgTS4A2QOKhBWDHJDiJWVB")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btnPressed = button.textContent;

    if (button.id === "plus") {
      display.textContent += "+";
      return;
    }

    if (button.id === "minus") {
      display.textContent += "-";
      return;
    }

    if (button.id === "times") {
      display.textContent += "*";
      return;
    }

    if (button.id === "divide") {
      display.textContent += "/";
      return;
    }

    if (button.id === "clear") {
      display.textContent = "0";
      return;
    }

    if (button.id === "backspace") {
      if (display.textContent.length === 1 
        || display.textContent === "Error!" 
        || display.textContent === "NaN" 
        || display.textContent === "Infinity") {
        display.textContent = "0";
      } else {
        display.textContent = display.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "equals") {
      try {
        if (display.textContent === "0/0") {
          display.textContent = "Error!"
          frogSound.play()
        }
        display.textContent = eval(display.textContent)
        frogSound.play()
      } catch {
        display.textContent = "Error!"
        frogSound.play()
      }
      return;
    }

    if (display.textContent === "0" 
    || display.textContent === "Error!" 
    || display.textContent === "NaN" 
    || display.textContent === "Infinity") {
      display.textContent = btnPressed;
    } else {
      display.textContent += btnPressed;
    }
  })
})