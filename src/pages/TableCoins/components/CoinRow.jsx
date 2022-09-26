import React from "react";

const CoinRow = (coin) => {
  return (
    <tr>
      <td>
        <img
          src={`../../../../node_modules/cryptocurrency-icons/svg/color/${coin.coin.symbol.slice(0,-4)}.svg`}
          alt="exchange"
          border="0"
          width={20}
        />
      </td>

      <td>
        <span>{coin.coin.symbol.slice(0, -4)}</span>
      </td>

      <td>{Number((coin.coin.lastPrice)).toFixed(2)}$</td>
      <td
        className={
          coin.coin.priceChangePercent > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.coin.priceChangePercent}%
      </td>
      <td>{coin.coin.priceChange}</td>
    </tr>
  );
};

export default CoinRow;
