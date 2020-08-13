// Check if the parent element has children.
// If the parent element has children set the value of the children array to it ([parentElement, [children]]), otherwise, set it to an empty array ([parentElement, []]).
// Check if any of the children are parents.
// If there are parents, repeat the process from step 1.

function nodesToArr() {
    let parent = document.body

    
    return goDown(parent);
}

function goDown(node) {
    if (Array.from(node.children).length < 1) {
        return [node.tagName, []];
    } else {
        return [node, Array.from(node.children).map(child => goDown(child))];
    }
}