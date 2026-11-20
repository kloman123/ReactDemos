import React, { useState } from "react";

function Listchk()
{
     const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  console.log("SELECTED",selectedItems)

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

 const handleCheckboxChange = (id) => {
    console.log("ID",id)
    setSelectedItems((selectedItems) =>
      selectedItems.includes(id)
        ? selectedItems.filter((itemId) => itemId !== id)
        : [...selectedItems, id]
    );
  };
    const isAllSelected = selectedItems.length === items.length;
console.log("isAllSelected",isAllSelected,selectedItems.length , items.length);
    return(
        <div>
            <h1>list of fruits</h1>
              <label>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        Select All
      </label>
 <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {" "}
              {item.name}
            </label>
          </li>
        ))}
      </ul>
 <h3>Selected Items:</h3>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
        </div>
    )

}

export default Listchk