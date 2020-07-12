const rawHTML = document.querySelector("#rawHTML");
const content = document.querySelector("#content");
const clear = document.querySelector("#clear");
const copy = document.querySelector("#copy");

const placeHolder =
  "## This is a headline\n\nThis is a paragraph element.\n\n1. This is a list item\n2. This is the second item";

window.onload = () => {
  rawHTML.value = placeHolder;
  content.innerHTML = makeMarkdown(placeHolder);
};

rawHTML.onchange = () => {
  const text = rawHTML.value;
  content.innerHTML = makeMarkdown(text);
};

const makeMarkdown = (str) => {
  return marked(str);
};

clear.onclick = () => {
  rawHTML.value = "";
  content.innerHTML = "";
};

copy.onclick = () => {
  rawHTML.select();
  rawHTML.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied markdown text");
};

