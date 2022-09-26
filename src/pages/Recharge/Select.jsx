import React from "react";
import  Select  from "react-select";
//import { Select } from "@chakra-ui/react";

const SelectGroup = (props) => {
    const criptos = ['USDT', 'DASH', 'XLM', 'BTC', 'XRP', 'LTC', 'BNB', 'ETH',]
  const options = criptos.map((item, )=>{
    return {
        value: item, 
        label: <div><img src={`../../../../node_modules/cryptocurrency-icons/svg/color/${item}.svg`} height="30px" width="30px"/>{item} </div>
    }
  })
  return (
    <>
      <Select options={options} onChange={props.fn}/>
        
    </>
  );
};
export default SelectGroup;
