const searchForm = $('#congress-search');
const searchInput = $('#search-terms');
var repoList = document.querySelector("ul");

var handleFormSubmit = function (event) {
  event.preventDefault();

  var inputSearch = searchInput.val();

  if (!inputSearch) {
    console.log('You need to fill out the form!');
    return;
  }

  getApi(inputSearch)
  

  // reset form
  searchInput.val('');
};

function getApi(seached) {
    // Insert the API url to get a list of your repos
    var requestUrl = "https://www.loc.gov/search/?fo=json&q=" + searched;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //looping over the fetch response and inserting the URL of your repos into a list
        for (var i = 0; i < data.length; i++) {
          //Create a list element
          var listItem = document.createElement("li");
  
          //Set the text of the list element to the JSON response's .html_url property
          listItem.textContent = data[i].html_url;
  
          //Append the li element to the id associated with the ul element.
          repoList.appendChild(listItem);
        }
      });
  }

fetchButton.addEventListener("click", handleFormSubmit);
