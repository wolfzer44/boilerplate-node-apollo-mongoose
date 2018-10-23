import mongoose from 'mongoose';

// MODELS 
const Users = mongoose.model('Users',{
    name: String,
    lastName: String,
    phone_number: Number,
    email: String,
    activePin: Number,
    isActive: Boolean,
})

export default Users;