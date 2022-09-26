import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
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
  Box,
  Img,
  Text,
  Badge 
} from "@chakra-ui/react";

//instancias de endpoint
import { API, endpoint } from "../../../../instances/instances.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const DonaChart = ({ user }) => {
  let [history, setHistory] = useState([]);
  let [criptos, setCriptos] = useState([]);
  let [deposit, setDeposit] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await API.get(
          endpoint.DATA_USER + `?user=${user.email}`
        );
        setHistory(response.data[0].pay);
        setCriptos(response.data[0].wallet);
        setDeposit(response.data[0].deposit);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  var data = {
    labels: criptos?.map((x) => x.coin),
    datasets: [
      {
        label: `${3} Criptos en wallet`,
        data: criptos?.map((x) => x.free),
        backgroundColor: [
          "#2E0249",
          "#570A57",
          "#F806CC",
          "red",
          "blue",
          "green",
        ],
        borderColor: ["white"],
        borderWidth: 1.5,
      },
    ],
  };

  const config = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    },
  };
  return (
    <div>
      <Box w={"250px"}>
        <Doughnut data={data} config={config} />
      </Box>

      <TableContainer>
        <Table variant="simple" size='sm'>
          <Thead>
            <Tr>
              <Th>Cripto</Th>
              <Th>Cantidad</Th>
            </Tr>
          </Thead>
          <Tbody>
            {criptos?.map((x, k) => {
              if (x.free > 0) {
                return (
                  <Tr key={k}>
                    <Td>
                      {" "}
                      <img
                        src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                        alt="exchange"
                        border="0"
                        width={20}
                      />
                      {x.coin}
                    </Td>
                    <Td>{x.free}</Td>
                  </Tr>
                );
              }
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <TableContainer>
        <Table variant="simple" size='sm'>
          <Thead>
            <Text>Historial</Text>
            <Tr>
              <Th>transaccion</Th>
              <Th>Cantidad</Th>
              <Th>User</Th>
              <Th>fecha</Th>
              <Th>Codigo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {history?.map((x, k) => {
              return (
                <Tr key={k}>
                  <Td>
                    {" "}
                    <img
                      src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                      alt="exchange"
                      border="0"
                      width={20}
                    />
                    {x.coin}
                     
                    {x.type == "get" ?  <Badge colorScheme="green">Recibido</Badge> :
                      <Badge colorScheme="red">Enviado</Badge> }
                  </Td>
                  <Td>{x.amount}</Td>
                  <Td>{x.to}</Td>
                  <Td>{x.date}</Td>
                  <Td>{x.txId}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>


      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Text>Depositos realizados</Text>
            <Tr>
              <Th>transaccion</Th>
              <Th>Cantidad</Th>
              <Th>Hash</Th>
              <Th>fecha</Th>
            </Tr>
          </Thead>
          <Tbody>
            {deposit?.map((x, k) => {
              return (
                <Tr key={k}>
                  <Td>
                  <Badge colorScheme="green">
                    {" "}
                    <img
                      src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                      alt="exchange"
                      border="0"
                      width={20}
                    />
                    {x.coin}
                    </Badge>
                    
                  </Td>
                  <Td>{x.amount}</Td>
                  <Td>{x.hash}</Td>
                  <Td>{x.date}</Td>
                
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DonaChart;
