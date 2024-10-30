import { search } from "./search";

export async function display(input) {
  const output = document.getElementById("output");
  output.innerHTML = "";
  const weather = await search(input);
  console.log(weather);
  const text = document.createElement("h1");
  const textnode = document.createTextNode(
    `IT'S FUCKING ${weather.temp}\u00B0F and ${weather.conditions}`
  );
  text.appendChild(textnode);
  output.appendChild(text);
}
