var content = document.getElementById('content');
var search = document.getElementById('search-box');
search.addEventListener("input", function() {
    content.textContent = search.value;
  });

var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
  
menuIcon.addEventListener('click', function() {
 if (menu.style.display === 'none') {
menu.style.display = 'block';
} else {
menu.style.display = 'none';
}
});