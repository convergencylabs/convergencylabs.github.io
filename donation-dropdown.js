const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
let hideTimeout;

function showDropdown() {
    clearTimeout(hideTimeout);
    dropdownMenu.style.display = "block";
    setTimeout(() => {
        dropdownMenu.style.opacity = "1";
    }, 10); // Small delay for smooth fade-in
}

function hideDropdown() {
    hideTimeout = setTimeout(() => {
        dropdownMenu.style.opacity = "0";
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300); // Matches opacity transition time
    }, 300); // Short delay before hiding
}

dropdownToggle.addEventListener("mouseover", showDropdown);
dropdownToggle.addEventListener("mouseout", hideDropdown);
dropdownMenu.addEventListener("mouseover", showDropdown);
dropdownMenu.addEventListener("mouseout", hideDropdown);