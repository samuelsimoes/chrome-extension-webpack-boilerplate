export default (axieCard) => {
  const freakTable = axieCard.querySelector("table");
  if (!freakTable) return;

  const genes = freakTable.parentElement.cloneNode(true);
  genes.style.display = "block";
  genes.style.position = "unset";
  genes.style["font-size"] = "12px";
  genes.style["margin-bottom"] = "8px";
  genes.style.padding = "0";
  genes.style.border = "none";
  genes.style.background = "none";

  genes.querySelectorAll("td").forEach((td) => {
    td.style["max-width"] = "70px";
  });

  const axieImg = axieCard.querySelector("img").parentElement;
  axieImg.style.display = "none";

  axieImg.parentElement.insertBefore(genes, axieImg);
};
