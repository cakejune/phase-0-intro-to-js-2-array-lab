const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const cats2 = [...cats.slice(0,3), name];
    return cats2;
}

function prependCat(name) {
    const cats2 = [name, ...cats.slice(0,3)];
    return cats2;
}

function removeLastCat() {
    const cats2 = cats.slice(0,2);
    return cats2;
}

function removeFirstCat() {
    const cats2 = cats.slice(1);
    return cats2;
}
    