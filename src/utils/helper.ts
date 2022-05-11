import { alphabets } from "./data";

export const getMatrix = () => {
    var grid: string[][] = [];

    var iMax = 27;
    var jMax = 27;
    var count = 1;
    var xd = 0
    for (let i = 0; i < iMax; i++) {
        grid[i] = [];

        for (let j = 0; j < jMax; j++) {
            let index = count + xd - 1

            if (index >= 27)
                index = index - 27
            grid[i][j] = alphabets[index];
            count++;

        }
        xd++

        count = 1
    }
    return grid
}

export const cifrar = (text_claro: string, clave: string) => {
    const grid: string[][] = getMatrix()
    const text = text_claro.toLowerCase().split("");
    const key = clave.toLowerCase().split("");
    let count = 0

    let arrayTwo: string[] = [];

    let result: string[] = [];



    for (let j = 0; j < text.length; j++) {
        arrayTwo.push(key[count])
        count++
        console.log(j);

        if (count == key.length) {
            count = 0
        }
    }

    for (let j = 0; j < text.length; j++) {
        let indexOne = (element: string) => element == text[j];
        let indexTwo = (element: string) => element == key[j];
        let One = alphabets.findIndex(indexOne)
        let Two = alphabets.findIndex(indexTwo)
        console.log(One, Two);
        result.push(grid[One][Two])
    }
    console.log(result);


}