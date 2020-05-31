// A recursive function
// - returns to the previous level of recursion when its gone as far as it can
// - performs a bit of processing
// - calls itself with a smaller argument.

// We don't use Arrays when walking the tree in the DOM. Instead, we use DOM nodes. Each "smaller" argument is a child of the current node. Here is some code that does this:


function walk(node) {
  console.log(node.nodeName); // do something with node
  var i;
  for (i = 0; i < node.childNodes.length; i++) {  // for each child node
    walk(node.childNodes[i]);                     // recursively call walk()
  }
}

walk(document.body)           // log nodeName of every node



// The downside to this implementation is that `walk` both walks the tree and does something with each node, which makes it hard to reuse the node-walking functionality without duplicating code. A better solution separates `walk` into two functions: one walks the tree (we'll continue to call it `walk`) and another does something with a node. We'll pass the second functions to `walk` as an argument:

// walk() calls the function "callback" once for each node
function walk(node, callback) {
  callback(node);         // do something with node
  var i;
  for (i = 0; i < node.childNodes.length; i ++) {  // for each child node
    walk(node.childNodes[i], callback);            // recursively call walk()
  }
}

walk(document.body, function(node) {                // log nodeName of every node
  console.log(node.nodeName);
});

// This separation of processing converts `walk` from a single-purpose function into a general-purpose, higher-level function we can use in any application. It's analogous to `Array.prototype.forEach` and other Array methods we've seen, but we use it with DOM nodes, not Arrays.