import { cryptPassword, comparePassword } from "../helpers/crypt.js"
import { PrismaClient } from "@prisma/client"
import { createToken } from "../helpers/jwt.js"

const prisma = new PrismaClient()

const AuthController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await prisma.users.findUnique({
                where: { email: email },
                select: { id: true, email: true, password: true }
            })
            if(!user) return res.status(400).send("user not exists")
            const isMatch = comparePassword(password, user.password)
            if (!isMatch) return res.status(400).send("invalid password")
            
            const token = createToken({ userId: user.id });
            const data = {
                token,
                user
            }
            res.status(200).json({message: 'User logged in successfully', data })
           
       }catch (error) {
           console.error(error)
       }
    },

    getUsers: async (req, res) => {
        try {
            const users = await prisma.users.findMany();
            res.json(users);
        }catch(error) {
            console.error(error);
        }
    },
    
    register: async (req, res) => {
        try {
            const user = await prisma.users.findUnique({ where: { email: req.body.email }})
            if (user) return res.status(400).send("user already exists")

            const { first_name,last_name, email, password, type_of_rol} = req.body;
            const newUser = await prisma.users.create({
                data: {
                    first_name,
                    last_name,
                    email,
                    password: cryptPassword(password),
                    type_of_rol: type_of_rol || false,
                }
            });

            if (newUser) {
                res.status(201).json({ message: 'User created successfully', newUser })
            }
        } catch (error) {
            console.error("Error registering:", error);
            res.status(500).json({ message: 'Error registering', error })
        }
    }
}

export default AuthController