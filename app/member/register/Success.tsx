import React from 'react'

interface Props {
  submitData: {
    email: string,
    gakka: string,
    gakubu: string,
    name : string,
    phoneNum: string,
    password : string,
    studentId: string
  }
}

const Success = ({ submitData }: Props) => {
  return (
    <div className="container mx-auto p-4 text-black rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 alert">!!!登録完了!!!</h2>
      <div className="overflow-x-auto ">
        <table className="table w-full rounded-2xl-">
          <thead className=''>
            <tr className=' text-2xl  rounded-xl bg-slate-200'>
              <th className='text-black'>Field</th>
              <th className='text-black'>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">Student ID</td>
              <td>{submitData.studentId}</td>
            </tr>
            <tr>
              <td className="font-bold">Name</td>
              <td>{submitData.name}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>{submitData.email}</td>
            </tr>
            <tr>
              <td className="font-bold">Gakubu</td>
              <td>{submitData.gakubu}</td>
            </tr>
            <tr>
              <td className="font-bold">Gakka</td>
              <td>{submitData.gakka}</td>
            </tr>
            <tr>
              <td className="font-bold">Phone Number</td>
              <td>{submitData.phoneNum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Success
