export const autocomplete = (input, arr) => {
  input.addEventListener("input", (e) => {
    const value = input.value;
    closeAllLists();
    if (!value) {
      return;
    }
    const suggestions = document.createElement("div");
    suggestions.id = "autocomplete-list";
    suggestions.className = "autocomplete-items";
    input.parentNode.appendChild(suggestions);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]["code"].substr(0, value.length) !== value) {
        continue;
      }
      const suggestion = document.createElement("li");
      suggestion.innerHTML = `<strong>${arr[i]["code"].substr(0, value.length)}</strong>`;
      suggestion.innerHTML += arr[i]["code"].substr(value.length);
      suggestion.innerHTML += ` ${arr[i]["name"]} ${arr[i]["credit"]}`;
      suggestion.innerHTML += `<input type="hidden" value=${arr[i]["code"]}>`;
      suggestion.addEventListener("click", (e) => {
        input.value = suggestion.getElementsByTagName("input")[0].value;
        closeAllLists();
      });
      suggestions.appendChild(suggestion);
    }
  })

  const closeAllLists = (elmnt) => {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", (e) => {
    closeAllLists(e.target);
  });
}