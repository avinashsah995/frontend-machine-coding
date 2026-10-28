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

const NestedItems = ({ items, checkedNodes, handleChange }) => {

  return (
    <div className="nested-items-container">
      {items.map((item) => {
        return (
          <div className="nested-item" key={item.id}>
            <div className="nested-item-header">
              <input
                type="checkbox"
                id={item.id}
                className="nested-item-checkbox"
                checked={checkedNodes[item.id] ?? false}
                onChange={(e) => handleChange(e.target.checked, item)}
              />
              <label className="nested-item-label" htmlFor={item.id}>{item.title}</label>
            </div>
            {item.children && (
              <NestedItems
                key={item.id}
                items={item.children}
                checkedNodes={checkedNodes}
                handleChange={handleChange}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckboxes = () => {
  const [checkedNodes, setCheckedNodes] = useState({});

  const handleChange = (isChecked, item) => {
    const newCheckedNodes = {...checkedNodes};

    const updateNodes = (items) => {
      newCheckedNodes[items.id] = isChecked;

      if(items.children) {
        items.children.forEach((child) => {
          updateNodes(child);
        })
      }
    }

    const updateParentNodes = (nodes) => {
      nodes.forEach((node) => {
        if(node.children) {
          updateParentNodes(node.children);

          const allChildChecked = node.children.every((child) => newCheckedNodes[child.id]);
          newCheckedNodes[node.id] = allChildChecked;
        }

      })
    }

    updateNodes(item);
    updateParentNodes(nestedCheckboxesData);
    setCheckedNodes(newCheckedNodes);
  }

  return (
    <div className="nested-checkboxes">
      <h1 className="text-center w-full flex ">Nested Checkboxes</h1>
      <hr />

      <div className="nested-checkboxes-container">
        <NestedItems
          items={nestedCheckboxesData}
          checkedNodes={checkedNodes}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NestedCheckboxes;
