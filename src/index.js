import { display } from "./display";

const search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  display(input);
});
