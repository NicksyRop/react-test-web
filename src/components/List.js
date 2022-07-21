import React, { useEffect, useState } from "react";

const List = ({ getList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getList);
    console.log("updating items");
  }, [getList]);

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default List;
