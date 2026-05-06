const getComparator = (order, orderBy) => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (a, b, orderBy) => {
    let valueA = a[orderBy];
    let valueB = b[orderBy];
    // dates (unix)
    if (orderBy === "startDate" || orderBy === "endDate") {
        valueA = valueA || 0;
        valueB = valueB || 0;
    }
    // strings
    if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
    }
    if (valueB < valueA) return -1;
    if (valueB > valueA) return 1;
    return 0;
};

export { getComparator }