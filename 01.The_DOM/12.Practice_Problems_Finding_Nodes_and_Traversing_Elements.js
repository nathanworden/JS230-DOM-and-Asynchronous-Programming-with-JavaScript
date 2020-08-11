let h2s = document.getElementsByTagName('h2');
let arr = Array.from(h2s);
arr.map(node => node.textContent.split(' ').length);
// [1, 3, 3, 3, 1, 2, 4, 1, 5, 2, 2, 1, 1, 2, 2, 2]


/*
2) The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc.

Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.
*/
document.querySelector('#toc');
document.querySelectorAll('.toc')[0]
document.getElementsByClassName('toc')[0];
document.getElementById('toc');


/*
Write some JavaScript code to change the color for every odd indexed link in the table of contents to green

*/
// My Answer that did all the links, not just in the table of contents:
let links = document.getElementsByTagName('a');
let linksArray = Array.from(links);
linksArray.forEach((link, idx) => {
    if (idx % 2 === 0) {
        link.style.color = 'green';
    }
});

// Book Answer

let links = document.querySelectorAll('.toc a');

for (index = 0; index < links.length; index += 1) {
    if (index % 2 > 0) {
        links[index].style.color = 'green';
    }
}



// 4. Write some JavaScript code to retrieve the text of every thumbnail caption on the page.

let thumbs = document.getElementsByClassName('thumbcaption');
let thumbArray = Array.from(thumbs);
thumbArray.forEach(thumb => console.log(thumb.textContent));


// 5. You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

// Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.

let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll('.infobox td');
let cell;
let link;

for (index = 0; index < tds.length; index += 1) {
  cell = tds[index];

  keys.forEach(key => {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);
