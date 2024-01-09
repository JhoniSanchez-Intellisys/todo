
export interface IProductos {
    nombre: string,
    precio: number
}

export interface IPost {
    id: `${string}-${string}-${string}-${string}-${string}`,
    title: string,
    body: string,
    userId: number
}

export interface IPrueba {
    name: string, 
    productos?:IProductos[]
}
