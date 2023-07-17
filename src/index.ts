import { users, products, createAllUsers, getAllUsers, getAllProducts, createAllProducts, searchProductsByName} from "./database";
import express, { Request, Response} from 'express';
import cors from 'cors';
import { TUsers, TProducts } from "./types"


createAllUsers("u003", "Astrodev", "astrodev@email.com", "astrodev99")
getAllUsers()
createAllProducts("prod003", "Astro", 200, "astrodev99", "https://picsum.photos/seed/Monitor/400")
getAllProducts()
console.table(searchProductsByName("gamer"));

const app = express();

app.use(express.json());

app.use(cors());


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!");
  });
 
 
app.get("/users", (req: Request, res: Response)=>{
    res.status(200).send(users)
  })

app.get("/products",(req: Request, res: Response)=>{
    res.status(200).send(products)
} )

app.get("/products",(req: Request, res: Response)=>{

    const nameToFind = req.query.name as string

    if (nameToFind) {
        const result: TProducts[] = products.filter(
          (product) => product.name.toLowerCase().includes(nameToFind.toLowerCase())
        )
      
        res.status(200).send(result)
      } else {
        res.status(200).send(products)
      }

    res.status(200).send(products)
} )

app.post("/users", (req: Request, res: Response)=>{
    const{ id, name, email, password, createdAt}=req.body
    const newUser:TUsers=
    {
        
        id,
        name,
        email,
        password,
        createdAt
    }
    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso")
   
    
})

app.post("/products", (req: Request, res: Response)=>{
    const{id, name, price, description, image_url}=req.body
    const newProducts:TProducts=
    {
        id,
        name,
        price,
        description,
        image_url

    }
    products.push(newProducts)
    res.status(201).send("Produto cadastrado com sucesso")
})


app.delete('/users/:id', (req: Request, res: Response) => {
  
  const idToDelete = req.params.id

  
  const usersIndex = users.findIndex((user) => user.id === idToDelete)

 
  if (usersIndex >= 0) {
     
      users.splice(usersIndex, 1)
  }

  res.status(200).send("User apagado com sucesso")
})

app.delete('/products/:id', (req: Request, res: Response) => {
  
  const idToDelete = req.params.id

  
  const productsIndex = products.findIndex((product) => product.id === idToDelete)

 
  if (productsIndex >= 0) {
     
     products.splice(productsIndex, 1)
  }

  res.status(200).send("User apagado com sucesso")
})

app.put('/products/:id', (req: Request, res: Response) => {
 
  const idToEdit = req.params.id

  const newId = req.body.id as string | undefined        
  const newName = req.body.name as string | undefined    
  const newPrice = req.body.price as number | undefined       
  const newDescription = req.body.description as string | undefined  
  const newImageUrl = req.body.image_url as string | undefined  

  const newProduct = products.find((product) => product.id === idToEdit)

  res.status(200).send("Produto atualizado com sucesso")
})