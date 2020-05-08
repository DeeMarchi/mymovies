test = {
    printMe: value => {
        console.log('printing by test obj');
        console.log(`Your value is ${value}`);
    },
};

test['printMe']('nani??');
