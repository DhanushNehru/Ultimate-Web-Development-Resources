function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
function copyEvent() {
  var elem = document.getElementById("copy").innerHTML;
  
  elem = elem
  .replace(/\n/g, "")
  .replace( /(<([hr]+)>)/ig, '')
  
  copyToClipboard(elem);
}
function downEvent() {
  var elem = document.getElementById("copy").innerHTML;

  elem = elem
  .replace(/\n/g, "")
  .replace( /(<([hr]+)>)/ig, '')

  var file = new File(["\ufeff"+elem], 'README.md', {type: "text/plain:charset=UTF-8"});

  url = window.URL.createObjectURL(file);

  //create a hidden link and set the href and click it
  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = file.name;
  a.click();
  window.URL.revokeObjectURL(url);
}

const addClickHandlers = (ids) => {
  ids.forEach(({ id, icon, text }) => {
    const element = document.getElementById(id);
    element.addEventListener("click", function handleClick() {
      element.innerHTML = `<iconify-icon icon="${icon}"></iconify-icon> ${text}`;
    });
  });
};

addClickHandlers([
  { id: "copy_btn", icon: "akar-icons:copy", text: "Code Copied" },
  { id: "down_btn", icon: "ri:file-download-line", text: "Downloading" },
]);
