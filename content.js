fetch(chrome.runtime.getURL('filters.json'))
    .then(response => response.json())
.then(data => {
    const filters = data.filters;
const entries = document.querySelectorAll('a.entry-author');
entries.forEach(entry => {
    const authorName = entry.textContent.trim();
if (filters.includes(authorName)) {
    const image = document.createElement('img');
    image.src = chrome.runtime.getURL('image.png');
    image.style.display = 'inline-flex';
    image.style.alignItems = 'center';
    image.style.width = '20px';
    image.style.height = '20px';
    image.style.marginRight = '5px';
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.appendChild(image);
    div.appendChild(entry.cloneNode(true));
    entry.replaceWith(div);
}
});
});
