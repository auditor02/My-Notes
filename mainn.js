let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
    window.onload = function () {
      
    }
  });
  
  let formValidation = () => {
    if (textInput.value === "") {
      console.log("failure");
      msg.innerHTML = "Task cannot be blank";
    } else {

      console.log("success");
      msg.innerHTML = "";

      acceptData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click();


      (() => {
          add.setAttribute("date-bs-dismiss", "");

      })();
    }
  };

  let data = [];

  let acceptData = () => {
      data.push({
          text: textInput.value,
          date: dateInput.value,
          description: textarea.value,
      });

      localStorage.setItem("data", JSON.stringify(data));
      createTasks();
      console.log(data);

  };

    let createTasks = () => {
      tasks.innerHTML = "";
      data.map((x, y) => {
          return (tasks.innerHtml += `
          <div id =${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>

          <span class="options">
          <i onClick= "editTask(this)" data-bs-toggle="modal"
          data-bs-target="#form" class="fas fa edit"></i>
          <i onclick ="deleteTask(this);createTasks()"
          class="fas fa-trash-alt"></i>
          </span>
          </div>
          `);
      });

 resetForm();
  }
  
  let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
  }