// 1) Use JavaScript to set a class of 'heading' to the heading of the h1 element.

let h1 = document.getElementById('primary_heading');
h1.setAttribute('class', 'heading');

// 2) Use JavaScript to set the class of the ul element to 'bulleted'.

let uls = document.getElementsByTagName('ul')
let ulsArray = Array.from(uls);
ulsArray.forEach(ul => ul.setAttribute('class', 'bulleted'));

// Book Answer

document.getElementById('list').setAttribute('class', 'bulleted');

//


//3) 
// This didn't work
let hidden = document.getElementById('notice');
hidden.onclick = function (e) {
    e.preventDefault();
    let clss = e.getAttribute('class');
    if (clss === 'hidden') {
        e.setAttribute('class', 'visible');
    } else if (clss === 'visible') {
        e.setAttribute('class', 'hidden');
    }
}

//Book Answer

document.getElementById('toggle').onclick = e => {
    e.preventDefault();
    let notice = document.getElementById('notice');
    if (notice.getAttribute('class') === 'hidden') {
        notice.setAttribute('class', 'visible');
    } else {
        notice.setAttribute('class', 'hidden');
    }
}


// 4)
document.getElementById('notice').onclick = e => {
    e.preventDefault();
    e.currentTarget.setAttribute('class', 'hidden');
};


// 5) Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

document.getElementById('multiplication').textContent = '117';

// 6) Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.

document.querySelector('body').setAttribute('id', 'styled');
//Book answer:
document.body.setAttribute('id', 'styled');