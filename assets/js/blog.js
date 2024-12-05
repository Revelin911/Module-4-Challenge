// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const article = document.querySelector('article');
const main = document.querySelector('main');
const backButton = document.querySelector('back-button');

// TODO: Create a function that builds an element and appends it to the DOM

function buildElement() {

    const title = document.createElement('h2');
    const content = document.createElement('p');
    const username = document.createElement('blockquote');
    blog.title = title;
    blog.content = content;
    blog.username = username;
    article.append(title, content, username);
    main.append(article);
}
// TODO: Create a function that handles the case where there are no blog posts to display

function noPosts() {
    
    p.textContent = 'No posts to display';
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    const blogData = readLocalStorage();
    if (blogData.length === 0) {
        noPosts();
    } else {
        for (let i = 0; i < blogData.length; i++) {
            buildElement(blogData[i]);
        }
    }
}
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
if (backButton) {
    backButton.addEventListener('click', function() {
        redirectPage;
    });
    
}