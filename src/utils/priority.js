const PRIORITIES = {
    0: 'P0',
    1: 'P1',
    2: 'P2'
}

const getRandomNumber = (number = 3) => {
    return Math.floor(Math.random() * number);
}

const getRandomPriority = () => {
    const randomNumber = getRandomNumber();
    return PRIORITIES[randomNumber];
}

export { getRandomPriority };