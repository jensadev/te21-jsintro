for (let i = 0; i < 10; i++) {
    // console.log(i)
}

let names = ['Jens', 'Maja', 'Hanna', 'Björn']

for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

names.forEach((name, index) => {
    console.log(name, index);
});

for (let i = 0; i < 10; i++) {
    const roll = Math.ceil(Math.random() * 6);
    console.log(roll)
}

// skapa en array, där alla tärningsslag sparas
// skriv ut hela arrayen array.push(värde)