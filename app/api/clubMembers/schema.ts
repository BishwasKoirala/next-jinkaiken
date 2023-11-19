import {z} from 'zod';

const schema =  z.object({
  studentNum: z.number().
  name: z.string().min(3),
})

export default schema;