function sayHello(name){
    console.log('Hi ' + name);
};

function sayGoodBy(name){
    console.log('Good bye ' + name);
};

function executor(callback, name) {
    callback(name);
};

executor(sayHello,'Luis Felipe');
executor(sayGoodBy, 'Luis Felipe');