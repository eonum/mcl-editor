// Typescript interfaces, avoid using any.
export interface IExampleInterface {
    attribute1: string,
    attribute2: number,
    attribute3: string[],
    attribute4: {[index: string]: string[] | number[]}
    attribute5?: boolean
}
