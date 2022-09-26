import { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from './components/TableCoins'
import { endpoint } from '../../instances/instances'



function TableCoinsMain() {

  const [ coins, setCoins ] = useState([])
  const [ search, setShearch ] = useState([])

  const getData = async () => {
    const res = await axios.get('https://comforting-bunny-ac7ccc.netlify.app/fn-tableCoin');
    setCoins(res.data)
  }

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getData();
  }, [seconds])

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