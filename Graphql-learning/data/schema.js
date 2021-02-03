import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typedefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int   
        email: String
        contacts: [Contact]
        
    }
    type Contact{
        firstName: String
        lastName: String
    }

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    type Query{
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID,
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]
        
    }

    input ContactInput {
        firstName: String
        lastName: String
    }
    type Mutation{
        createFriend(input: FriendInput):Friend
    }

`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
/**
    type Email{
        email: String
    } */

/*
    
       type Stock{
        id: ID,
        price: Float,
        closingPrice: Float
        name:String
    }
    */

// import { buildSchema } from "graphql";

// // const schema = buildSchema(`
// //     type Friend {
// //         id: ID
// //         firstName: String
// //         lastName: String
// //         gender: Gender
// //         age: Int
// //         email: String
// //         contacts: [Contact]

// //     }
// //     type Contact{
// //         firstName: String
// //         lastName: String
// //     }

// //     enum Gender{
// //         MALE
// //         FEMALE
// //         OTHER
// //     }

// //     type Query{
// //         getFriend(id: ID): Friend
// //     }

// //     input FriendInput {
// //         id: ID,
// //         firstName: String
// //         lastName: String
// //         gender: Gender
// //         age: Int
// //         email: String
// //         contacts: [ContactInput]

// //     }

// //     input ContactInput {
// //         firstName: String
// //         lastName: String
// //     }
// //     type Mutation{
// //         createFriend(input: FriendInput):Friend
// //     }

// // `);
// // export default schema;
// // /**
// //     type Email{
// //         email: String
// //     } */

// //     /*

// //        type Stock{
// //         id: ID,
// //         price: Float,
// //         closingPrice: Float
// //         name:String
// //     }
// //     */
