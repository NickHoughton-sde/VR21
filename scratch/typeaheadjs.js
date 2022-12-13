const search_terms = ["moose", "cow", "dog", "cat", "mouse", "squirrel", "snake"];
const arrayOfObjects = [{name: "Fox", link: "foxnews.com"},{name: "Fandango", link: "fandango.com"}, {name: "CNN", link: "cnn.com"}];
let arrayNames = arrayOfObjects.map(({name}) => name);
let arrayLinks = arrayOfObjects.map(({link}) => link);

const buildMap = (arrayNames, arrayLinks) => {
    const map = new Map();
    for(let i = 0; i < arrayNames.length; i++) {
        map.set(arrayNames[i], arrayLinks[i]);
    };
    return map;
};

let newMap = (buildMap(arrayNames, arrayLinks));
console.log(newMap);
console.log(newMap.get("Fox"))


function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  let reg = new RegExp(input)
  return arrayNames.filter(function(term) {
	  if (newMap.get(term).match(reg)) {
  	  return newMap.get(term);
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  console.log
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}