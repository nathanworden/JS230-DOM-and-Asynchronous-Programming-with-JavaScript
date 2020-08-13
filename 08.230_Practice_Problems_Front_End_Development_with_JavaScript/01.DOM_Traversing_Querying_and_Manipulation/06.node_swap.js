function nodeSwap(id1, id2) {
    let first = document.getElementById(id1);
    let second = document.getElementById(id2);
    
    let firstClone = first.cloneNode(true);
    let parent = first.parentElement;

    parent.insertBefore(firstClone, second);
    parent.insertBefore(second, first);
    parent.removeChild(first);
}