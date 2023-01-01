
var firstItem = document.getElementById('one');

// Get the content of the first list item
var itemContent = firstItem.innerHTML;

// Update the content of the first list item so it is a link
firstItem.innerHTML = 'test';
//'p> test &copy;' + today + '</p>';
var secondItem = document.getElementById('two');
secondItem.innerHTML = 'is this working';

var el = document.querySelector('li.hot');
el.className = 'cool';
