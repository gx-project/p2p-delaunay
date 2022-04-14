export function reversePositionsKeyValue(input) {
    const result = new Map();
    for (const [id, coord] of input) {
        result.set(coord, id);
    }
    return result;
}
//# sourceMappingURL=utils.js.map