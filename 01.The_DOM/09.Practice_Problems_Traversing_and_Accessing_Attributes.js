/*
Problem 4: Add the class stanza to each paragraph except the first


The following is done in the console of the web browser:


*/

let arr = Array.from(document.body.childNodes);
let justPs = arr.filter(node => {
    return node.tagName === "P";
});

justPs.forEach((node, idx) => {
    if (idx >= 1) {
        node.classList.add('stanza');
    }
});

// Here is how the book did it:

let first = true;
TreeWalker(document, node => {
    if (node.nodeName === 'P') {
        if(first) {
            first = false;
        } else {
            node.classList.add('stanza');
        }
    }
});



// Question 5: Count the images on the wikipedia page for polar bears. Then count the PNG images. Log both results.

let images = [];
walk(document.body, node => {
    if (node.tagName === "IMG") {
        images.push(node);
    }
});

images.length // 48

let pngCount = images.filter(img => {
    return img.getAttribute('src').match(/png$/);
});

pngCount // 23


// Question 6. Change the link color to red for every link on the page

walk(document.body, node => {
    if (node.tagName === "A") {
        node.style.color = 'red';
    }
});