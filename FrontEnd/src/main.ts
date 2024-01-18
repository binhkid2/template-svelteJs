import "./app.pcss";
import App from "./App.svelte";

const targetElement = document.getElementById("app");

let app;

if (targetElement) {
  app = new App({
    target: targetElement,
  });
} else {
  throw new Error('Could not find element with id "app"');
}

export default app;
