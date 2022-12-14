import * as React from "react";

import "./LeftNavBar.css";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate}  from "react-router-dom";
import { Icon } from "@iconify/react";

import img1 from '../../assets/Mask-Group-Vision-logo.png';
import img2 from '../../assets/User.png';
import img3 from '../../assets//Vector.png';

export default function LeftNavBar() {
  const navigate = useNavigate();

  const onSuiteClick = () => {
    navigate("/suite");
  }

  const onTestCasesClick = () => {
    navigate("/testcases");
  }

  return (
    <Paper className="Paper">
      <MenuList>
        <MenuItem>
        <img className="Icon" src={img1} alt="" />
        </MenuItem>
        <MenuItem>
        <img className="Icon" src={img2} alt="" />
        </MenuItem>
        <Divider sx={{ background: '#863654' , width: 50, margin: 'auto'}}/>
        <Tooltip title="Test Development" key="Test">
          <MenuItem onClick={onTestCasesClick}>
          <Icon icon="system-uicons:create" className="Icon" />
          </MenuItem>
        </Tooltip>
        <Tooltip title="suite" key="suite">
          <MenuItem onClick={onSuiteClick}>
          <img className="Icon" src={img3} alt="" />
          </MenuItem>
        </Tooltip>
      </MenuList>
    </Paper>
  );
}
