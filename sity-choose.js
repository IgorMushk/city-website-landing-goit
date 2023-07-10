import { sityItems } from "/sity.js";

//const sityArr = sityItems.map((sity) => console.log(sity));

//const inputeSity = document.querySelector("#filter");
const inputeSity = document.querySelector("#filtr-sity");
console.log(inputeSity);

//.map({ sityPathImg, sityName }) => `<option value="${sityPathImg}">${sityName}</option>`
const sityArrSelect = sityItems.map(({ sityPathImg, sityName }) => {
  //   if (sityPathImg !== "kyiv") {
  //     const strSelect = `<option value="${sityPathImg}">${sityName}</option>`;
  //   } else {
  //     const strSelect = `<option value="${sityPathImg}" selected>${sityName}</option>`;
  //   }
  //   return strSelect;
  return sityPathImg !== "kyiv"
    ? `<option value="${sityPathImg}">${sityName}</option>`
    : `<option value="${sityPathImg}" selected>${sityName}</option>`;
  //console.log(sityPathImg, sityName);
});
//console.log(sityArr);

//inputeSity.insertAdjacentHTML("afterbegin", sityArrSelect.join());
inputeSity.innerHTML = sityArrSelect.join();

//inputeSity.addEventListener("input", onFilterChange);
inputeSity.addEventListener("change", onFilterChange);

function onFilterChange(evt) {
  //console.log("INPUT");
  const filter = evt.target.value.toLowerCase();
  console.log(filter);
  if (filter === "") return;

  // Поиск города в INPUT
  //const sityFind = sityItems.find((sity) => sity.sityName.toLowerCase() === filter);
  // Поиск города в SELECT
  const sityFind = sityItems.find((sity) => sity.sityPathImg.toLowerCase() === filter);
  //console.log(sityFind);

  if (sityFind) {
    console.log(sityFind);
    const refSityTitle = document.querySelector(".city-title");
    const refSityDescr = document.querySelector(".city-descr");
    const refSitySityPage = document.querySelector(".city-page");

    console.log(refSityTitle);
    console.log(refSityDescr);
    console.dir(refSitySityPage);

    // Втавка данных на страницу
    refSityTitle.textContent = sityFind.sityName;
    refSityDescr.textContent = sityFind.description;
    // background: url("img/kyiv/background.jpg");
    refSitySityPage.style.background = `url("img/${sityFind.sityPathImg}/background.jpg")`;
    refSitySityPage.style.backgroundSize = "cover";
  }
}
