function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if(rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a, b) {
    try {
        let result = primitiveMultiply(a,b);
        return result;
    } catch (error) {
        if (error.__proto__.constructor === NotificationException) {
            reliableMultiply(a,b);
        } 
    }
}

console.log(reliableMultiply(8, 8));