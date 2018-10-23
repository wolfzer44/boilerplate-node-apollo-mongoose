export default ` 

    type Conversation {
        _id: String!
        owner_id: String!
        invited_id: String!
        users: User
        messages: [Message]
    }

`;