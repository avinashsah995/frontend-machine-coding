import React, { useState } from "react";

const nestedCheckboxesData = [
  {
    id: "1",
    title: "Fruits",
    children: [
      {
        id: "1.1",
        title: "Apple",
      },
      {
        id: "1.2",
        title: "Banana",
      },
      {
        id: "1.3",
        title: "Citrus Fruits",
        children: [
          {
            id: "1.3.1",
            title: "Orange",
            children: [
              {
                id: "1.3.1.1",
                title: "Navel Orange",
              },
              {
                id: "1.3.1.2",
                title: "Blood Orange",
              },
            ],
          },
          {
            id: "1.3.2",
            title: "Lemon",
          },
        ],
      },
      {
        id: "1.4",
        title: "Berries",
        children: [
          {
            id: "1.4.1",
            title: "Strawberry",
            children: [
              {
                id: "1.4.1.1",
                title: "Garden Strawberry",
              },
              {
                id: "1.4.1.2",
                title: "Wild Strawberry",
              },
            ],
          },
          {
            id: "1.4.2",
            title: "Blueberry",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Tropical Fruits",
    children: [
      {
        id: "2.1",
        title: "Mango",
        children: [
          {
            id: "2.1.1",
            title: "Indian Mangoes",
            children: [
              {
                id: "2.1.1.1",
                title: "Alphonso",
              },
              {
                id: "2.1.1.2",
                title: "Kesar",
              },
            ],
          },
          {
            id: "2.1.2",
            title: "Thai Mangoes",
          },
        ],
      },
      {
        id: "2.2",
        title: "Pineapple",
      },
    ],
  },
];

const NestedItems = ({ items, handleSelectItem, selectedItems }) => {
  return (
    <div className="nested-items-container">
      {items.map((item) => {
        return (
          <div className="nested-item" key={item.id}>
            <div className="nested-item-header">
              <input
                type="checkbox"
                className="nested-item-checkbox"
                onChange={(e) => handleSelectItem(item, e.target.checked)}
                checked={selectedItems[item.id] ?? false}
              />
              <label className="nested-item-label">{item.title}</label>
            </div>
            {item.children && (
              <NestedItems
                items={item.children}
                handleSelectItem={handleSelectItem}
                selectedItems={selectedItems}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckboxes = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItem = (item, isChecked) => {
    const updatedSelectedItems = { ...selectedItems };

    const updateSelectedItems = (item) => {
      updatedSelectedItems[item.id] = isChecked;

      item?.children?.forEach((child) => {
        updateSelectedItems(child);
      });

      setSelectedItems(updatedSelectedItems);
    };

    updateSelectedItems(item);
  };
  return (
    <div className="nested-checkboxes">
      <h1 className="text-center w-full flex ">Nested Checkboxes</h1>
      <hr />

      <div className="nested-checkboxes-container">
        <NestedItems
          items={nestedCheckboxesData}
          handleSelectItem={handleSelectItem}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
};

export default NestedCheckboxes;
