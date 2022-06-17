
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction(onclick) {
    var x = document.getElementById("navbar_list");
    if (x.className === "navbar_list") {
      x.className += " responsive";
    } else {
      x.className = "navbar_list";
    }
  }
  const navId = document.getElementById("navbar_list"),
 ToggleBtnId = document.getElementById("toggle_btn"),
 CloseBtnId = document.getElementById("close_btn");
// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
 navId.classList.add("show");
});
// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", (onclick) => {
 navId.classList.remove("show");
});
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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
//Get the button:
mybutton = document.getElementById("sbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(onscroll) {scrollFunction()};

function scrollFunction(onscroll) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(onscroll) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/**
 * Define Global Variables
 * 
*/


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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


