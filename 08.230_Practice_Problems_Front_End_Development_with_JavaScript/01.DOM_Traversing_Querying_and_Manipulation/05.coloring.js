function colorGeneration(level) {
    let currentChildren = [document.getElementById(1)];
    let levels = {};
    let lvl = 1;

    do {
        let subArr = [];
        currentChildren.forEach(node => {
            subArr.push(Array.from(node.children));
        });
        levels[lvl] = [currentChildren];
        lvl += 1;
        currentChildren = subArr.flat();
        
    } while(currentChildren.length > 0);

    let colorThese = levels[level];
    console.log(colorThese);

    colorThese.forEach(node => {
        node.forEach(innernode => {
            innernode.classList.add('generation-color');
        });
    });
}

