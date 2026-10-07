import React from 'react'
import { useState } from "react";
import data from "../data/fileExplorer.json";

const ListNodes = ({ nodes, handleAddNode, handleDeleteNode }) => {
  const [isExpand, setIsExpand] = useState({});

  const handleExpand = (nodeId) => {
    setIsExpand((prev) => {
      return {
        ...prev,
        [nodeId]: !prev[nodeId],
      };
    });
  };

  return (
    <div className="mainContainer">
      {nodes.map((node) => {
        return (
          <div key={node.id}>
            <div className="nodes">
              <span onClick={() => handleExpand(node.id)}>
                {node.isFolder && (
                  <span
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {isExpand[node.id] ? "📂" : "📁"}
                  </span>
                )}
                <span>{node.name}</span>
              </span>
              {node.isFolder && (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4732/4732392.png"
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleAddNode(node.id, true)}
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1091/1091585.png"
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleAddNode(node.id, false)}
                  />
                </>
              )}
              <img
                src="https://cdn-icons-png.flaticon.com/512/8567/8567786.png"
                alt=""
                style={{
                  width: "14px",
                  height: "14px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => handleDeleteNode(node.id)}
              />
            </div>

            {isExpand[node.id] && node.children && (
              <ListNodes
                nodes={node.children}
                handleAddNode={handleAddNode}
                handleDeleteNode={handleDeleteNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  const [nodesData, setNodesData] = useState(data);

  const handleAddNode = (nodeId, isFolder = true) => {
    const name = prompt(`Enter ${isFolder ? "folder" : "file"} name`);

    if (!name) return;

    const newNode = isFolder
      ? {
          id: Date.now().toString(),
          name,
          isFolder,
          children: [],
        }
      : {
          id: Date.now().toString(),
          name,
          isFolder,
        };

    const addNode = (nodes) => {
      return nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            children: [...node.children, newNode],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: addNode(node.children),
          };
        }

        return node;
      });
    };

    setNodesData((prev) => addNode(prev));
  };

  const handleDeleteNode = (nodeId) => {
    const deleteNode = (nodes) => {
      return nodes
        .filter((node) => node.id !== nodeId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: deleteNode(node.children),
            };
          }

          return node;
        });
    };

    setNodesData((prev) => deleteNode(prev));
  };

  return (
    <div className="mainContainer">
      <h1 className="text-center w-full flex ">File Explorer</h1>
      <ListNodes
        nodes={nodesData}
        handleAddNode={handleAddNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default FileExplorer