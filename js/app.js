/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


let allSections = document.querySelectorAll('Section');
let ul = document.getElementById('navbar__list');

// Build menu 

for (let i = 1; i <= allSections.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    let a = document.createElement('a');
    li.appendChild(a);
    a.setAttribute('class', 'menu__link');
    a.innerHTML += 'Link' + ' ' + [i];
    a.setAttribute('href', '#section' + [i]);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Scroll to section on link click
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Set sections as active
            document.querySelector(this.getAttribute('href')).classList.add("your-active-class");

            // Remove 'your-active-class' class from previous and next element

            var previous = document.querySelector(this.getAttribute('href')).previousElementSibling;
            var next = document.querySelector(this.getAttribute('href')).nextElementSibling;
            console.log(previous, next);
            
            previous.classList.remove('your-active-class');
            next.classList.remove('your-active-class');

        });
    });
};


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
// allSections.forEach( (elm, index, array)=>)

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


