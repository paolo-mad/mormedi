// import axios from "axios"
// import { loginSchema } from "../lib/types"

// const POST =  async (request: Request)=> {
//     const response = await axios.post()
//     return
// } 

// export async function POST(request: Request) {
//   const body: unknown = await request.json();

//   const result = signUpSchema.safeParse(body);

//   // check out Zod's .flatten() method for an easier way to process errors
//   let zodErrors = {};
//   if (!result.success) {
//     result.error.issues.forEach((issue) => {
//       zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
//     });
//   }

//   return NextResponse.json(
//     Object.keys(zodErrors).length > 0
//       ? { errors: zodErrors }
//       : { success: true }
//   );
// }
