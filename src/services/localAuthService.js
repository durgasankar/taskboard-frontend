// src/services/localAuthService.js

const USERS_KEY = "users";
const TOKEN_KEY = "token";

const getUsersFromStorage = () => {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

const saveUsersToStorage = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const generateToken = (email) => {
    return btoa(`${email}-${Date.now()}`);
};

export const registerUser = async (payload) => {
    const users = getUsersFromStorage();
    const userExists = users.some(user => user.email === payload.email);
    if (userExists) {
        throw new Error("User already registered");
    }
    users.push(payload);
    saveUsersToStorage(users);
    return {
        success: true,
        message: "Registration successful. Please login."
    };
};

export const loginUser = async ({ email, password }) => {
    const users = getUsersFromStorage();
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const token = generateToken(email);
    localStorage.setItem(TOKEN_KEY, token);
    return {
        success: true,
        message: "Login successful",
        token,
        data: { firstName: user.firstName, lastName: user.lastName }
    };
};
export const logoutUser = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};