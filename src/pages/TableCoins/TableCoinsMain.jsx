
import { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from './components/TableCoins'


function TableCoinsMain() {

  const [ coins, setCoins ] = useState([])
  const [ search, setShearch ] = useState([])

  const getData = async () => {
    const res = await axios.get('http://localhost:8888/.netlify/functions/fn-tableCoin');
    console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
       <div className="row">
            <input type="text" placeholder='Search a Coin' className='form-control bg-dark text-light border-0 
            mt-4 text-center' onChange={e => setShearch(e.target.value)}/>

            <TableCoins coins={coins} search={search}/>
       </div>
    </div>
  );
}

export default TableCoinsMain;