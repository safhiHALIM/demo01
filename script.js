/*const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    const extname = path.extname(filePath);
    const contentType = extname === '.css' ? 'text/css' : 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Fichier non trouvé</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
});
*/

//SWITCH 
function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// Charger la section Home par défaut
document.addEventListener('DOMContentLoaded', function() {
    loadSection('home');
});

document.addEventListener('click', function (event) {
    // Only proceed if the navbar-toggler is visible (meaning the navbar is collapsed)
    if (window.innerWidth <= 992) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        // Check if the clicked element is a link inside the navbar
        if (navbarCollapse.classList.contains('show') && event.target.closest('.nav-link')) {
            navbarToggler.click(); // Programmatically close the navbar by triggering a click on the toggler
        }
    }
});

// counter

const counters = document.querySelectorAll('.counter');
console.log(counters);
function runCounter ()
{
    counters.forEach(counter => {
        counter.innerText = 0;

        let target = +counter.dataset.count;
        let step = target / 100;

        let countit = function(){
            let displayedCount = +counter.innerText;
            if(displayedCount < target)
            {
                counter.innerText = Math.ceil(displayedCount +step);
                setTimeout(countit, 1);
            }
            else{
                counter.innerText = target;
            }
        }
        countit();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    runCounter();
});


  
