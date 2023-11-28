import nextAuth from "next-auth";

const handler =  nextAuth({
  providers : [
    
  ]
});

export { handler as GET , handler as POST}