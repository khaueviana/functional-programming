//functional programming

//High-Order Functions

const animals = [
    { name: 'Batata', species: 'dogs' },
    { name: 'Tomate', species: 'dogs' },
    { name: 'Lilico', species: 'cats' }
]

const isDog = function (animal) {
    return animal.species === 'dogs';
}

//Using filter
const dogs = animals.filter(isDog);

console.log(dogs);

/*------------------------------------------*/

//Using Map

const names = animals.map((animal) => `${animal.name}  is a ${animal.species}`);

console.log(names);

/*----------------------------------------*/

//Using Reduce

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);

//Using Reduce Advanced

const data = [
    ['Nikita', 'waffle', '80', '1'],
    ['Nikita', 'knife', '160', '5'],
    ['James', 'waffle', '25', '7'],
    ['James', 'pot', '250', '13'],
]

const output = data.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
}, {})

console.log(JSON.stringify(output, null, 2));

/*-----------------------------------------------*/

//Clojures

function speak() {
    let words = 'hi';
    return function logIt() {
        console.log(words);
    }
}

const x = speak();
x();

/*----------------------------------------------*/

//Currying

let dragon = name => size => element => `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('X')('y')('z'));

/*---------------------------------------------*/

//Recursion

const categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
];

let makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id));
    return node;
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));

