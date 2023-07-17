
import { TUsers, TProducts } from "./types"
import  express, { Request, Response} from 'express'
import cors from 'cors';


export const users : TUsers [] = [
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@email.com",
        password: "fulano123",
        createdAt: new Date().toISOString()
    },
    {
        id: "u002",
        name: "Beltrana",
        email: "beltrana@email.com",
        password: "beltrana00",
        createdAt: new Date().toISOString()
    }
]

export const products: TProducts [] = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        image_url: "https://picsum.photos/seed/Mouse%20gamer/400"
    }, 
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        image_url: "https://picsum.photos/seed/Monitor/400"
    }
]

export function createAllUsers (id: string, name: string, email: string, password: string) {
    
    const newObj= {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    }
    users.push(newObj)
   
    return "Cadastro realizado com sucesso"
   
}

export function getAllUsers () {
    console.log(users)
    
}


export function createAllProducts (id: string, name: string, price: number,  description: string,
    image_url: string) {
    
    const newProd= {
        id: id,
        name: name,
        price: price,
        description: description,
        image_url: image_url
    }
    products.push(newProd)
   
    return "Produto criado com sucesso"
   
}

export function getAllProducts () {
    console.log(products)
    
}
export const searchProductsByName = (name: string) => { 
    return products.find(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }