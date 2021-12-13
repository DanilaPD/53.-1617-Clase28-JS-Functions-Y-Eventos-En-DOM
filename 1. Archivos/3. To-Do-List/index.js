//* Atributos:
//* https://www.w3schools.com/html/html_form_attributes.asp

const form = document.getElementById("newTask");

const newTask = document.getElementById("newTaskInput");

const emptyTaskAlert = document.getElementById("emptyTask");

// const tasksContainer = document.getElementById("container");

const tasksList = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  // Evitamos que el "form" sea "submiteado" al apretar el botón, que es el comportamiento por default de los botones.
  e.preventDefault();
  console.log("No refrescó.");

  // Vamos a agarrar el valor del "form":
  const task = newTask.value;
  console.log(task);

  // Si el valor de "task" no existe:
  if (!task) {
    emptyTaskAlert.classList.remove("hidden");
    setTimeout(() => {
      emptyTaskAlert.classList.add("hidden");
    }, 3000);
    return;
  }

  // No necesitamos realmente un "else" porque si tiene un "value", simplemente no va a entrar en el "if".

  // Vamos a crear desde cero todo lo que teníamos en el "mock" del HTML:

  // Creamos el "div" que va a ser nuestro container:
  const taskElement = document.createElement("div");

  // Le damos la "class":
  taskElement.classList.add("container");

  // Creamos el "input" de la task:
  const taskInput = document.createElement("input");
  taskInput.classList.add("taskInput");
  // Esta es la que tenía el "mock".

  // Yo ese input quiero que venga con un "valor por defecto":
  taskInput.value = task;
  // Necesito decirle qué tipo de "input" es:
  taskInput.type = "text";

  // Nos falta el "atributo" con el que vamos a poder modificar o no el texto:
  taskInput.setAttribute("readonly", "readonly");
  // "A qué le aplico", "qué valor le aplico".
  // "SetAttribute" sí o sí recibe dos parámetros.

  //* taskInput.setAttribute("min", 5)
  // Si quisiéramos que el largo mínimo fuera 5.

  // Ahora, a "appendearlos" y sumarlos al HTML:

  // Al "taskElement", le vamos a pegar el "input" y al "taskList", le vamos a pegar el "taskElement".
  taskElement.appendChild(taskInput);
  // Ahora el "input" es hijo del "container".

  tasksList.appendChild(taskElement);
  // El "container" y sus "hijos" ahora son hijos del ID "tasks".

  // El "div" de los botones:
  const taskBtns = document.createElement("div");
  taskBtns.classList.add("btns");

  // Los botones:
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");

  const scrapBtn = document.createElement("button");
  scrapBtn.classList.add("scrap");

  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("erase");

  // A "appendear" botones:
  //! Padre.método(Hijo):
  taskBtns.appendChild(editBtn);
  taskBtns.appendChild(scrapBtn);
  taskBtns.appendChild(eraseBtn);

  taskElement.appendChild(taskBtns);
});
