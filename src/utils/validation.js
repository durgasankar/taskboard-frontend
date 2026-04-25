const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const hasPasswordMatched = (password, confirm) => {
    return password && confirm && password === confirm;
}

export { isValidEmail, hasPasswordMatched };