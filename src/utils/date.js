// Seconds in a day
const DAY = 24 * 60 * 60;

// Random Unix timestamp within the last N days default 90 days
const getRandomUnixStartDate = (days = 90) => {
    const now = Math.floor(Date.now() / 1000);
    const past = now - days * DAY;
    return Math.floor(past + Math.random() * (now - past));
};

// Random Unix end date after start date
const getRandomUnixEndDateAfter = (startUnix, maxDays = 30) => {
    const minEnd = startUnix + DAY;
    const maxEnd = startUnix + maxDays * DAY;
    return Math.floor(minEnd + Math.random() * (maxEnd - minEnd));
};

// convert unix to date in dd-mmm-yyyy
const unixToDate = (unixSeconds) => {
    if (!unixSeconds) return "";
    return new Date(unixSeconds * 1000).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export { getRandomUnixStartDate, getRandomUnixEndDateAfter, unixToDate };