import mongoose from 'mongoose';

const Conversations = mongoose.model('Conversations',{
    owner_id: String,
    invited_id: String,
})

export default Conversations;