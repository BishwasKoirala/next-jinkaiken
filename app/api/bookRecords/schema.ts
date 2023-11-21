import {optional, z} from 'zod';

const schema = z.object({
  bookName : z.string(),
  memberId : z.number(),
  rentStatus : z.enum(['RENT','return'])
  
})

export default schema

