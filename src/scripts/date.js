export function DateDifference({ date, type }) {
    const currentDate = new Date();
    let dateToDiffer = new Date(date);

    // Verify date argument
    if (isNaN(dateToDiffer.getTime())) {
        console.error("Error: Invalid date argument");
        return null;
    }

    // Difference between current date and date argument
    const differInMilliseconds = currentDate.getTime() - dateToDiffer.getTime();

    // List for what to differ
    const typeList = {
        year: currentDate.getFullYear() - dateToDiffer.getFullYear(),
        month: (currentDate.getFullYear() - dateToDiffer.getFullYear()) * 12 + (currentDate.getMonth() - dateToDiffer.getMonth()),
        day: Math.floor(differInMilliseconds / (1000 * 60 * 60 * 24)),
        hour: Math.floor(differInMilliseconds / (1000 * 60 * 60)),
        minute: Math.floor(differInMilliseconds / (1000 * 60))
    }

    // Validate type argument
    if (!Object.hasOwn(typeList, type)) {
        console.error('Error: Invalid type argument')
        return null;
    }

    return typeList[type];
};

export function CurrentDateToday() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

export function CurrentTimeToday() {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(now);

    return formattedTime;
}