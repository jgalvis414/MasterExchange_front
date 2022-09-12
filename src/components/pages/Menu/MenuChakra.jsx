//chakra ui
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  Center,
  Square,
  Circle,
} from "@chakra-ui/react";
//react router dom
import { Routes, Link, Route } from "react-router-dom";
//components
import ProfileCopy from "../Profile/ProfileCopy";
import Users from "../Users/Users";
import Home from "../Home/Home";

const MenuChakra = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/"> Home </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/addUser"> Add User </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/users"> User</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/DeleteUser"> DeleteUser</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<ProfileCopy />} />
        <Route path="/users" element={<Users />} />
        <Route path="/deleteUser" element={<Users />} />
      </Routes>
    </>
  );
};

export default MenuChakra;
