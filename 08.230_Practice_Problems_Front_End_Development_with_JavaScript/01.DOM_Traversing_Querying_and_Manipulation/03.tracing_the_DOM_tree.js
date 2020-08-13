function domTreeTracer(id) {
    let currentElement = document.getElementById(id);
    let parentElement;
    const domTree = [];

    do {
        parentElement = currentElement.parentNode;
        let children = getTagNames(parentElement.children);
        domTree.push(children);

        currentElement = parentElement;
    } while (parentElement.tagName !== 'BODY');

    return domTree;
}

function getTagNames(htmlCollection) {
    const elementsArray = Array.prototype.slice.call(htmlCollection);
    return elementsArray.map(({tagName}) => tagName);
}