export default function handleModal(message: string, bgColor: string) {
  let errorsContainer:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  errorsContainer.className = "errors";
  document.querySelector("body").appendChild(errorsContainer);
  errorsContainer.setAttribute("class", "errors activated");

  let snackError = <HTMLDivElement>document.createElement("div");
  snackError.setAttribute("class", "snack-container");
  snackError.style.background = bgColor;

  let errorLabel = <HTMLSpanElement>document.createElement("span");
  errorLabel.setAttribute("class", "error");
  errorLabel.innerHTML = message;

  snackError.appendChild(errorLabel);
  errorsContainer.appendChild(snackError);

  setTimeout(() => {
    errorsContainer.setAttribute("class", "errors desactive");
  }, 3000);
  setTimeout(() => {
    errorsContainer.setAttribute("class", "errors");
    errorsContainer.querySelectorAll(".snack-container").forEach((value) => {
      errorsContainer.removeChild(value);
      errorsContainer.remove();
    });
  }, 3500);
}
