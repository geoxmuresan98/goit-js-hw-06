const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

const totalItems = items.length;

console.log("Number of categories  :", totalItems);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");
  const totalElements = categoryElements.length;

  console.log("Category:", title);
  console.log("Elements:", totalElements);
});