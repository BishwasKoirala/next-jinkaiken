import { z } from "zod";


const putSchema = z.object({
  // my universtity's schoolnum wiill be in between
  // id: z.number(),
  // .refine(num => num >= 200000000 && num <= 209999999,),
  // name: z.string(),
  // jindaiMail : z.string(),
  schoolYear: z.number().min(1).max(4),
  role : z.string()
})

export default putSchema;