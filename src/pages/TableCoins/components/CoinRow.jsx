import React from 'react'

const CoinRow = (coin) => {
  console.log(coin.coin.symbol)
  return (
    <tr>      

      <td>
      <span>{coin.insdex}</span>
      </td>

      <td>
      <span>{coin.coin.symbol}</span>
      </td>

      <td>{coin.coin.lastPrice}</td>
      <td className={coin.coin.priceChangePercent > 0 ? 'text-success' : 'text-danger'
        }>
        {coin.coin.priceChangePercent}
      </td>
      <td>{coin.coin.priceChange}</td>
    </tr>
  )
}

export default CoinRow
