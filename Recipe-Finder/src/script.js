let recipesOriginal = [];
let sortedRecipes = [];
let sortedFilteredRecipes = [];
const searchText = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const sortSelect = document.querySelector("#sortSelect");
const recipesDiv = document.querySelector("#recipes");
const loadMoreBtn = document.querySelector("#loadMoreBtn");
const sortDiv = document.querySelector("#sort");
const rangeUpdateBtn = document.querySelector("#rangeUpdateBtn");

let offset = 0;

const createElement = (
  tagName,
  properties,
  styleProperties,
  textContent,
  parent
) => {
  const element = document.createElement(tagName);
  if (properties) {
    Object.keys(properties).forEach((property) => {
      element.setAttribute(property, properties[property]);
    });
  }
  if (styleProperties) {
    Object.keys(styleProperties).forEach((styleProperty) => {
      element.style.styleProperty = properties[styleProperty];
    });
  }
  if (textContent) element.textContent = textContent;
  if (parent) parent.appendChild(element);
  return element;
};

const makeBtnFetchingDisabled = (loadMoreBtn) => {
  loadMoreBtn.textContent = "Fetching...";
  loadMoreBtn.disabled = true;
};

const makeBtnMoreEnabled = (loadMoreBtn) => {
  loadMoreBtn.textContent = "More";
  loadMoreBtn.disabled = false;
};
const makeBtnProcessingDisabledVisible = (loadMoreBtn) => {
  loadMoreBtn.textContent = "Processing";
  loadMoreBtn.style.visibility = "visible";
  loadMoreBtn.disabled = true;
};
const alterBtnVisibility = (loadMoreBtn) => {
  if (loadMoreBtn.style.visibility === "visible") {
    loadMoreBtn.style.visibility = "hidden";
  } else {
    loadMoreBtn.style.visibility = "visible";
  }
};

const makeUpdatesAfterDisplay = (recipes) => {
  if (recipes.length < 5) {
    alterBtnVisibility(loadMoreBtn);
  } else {
    makeBtnMoreEnabled(loadMoreBtn);
  }
  offset += recipes.length;
};

const displayRecipes = (recipes) => {
  const newList = recipes.slice(offset, offset + 5);
  if (newList.length <= 0) {
    alert(`No more recipes are there to show for ${searchText.value}`);
    alterBtnVisibility(loadMoreBtn);
    return;
  }
  newList.forEach((recipe) => {
    const itemBox = createElement("div", { class: "itemBox" });
    createElement(
      "img",
      { class: "itemImage", src: recipe.image },
      null,
      null,
      itemBox
    );
    const titleDiv = createElement(
      "div",
      { class: "titleDiv" },
      null,
      null,
      itemBox
    );
    createElement("div", { class: "titleText" }, null, recipe.title, titleDiv);
    createElement(
      "button",
      { class: "titleBtn" },
      null,
      "View recipe",
      titleDiv
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Vegetarian : ${recipe.vegetarian ? "Yes" : "No"}`,
      itemBox
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Likes : ${recipe.aggregateLikes}`,
      itemBox
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Health Score : ${recipe.healthScore}`,
      itemBox
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Price per serving : ${recipe.pricePerServing}`,
      itemBox
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Minutes to prepare : ${recipe.readyInMinutes}`,
      itemBox
    );
    createElement(
      "p",
      { class: "extraInfo" },
      null,
      `Servings : ${recipe.servings}`,
      itemBox
    );
    recipesDiv.appendChild(itemBox);
  });
  makeUpdatesAfterDisplay(newList);
};

const handleErrorOnFetch = (e) => {
  alert(`Some error occured : ${e}`);
};

const getMinMaxValue = () => {
  let minValue = document.querySelector("#minValueInput").value;
  let maxValue = document.querySelector("#maxValueInput").value;
  if (minValue === "") minValue = 0;
  if (maxValue === "") maxValue = 1000000000;
  return [minValue, maxValue];
};

const filterRecipes = (sortedRecipes) => {
  const [minVal, maxVal] = getMinMaxValue();
  sortedFilteredRecipes = sortedRecipes.filter((recipe) => {
    return (
      recipe[sortSelect.value] >= minVal && recipe[sortSelect.value] <= maxVal
    );
  });
};
const sortCriteriaFunction = (val1, val2) => {
  return (
    parseFloat(val1[sortSelect.value]) - parseFloat(val2[sortSelect.value])
  );
};

const sortAndFilterRecipes = () => {
  if (sortSelect.value !== "none") {
    sortedRecipes = [...recipesOriginal].sort(sortCriteriaFunction);
  } else {
    sortedRecipes = [...recipesOriginal];
  }
  filterRecipes(sortedRecipes);
};

const fetchRecipes = () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchText.value}&addRecipeInformation=true&number=100&apiKey=4e5eb585ad3f450b84233ec844a378be`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponce) => {
      if (jsonResponce.results.length > 0) {
        recipesOriginal = jsonResponce.results;
        displayRecipes(recipesOriginal);
        sortDiv.style.visibility = "visible";
        sortAndFilterRecipes(recipesOriginal);
      } else {
        throw new Error("No recipe found on your search");
      }
    })
    .catch((e) => {
      handleErrorOnFetch(e);
    });
};

const resetValues = () => {
  recipesOriginal = [];
  offset = 0;
  sortDiv.style.visibility = "hidden";
  recipesDiv.querySelectorAll("*").forEach((node) => node.remove());
};

const changeTheText = (event) => {
  const minValueText = document.querySelector("#minValueText");
  const maxValueText = document.querySelector("#maxValueText");
  if (event.target.value === "none") {
    minValueText.textContent = "Not Selected";
    maxValueText.textContent = "Not Selected";
  } else {
    minValueText.textContent =
      event.target.options[event.target.selectedIndex].textContent;
    maxValueText.textContent =
      event.target.options[event.target.selectedIndex].textContent;
  }
};

const initForSortAndUpdate = () => {
  recipesDiv.querySelectorAll("*").forEach((node) => node.remove());
  makeBtnProcessingDisabledVisible(loadMoreBtn);
  offset = 0;
};

searchBtn.addEventListener("click", () => {
  // console.log(searchText.value.trim().length);
  if (searchText.value.trim().length > 0) {
    resetValues();
    makeBtnFetchingDisabled(loadMoreBtn);
    alterBtnVisibility(loadMoreBtn);
    fetchRecipes();
  }
});
loadMoreBtn.addEventListener("click", () => {
  makeBtnFetchingDisabled(loadMoreBtn);
  if (sortSelect.value !== "none") {
    displayRecipes(sortedFilteredRecipes);
  } else {
    displayRecipes(recipesOriginal);
  }
});

sortSelect.addEventListener("change", (event) => {
  initForSortAndUpdate();
  changeTheText(event);
  if (sortSelect.value !== "none") {
    sortAndFilterRecipes();
    displayRecipes(sortedFilteredRecipes);
  } else {
    displayRecipes(recipesOriginal);
  }
});

rangeUpdateBtn.addEventListener("click", () => {
  if (sortSelect.value !== "none") {
    initForSortAndUpdate();
    filterRecipes(sortedRecipes);
    displayRecipes(sortedFilteredRecipes);
  }
});
