import Sortable from "sortablejs";

export default () => {
  const container = document.querySelector(".axie-card");
  if (container) {
    Sortable.create(container.parentElement.parentElement.parentElement, {
      handle: ".axie-card",
      animation: 150,
    });
  }
};
