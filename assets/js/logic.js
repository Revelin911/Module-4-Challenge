// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
if (document.body.classList.contains('dark-mode')) {
  localStorage.setItem('dark-mode','enabled');     
  } else {
    localStorage.setItem('dark-mode','disabled');
  }

if (localStorage.getItem('dark-mode') === 'enabled') {
  toggleDarkMode();
} 
}
toggleButton.addEventListener('click',toggleDarkMode);
 
// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogData = localStorage.getItem('blogData');
  if (blogData) {
    return JSON.parse(blogData);
  }
  return [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogData) {
  const existingData = readLocalStorage ();
  existingData.push(blogData);
  localStorage.setItem('blogData', JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};