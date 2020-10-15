import React from "react";
import {  ListItem } from "@react-md/list";
  const List = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
          />
        ))}
      </ul>
    );
  };

export default List;
