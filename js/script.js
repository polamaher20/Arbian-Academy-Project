document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function(element) {
element.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.nextElementSibling.classList.toggle('show');
});
});
