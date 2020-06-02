// id1 direct = text, h1, text, p, text, a, text, div, text  === 9
// id1 indirect = text, em, text?, text, span, text? text, strong, text?, p, a?, text?, === 12

// id2 direct = text, em, === 2
// id2 indirect = text === 1

// id3 direct = text === 1
// id3 indirect = 0

// id4 direct = text, span text === 3
// id4 indirect = text === 1

// id5 direct = text === 1
// id5 indirect = 0

// id6 direct = strong === 1
// id6 indirect = text === 1

// id7 direct = text === 1
// id7 indirect === 0

// id8 direct = p === 1
// id8 indirect = a, text? === 2

// id9 direct = a === 1
// id9 indirect = text === 1

// id10 direct = text === 1
// id10 indirect === 0

function childNodes(id) {
  let output = [];
  let element = document.getElementById(id);
  output.push(element.childNodes.length)
}