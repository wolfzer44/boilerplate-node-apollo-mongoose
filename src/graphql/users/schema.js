export default `

    type User {
        _id: String!
        name: String!
        lastName: String!
        phone_number: String!
        email: String!
        activePin: String!
        isActive: Boolean!
        conversations: [Conversation]
    }

`;