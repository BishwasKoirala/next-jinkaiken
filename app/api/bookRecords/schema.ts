import {z} from 'zod';

const schema = z.object({
  schoolNum:z.number().min(9),
  name : z.string().min(2),
  book : z.string().min(3),
  renting : z.boolean()
})

export default schema

