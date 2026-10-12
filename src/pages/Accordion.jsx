import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "JavaScript (JS)",
    content:
      "JavaScript (JS) is a lightweight, high-level programming language used to create interactive and dynamic content on the internet. It is widely used for web development, allowing developers to build interactive websites, web applications, and server-side applications.",
  },
  {
    id: 2,
    title: "React.js",
    content:
      "React.js is an open-source JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces. It follows a component-based architecture and uses a virtual DOM to efficiently update the user interface.",
  },
  {
    id: 3,
    title: "Next.js",
    content:
      "Next.js is a powerful React framework used to build modern, high-performance web applications. It provides features such as server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, and built-in performance optimizations.",
  },
  {
    id: 4,
    title: "TypeScript (TS)",
    content:
      "TypeScript is a strongly typed programming language built on top of JavaScript. It introduces static typing, interfaces, and advanced type-checking features that help developers write more reliable, maintainable, and scalable applications.",
  },
  {
    id: 5,
    title: "Node.js",
    content:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript outside the browser. It is commonly used for building backend services, REST APIs, real-time applications, and scalable server-side systems.",
  },
];

const Accordion = () => {
  const [activeAcordian, setActiveAcordian] = useState(null);

  const handleActiveAcordian = (id) => {
    if (activeAcordian === id) {
      setActiveAcordian(null);
    } else {
      setActiveAcordian(id);
    }
  };
  return (
    <div className="accordion">
      <h1 className="text-center w-full flex ">Accordion</h1>
      <hr />

      <div className="accordion-items-container">
        {accordionData.length > 0 ? (
          accordionData.map((item, index) => {
            return (
              <div className="accordion-item" key={item.id}>
                <div
                  className={`accordion-item-header ${activeAcordian === item.id ? "accordion-item-header-active" : ""}`}
                  onClick={() => handleActiveAcordian(item.id)}
                >
                  <h3 className="accordion-item-title">{item.title}</h3>
                  {activeAcordian === item.id ? (
                    <span className="accordion-item-icon">-</span>
                  ) : (
                    <span className="accordion-item-icon">+</span>
                  )}
                </div>
                {activeAcordian === item.id && (
                  <div className="accordion-item-content">
                    <p className="accordion-item-content-text">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="accordion-items-container-empty">No accordion items found.</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
