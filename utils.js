export const consoleExtension = (message) => {
  console.log(
    `%c${message}`,
    "background-color: #203554; color: white; font-size: 16px;"
  );
};

const getSummary = async () => {
  const resp = await fetch("http://localhost:3000/");
  console.log(resp.json());
};

export const modifyDom = async () => {
  console.log("modify Dom Running");

  const mailHeadingDiv = document.querySelector(".nH.V8djrc.byY");

  console.log(mailHeadingDiv);
  if (mailHeadingDiv) {
    const respHtml = await fetch(chrome.runtime.getURL("generateSummary.html"));
    const reqHtml = await respHtml.text();
    if (mailHeadingDiv && reqHtml) {
      console.log(mailHeadingDiv, reqHtml);
      mailHeadingDiv.insertAdjacentHTML("afterend", reqHtml);

      const getSummaryButton = document.querySelector("#getSummary");
      getSummaryButton.addEventListener("click", getSummary);
    }
  }
};
