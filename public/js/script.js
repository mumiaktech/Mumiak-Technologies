fetch('/config.json') // Fetch the ID from a secure JSON file or API
    .then(response => response.json())
    .then(config => {
        document.getElementById('contact-form').action = `https://formspree.io/f/${config.FORMSPREE_ID}`;
    })
    .catch(error => console.error('Error loading form ID:', error));
