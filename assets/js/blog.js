// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('back-button');
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(article, h2, p, blockquote) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const blockquote = document.createElement('blockquote');
    h2.textContent = title;
    p.textContent = content;
    blockquote.textContent = username;
    article.append(h2, p, blockquote);
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