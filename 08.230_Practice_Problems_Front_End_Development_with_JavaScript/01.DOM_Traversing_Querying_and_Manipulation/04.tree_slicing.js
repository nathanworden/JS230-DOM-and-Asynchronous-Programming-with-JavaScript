function sliceTree(start, end) {
    let endElement = document.getElementById(end)
    let startElement = document.getElementById(start);

    if (!startElement || !endElement) {return undefined}

    const slicedTree = [];
    let currentElement;

    do {
        currentElement = endElement;

        slicedTree.unshift(currentElement.tagName);
        endElement = endElement.parentNode;
    } while(currentElement.id !== String(start) && endElement.tagName !== 'BODY');

    return (endElement.tagName === 'BODY' && currentElement.id !== String(start) ? undefined : slicedTree);
}