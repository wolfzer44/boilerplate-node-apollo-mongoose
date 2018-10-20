export default ` 

    type Post {
        _id: String!
        title: String!
        description: String!
        user_id: String!
        user: User
    }

    type Subscription {
        postAdded: Post
    }

`;