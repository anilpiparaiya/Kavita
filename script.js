const poemList = document.getElementById('poem-list');
const poemContent = document.getElementById('poem-content');

// Sample poem data
const poems = {
    1: {
        title: 'Poem 1',
        content: 'This is the content of Poem 1.',
    },
    2: {
        title: 'Poem 2',
        content: 'This is the content of Poem 2.',
    },
    3: {
        title: 'Poem 3',
        content: 'This is the content of Poem 3.',
    },
};

// Function to update poem content
function updatePoem(poemId) {
    const poem = poems[poemId];
    poemContent.innerHTML = `
        <h2>${poem.title}</h2>
        <p>${poem.content}</p>
    `;
}

// Event listener for poem links
poemList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const poemId = e.target.getAttribute('data-id');
        updatePoem(poemId);
    }
});

// Initialize with the first poem
updatePoem(1);
