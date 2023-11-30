import React from 'react'


const RentReturnForm = () => {
  return (
    <>
    <div className='p-4 text-xl' >
        <p>
          本の貸し借り登録の機能はまだ開発中です
        </p>
    </div>

    <div>
      <form action="post" method="post">
        <label htmlFor="bookName">本のタイトル</label>
          <br/>
          <input type="bookName" name="bookName" id="bookName" />
        <br/><br />
        <label htmlFor="rent?return?">拝借？返却？</label>
          <br />
          <select name="rent?return?" id="rent?return?"></select>
      </form>
    </div>
    </>

    
  )
}

export default RentReturnForm