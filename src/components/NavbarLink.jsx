import { useState } from "react";

import { styled } from "styled-components";

import { List, ListItem, ListItemText, Collapse } from '@mui/material';

import ArrowDown from "./ArrowDown";
import ArrowRight from "./ArrowRight";

const ListItemCustom = styled(ListItem)`
  height: 30px;
  position: relative;
`

const ListItemTextCustom = styled(ListItemText)`
  span {
    font-size: 15px !important;
  }
`

const Link = styled.a`
  color: #000;
  text-decoration: none;
`

const Icon = styled.img`
  width: 22px;
  margin-right: 10px;
`

const Border = styled.div`
  height: 30px;
  width: 2px;
  background-color: #EDF2F7;
  position: absolute;
  left: -18px;
`

const NestedLinks = ({ links, level = 0 }) => {
  const [nestedOpen, setNestedOpen] = useState({});

  const handleClick = (index) => {
    setNestedOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderLinks = (linkArr, parentIndex = null, currentLevel = 0) => {
    return linkArr.map((link, index) => {
      const linkIndex = parentIndex !== null ? `${parentIndex}-${index}` : `${index}`;
      const isOpen = nestedOpen[linkIndex];
      const nestedStyle = { marginLeft: `${currentLevel * 22}px` }; // Espacio entre lista

      if (link.nestedLinks) {
        return (
          <div key={index}>
            <ListItemCustom alignItems="center" onClick={() => handleClick(linkIndex)} disablePadding={true}>
              {
                link.img ?
                <Icon src={link.img} alt="icono" /> :
                <Border style={nestedStyle}></Border>
              }
              <ListItemTextCustom style={nestedStyle} primary={link.label} />
              {isOpen ? <ArrowDown /> : <ArrowRight />}
            </ListItemCustom>
            <Collapse in={isOpen}>
              <List component="div">
                {renderLinks(link.nestedLinks, linkIndex, currentLevel + 1)}
              </List>
            </Collapse>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <ListItemCustom disablePadding={true}>
              {
                link.img ?
                <Icon src={link.img} alt="icono" /> :
                <Border style={nestedStyle}></Border>
              }
              <Link href="/">
                <ListItemTextCustom style={nestedStyle} primary={link.label} />
              </Link>
            </ListItemCustom>
          </div>
        );
      }
    });
  };

  return <List component="nav" style={{ padding: "20px" }}>{renderLinks(links, null, level)}</List>;
};

export default NestedLinks;