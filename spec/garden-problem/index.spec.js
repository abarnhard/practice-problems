const grow = require('../../garden-problem/index.js').grow;

describe("garden.grow", function () {
    it("should not grow anything for 0 years", function () {
        let garden = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = grow(0, garden);

        expect(result).toEqual(
            [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        );
    });

    it("should grow for 1 years", function () {
        let garden = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = grow(1, garden);

        expect(result).toEqual(
            [
                [1, 1, 0],
                [1, 1, 0],
                [0, 0, 0]
            ]
        );
    });

    it("should grow to full after 2 years", function () {
        let garden = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = grow(2, garden);

        expect(result).toEqual(
            [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ]
        );
    });

    it("should kill center hedge after 3 years", function () {
        let garden = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = grow(3, garden);

        expect(result).toEqual(
            [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ]
        );
    });

    it("should regrow center hedge after 4 years", function () {
        let garden = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = grow(4, garden);

        expect(result).toEqual(
            [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ]
        );
    });
});


function printGarden(garden) {
    const display = garden.reduce((acc, row) => {
        acc += row.join('', '');
        acc += '\n';
        return acc;
    }, '');

    console.log(display);
}
