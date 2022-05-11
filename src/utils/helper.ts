import { alphabets27,alphabets26 } from "./data";

export const getMatrix27 = () => {
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
            grid[i][j] = alphabets27[index];
            count++;
        }
        xd++

        count = 1
    }
    return grid
}
export const getMatrix26 = () => {
    var grid: string[][] = [];

    var iMax = 26;
    var jMax = 26;
    var count = 1;
    var xd = 0
    for (let i = 0; i < iMax; i++) {
        grid[i] = [];
        for (let j = 0; j < jMax; j++) {
            let index = count + xd - 1
            if (index >= 26)
                index = index - 26
            grid[i][j] = alphabets26[index];
            count++;
        }
        xd++

        count = 1
    }
    return grid
}

export const cifrar = (text_claro: string, clave: string,grid: string[][],alphabet:string[]) => {
    const text = text_claro.toLowerCase().split("");
    const key = clave.toLowerCase().split("");
    let count = 0

    let arrayTwo: string[] = [];

    let result: string[] = [];

    for (let j = 0; j < text.length; j++) {
        arrayTwo.push(key[count])
        count++
        if (count == key.length) {
            count = 0
        }
    }
    console.log(arrayTwo);
    
    for (let j = 0; j < arrayTwo.length; j++) {
        let indexOne = (element: string) => element == text[j];
        let indexTwo = (element: string) => element == arrayTwo[j];
        let One = alphabet.findIndex(indexOne)
        let Two = alphabet.findIndex(indexTwo)
        result.push(grid[One][Two])
    }
    
    return result.join('')

}