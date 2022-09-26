import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function TableTest() {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://comforting-bunny-ac7ccc.netlify.app/fn-tableCoin"
    );
    setCoins(res.data);
    console.log(coins);
  };

  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getData();
  }, [seconds]);

  return (
    <div>
      <TableContainer>
        <Table size="sm" >
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th>Price</Th>
              <Th>24h % </Th>
              <Th>Volumen 24h</Th>
            </Tr>
          </Thead>
          <Tbody>
            {coins?.map((item, k) => {
              return (
                <Tr key={k}>
                  <Td>
                    <img
                      src={`../../node_modules/cryptocurrency-icons/svg/color/${item.symbol.slice(0, -4)}.svg`}
                      alt="exchange"
                      border="0"
                      width={20}
                    />
                    {item.symbol.slice(0, -4)}
                  </Td>
                  <Td>{Number(item.lastPrice).toFixed(2)}</Td>
                  {item.priceChangePercent > 0 ? (
                    <Td textColor="green"> {item.priceChangePercent}</Td>
                  ) : (
                    <Td textColor="red"> {item.priceChangePercent}</Td>
                  )}

                  <Td>{Number(item.volume).toFixed(2)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableTest;
