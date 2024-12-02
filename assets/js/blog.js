// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('back-button');
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(blog) {
    const username = document.createElement('username');
    const title = document.createElement('title');
    const content = document.createElement('content');
    const blockquote = document.createElement('blockquote');
    username.textContent = username;
    title.textContent = title;
    content.textContent = content;
    article.append(username, title, content, blockquote);
    main.append(article);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    const p = document.createElement('p');
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