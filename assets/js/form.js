// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    if (!username || !title || !content) {
        alert('Please complete the form');
        return;
    } else {
       const blogData = {
        username: username,
        title: title,
        content: content,
    }; 
    localStorage.setItem('blogData', JSON.stringify(blogData));
    window.location.href = './index.html';
    localStorage.getItem('blogData');
    }
    }
    
    storeLocalStorage(blogData);
    redirectPage;

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit) 