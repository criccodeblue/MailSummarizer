var consoleExtension = (message) => {
  console.log(
    `%c${message}`,
    "background-color: #203554; color: white; font-size: 16px;"
  );
};

console.log("extension running");
consoleExtension("Extension is running");

var modifyDom = () => {
  console.log("modify Dom Running");

  const mailHeadingDiv = document.querySelector(".nH.V8djrc.byY");

  const textElement = document.createTextNode("Hello");
  console.log(mailHeadingDiv, textElement);
  if (mailHeadingDiv) {
    mailHeadingDiv.parentElement.insertBefore(
      textElement,
      mailHeadingDiv.nextElementSibling
    );
  }
};

modifyDom();
