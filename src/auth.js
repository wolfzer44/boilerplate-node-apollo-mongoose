import jwt from 'jsonwebtoken';
import  { User } from './models';

export default async ({ body }, res) => {

    try {
        const master_key = await cryptome.cryptoText(body.master_key, process.env.KEY);
        console.log(master_key);
        const user = await User.find(
            {
                $and:[
                    {email: body.email},{ master_key: master_key }
                ]
            });

        if(!user.length > 0) {
            return res.sendStatus(401)
        } 

        const { _id, name, lastName, email } = user;
        const token = await jwt.sign({ data: {_id, name, lastName, email} }, process.env.KEY, { expiresIn: "1h" }) 
        return res.json({token}) ;

    } catch(err) {
        return res.sendStatus(401)
    }
};