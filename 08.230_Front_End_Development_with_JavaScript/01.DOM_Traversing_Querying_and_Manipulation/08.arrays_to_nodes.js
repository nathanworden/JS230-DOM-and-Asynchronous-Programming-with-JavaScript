// var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
var nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

// function arrayToNodes(nodes) {
//   // console.log(nodes);

//   let indent = 0;
//   let output = '';
//   if (nodes.length === 0) {
//     return '';
//   }
//   else if (typeof nodes[0] === 'string') {
//     output += `<${nodes[0].toLowerCase()}>`;
//     output += arrayToNodes(nodes[1]);
//     output += `</${nodes[0].toLowerCase()}>\n`;
//   } else if (typeof nodes[0] === 'object') {
//     output += '\n';
//     output += '  ';
//     nodes.forEach(subArr => output += arrayToNodes(subArr));
//   }


//   return output;
// }

// console.log(arrayToNodes(nodes));


function arrayToNodes(nodes) {
  var parent = document.createElement(nodes[0]);
  var children = nodes[1];
  var i;

  if (children.length === 0) {
    return parent;
  } else {
    for (i = 0; i < children.length; i += 1) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }
  
  return parent;
}

console.log(arrayToNodes(nodes));
