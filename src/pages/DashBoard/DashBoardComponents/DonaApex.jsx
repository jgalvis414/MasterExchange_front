import React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
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
  Badge,
} from "@chakra-ui/react";

//instancias de endpoint
import { API, endpoint } from "../../../instances/instances.js";

const DonaChartApex = ({ user }) => {
  let [history, setHistory] = useState([]);
  let [criptos, setCriptos] = useState([]);
  let [deposit, setDeposit] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await API.get(
          endpoint.DATA_USER + `${user.email}`
        );
        setHistory(response.data[0].pay);
        setCriptos(response.data[0].wallet);
        setDeposit(response.data[0].deposit);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  let series = [
    {
      data: criptos?.map((item, key) => {
        return {
          x: item.coin,
          y: item.free,
        };
      }),
    },
  ];
  let options = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    title: {
      text: "Distibuted Treemap (different color for each cell)",
      align: "center",
    },
    colors: ["#3B93A5", "#F7B844", "#ADD8C7", "#EC3C65"],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };
  let seriesDona =  criptos?.map((x) => x.free);
  let optionsDona = {
    labels: criptos?.map((x) => x.coin),
    responsive: [
      {
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <Box>
        <Chart options={options} series={series} type="treemap" width={500} />
      </Box>
      <Box>
        <Chart options={optionsDona} series={seriesDona} type="pie" width={500} />
      </Box>

      <TableContainer>
        <Table variant="simple" size="sm">
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
        <Table variant="simple" size="sm">
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
                    {x.type == "get" ? (
                      <Badge colorScheme="green">Recibido</Badge>
                    ) : (
                      <Badge colorScheme="red">Enviado</Badge>
                    )}
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
                    {" "}
                    <img
                      src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                      alt="exchange"
                      border="0"
                      width={20}
                    />
                    {x.coin}
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
export default DonaChartApex;
