function sayHello() {
  alert("hello!");
}

const el = document.querySelector("#button") as HTMLElement;
el.onclick = sayHello;
