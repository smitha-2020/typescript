import { List } from "./types/ecommerce";
import { User } from "./types/user";
import { Product } from "./types/product"
// interface userinfo{
//     "id": number,
//     "email": string,
//     "password": string,
//     "name": string,
//     "role": string,
//     "avatar": string

// }
// interface userErrorApi extends Error{
//     "statusCode": number,
//     "message":string,
//     "error": string
// }

// interface productsinfo
// {
//         "id": number,
//         "title":string ,
//         "price": number,
//         "description": string
// }
// interface productErrorApi{
//     "statusCode": number,
//     "message": string,
//     "error": string
// }



 
async function app() {
    const users = new List<User>()
    const products = new List<Product>

    await users.fetchAll("https://api.escuelajs.co/api/v1/users")
    await products.fetchAll("https://api.escuelajs.co/api/v1/products")
 
    

    
    // sortlist can have both asc or desc as an argument
    users.sortList("desc")//Expect to see users array in new order of id decreasing

  
    /** find user by email.
    * Take a parameter of type string.
    * Return a found user or null*/

    // :
    const newUser = users.flat();
    const newproduct =products.flat()
    const findUserByEmail = (email:string):User | null=> {
        let result = newUser.find(user => user['email'] === email);
        if (result === undefined) {
            return null;
        }
        return result;
    }
    const foundUser = findUserByEmail("john@mail.com")
    //console.log(foundUser) //expect to see user with email "john@mail.com" in the console

    /** Find all products with titles matched the search, case insentitive. 
    * Take a parameter of type string.
    * Return an array
    */

    const findProductsByText = (search:string) => {
        return newproduct.filter((products:Product) => {return products.title.toLowerCase().includes(search.toLowerCase()) })
    }
    const foundProducts = findProductsByText("Ergonomic Frozen Shoes")
    console.log(foundProducts) //expect to see an array of all found products

    const testPush1 = users.push(
        {
            id: 1,
            email: "william@gmail.com",
            password: "william",
            name: "William",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        },
        {
            id: 90,
            email: "henry@gmail.com",
            password: "henry",
            name: "Henry",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        }
    )

    const testPush2 = users.push(
        {
            id: 90,
            email: "william@gmail.com",
            password: "william",
            name: "William",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        },
        {
            id: 100,
            email: "henry@gmail.com",
            password: "henry",
            name: "Henry",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        }
    )

    // console.log(testPush1) // expect to see 0
    // console.log(testPush2) // expect to see 1

   // console.log(users) // expect too see 2 more users added in the end of array*/
    }; 
    app();