// We'll use fetch() to get a cat fact from the API
// and display it inside the #cat-fact element

// Once that works, we can apply the "pretty-fact" CSS class too
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const catFactEl = document.getElementById('cat-fact');
        catFactEl.textContent = data.fact;
        catFactEl.classList.add('pretty-fact');
    })
    .catch(error => {
        console.error('Something when wrong', error);
        document.getElementById('cat-fact').textContent = 'failed to get cat fact';
    })