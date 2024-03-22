import React, { FormEvent, useState } from "react";
import { z } from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title : z.string(),
  authors : z.string()
})

type FormData = z.infer<typeof schema>
const ManualBookForm = () => {
  const [submitResponse , setSubmitResponse] = useState<FormData>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  
  
  const onSubmit : SubmitHandler<FormData> = async (data) => {
    if (data.authors!== '' && data.title!==""){
      const response = await fetch("/api/v2/books/register/manual",{
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const resData = await response.json()
      if (response.ok){
        console.log('success',resData)
        setSubmitResponse(resData)
        reset()
      } else {
        console.log('failed')
        setSubmitResponse({authors : '!!!error!!!' , title : '!!!error!!!'})
      }

      
    } else{
      setSubmitResponse({authors : "error" , title : "error"})
    }

  }

  return (
    <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
      <br /><br />
      <div className="  text-center w-full max-w-xs">本を手動で登録する場合 ↓ </div>
      { submitResponse && 
      <div>
        <br />
        <p className="text-green-600">登録結果</p>
        <p className="bg-gray-200 alert text-black">title : {submitResponse.title}</p>
        <p className="bg-gray-200 alert text-black">authors : {submitResponse.authors}</p>
        
      </div>
      }
      <label htmlFor="title">
        Title
      </label>
      <br />
      <input
        {...register("title")}
        className="input input-bordered w-full max-w-xs"
        type="text"
      />
      <br />
      <label htmlFor="author">Author</label>
      <br />
      <input
        {...register("authors")}
        className="input input-bordered w-full max-w-xs"
        type="text"
      />
      <br />
      <button className="m-3 btn btn-primary">Submit</button>
    </form>
  );
};

export default ManualBookForm;
