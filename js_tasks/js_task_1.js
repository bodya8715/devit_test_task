function nodeChildCount(node, deep = Infinity) {
    let count = 0;

    function recNode(node, currentLevel = 1) {
        for(node of node.children) {
            ++count;
            if(currentLevel < deep) {
                recNode(node, currentLevel + 1);
            }
        }
    }

    recNode(node);

    return count;
}

let span = document.createElement('span');
let span1 = document.createElement('span');
let p = document.createElement('p');
let p1 = document.createElement('p');
let div = document.createElement('div');

p.append(span);
p1.append(span1);

div.append(p);
div.append(p1);

console.log(nodeChildCount(div, 2));