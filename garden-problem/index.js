const HEDGE = 1;
const EMPTY = 0;

exports.grow =  function grow(years, garden) {
    const grownGarden = JSON.parse(JSON.stringify(garden));

    if (years < 1) { return grownGarden; }

    const modified = {};

    let width = garden[0].length;
    let maxIndex = garden.length * width;
    for (let i = 0; i < maxIndex; i++) {
        let row = Math.floor(i / width);
        let col = i % width;

        if (modified[`${row}${col}`]) { continue; }
        if (grownGarden[row][col] === EMPTY) { continue; }

        if (hedgeDies(grownGarden, row, col, modified)) {
            grownGarden[row][col] = EMPTY;
            modified[`${row}${col}`] = true;
        } else {
            growHedgeFrom(grownGarden, row, col, modified);
        }
    }

    return grow(years - 1, grownGarden);
}

// Utility methods

function hedgeDies(garden, row, col, modified) {
    let borderPositions = generateBorderPositions(row, col);

    if (isOnEdge(garden, [row, col])) { return false; }

    for (let i = 0; i < borderPositions.length; i++) {
        let [y, x] = borderPositions[i];
        if (garden[y][x] === HEDGE && !modified[`${y}${x}`]) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function growHedgeFrom(garden, row, col, modified) {
    let borderPositions = generateBorderPositions(row, col);

    for (let i = 0; i < borderPositions.length; i++) {
        const position = borderPositions[i];

        if (isOutOfBounds(garden, position)) { continue; }

        const [y, x] = position;

        if (modified[`${y}${x}`] || garden[y][x] === HEDGE) { continue; }

        garden[y][x] = HEDGE;
        modified[`${y}${x}`] = true;
    }
}

function generateBorderPositions(row, col) {
    return [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row, col - 1],
        [row, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
    ];
}

function isOutOfBounds(matrix, point) {
    let [y, x] = point;

    if (y < 0 || x < 0 || y >= matrix.length || x >= matrix[y].length) {
        return true;
    }

    return false;
}

function isOnEdge(matrix, point) {
    let [y, x] = point;

    if (y === 0 || x === 0 || y === (matrix.length - 1) || x === (matrix[y].length - 1)) {
        return true;
    }

    return false;
}
