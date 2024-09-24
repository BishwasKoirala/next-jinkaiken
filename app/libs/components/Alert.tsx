import React from 'react'
import { string } from 'zod'

interface Props {
  head? : string, 
  headcss? : string,
  msg : string,
  msgcss? : string
}

const Alert = ({msg,head,headcss,msgcss} : Props) => {
  return (
    <div className='alert m-2'>
      <p>
         <span className={'text-center ' + {headcss}}>{head}</span>
          <span className={msgcss}>{msg}</span> </p>
    </div>
  )
}

export default Alert