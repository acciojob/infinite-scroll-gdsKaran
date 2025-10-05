//your code here!

// your code here!

const list = document.getElementById('infi-list');

// function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// add 10 items initially
addItems(10);

// detect scroll end
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more when scrolled to bottom
  }
});
