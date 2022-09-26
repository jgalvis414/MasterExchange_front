import React from "react";
import CoinRow from "./CoinRow"

const titulos = ['#', 'Coin','Price', 'Price Change', '24 Volume'];

const TableCoins = ({coins, search}) => {
    
    const filteredCoins = coins.filter((coin) =>
    coin.symbol.toString().toLowerCase().includes(search.toString().toLowerCase())
    )



    return (
        <table className="table table-dark mt-4 table-hover">
        <thead>
            <tr>
                {
                    titulos.map((titulo)=>(

                        <td  key={titulo}>{titulo}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index}  />
                ))}
        </tbody>
        </table>
    )
}

export default TableCoins