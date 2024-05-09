import {z} from "zod"

export const registerSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(5, "Must be a least 5 characters")
  })
  
export type TRegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, "password is to short")
  })
  
export type TLoginSchema = z.infer<typeof loginSchema>

export const addClientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  department: z.string(),
  commercial: z.string(),
  email: z.string(),
  cellphone: z.string(),
  comments: z.string(),
  company: z.string(),
  sector: z.string(),
  subsector: z.string(),
  address: z.string(),
  country: z.string(),
  city: z.string(),
  postalCode: z.string()
})

export type TaddClientSchema = z.infer<typeof addClientSchema>

export const addOfferSchema = z.object({
  title: z.string(),
  subsidary: z.string(),
  country: z.string(),
  company: z.string(),
  commercial: z.string(),
  sector: z.string(),
  subsector: z.string(),
  offer: z.string(),
  type: z.string(),
  amount: z.string(),
  city: z.string(),
  postalCode: z.string(),
  prospectiveDate: z.date(),
  probability: z.string(),
  comments: z.string(),
  responsable: z.string()
})

export type TaddOfferSchema = z.infer<typeof addOfferSchema>

export type Offer = {
  id: number;
  title: string;
  amount: string;
  sector: string;
  country: string;
  company: string;
  commercial: string;
};

export type Client = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  company: string;
  country: string;
  commercial: string;
};


