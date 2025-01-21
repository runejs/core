export const fixedFloor = (i: number, fractionDigits = 0): number => {
    if (Number.isNaN(i) || i < 0) {
        return 0;
    }

    if (fractionDigits === 0) {
        return Math.floor(i);
    }

    return Number(i.toFixed(fractionDigits));
};
