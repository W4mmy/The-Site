function goHome() {
    window.location.href = "index"
}

function goBlog() {
    window.location.href = "blog";
}

// function goContact() {
//     window.location.href = "contact"
// }

function parent_goHome() {
    window.location.href = "../index"
}

function parent_goBlog() {
    window.location.href = "../blog"
}

// function parent_goContact() {
//    window.location.href = "../contact"
// }   
    
function display() {
    var navBar = document.getElementById("nav_Bar")
    if (navBar.style.display !== "block") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
}

function rotate() {
    var dropdown = document.getElementById("dropdown_triangle")
    if (dropdown.style.transform !== "rotate(180deg)") {
        dropdown.style.transform = 'rotate(180deg)'
    } else {
        dropdown.style.transform = 'rotate(0deg)'
    }
}
