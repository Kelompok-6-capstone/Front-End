import React from "react";

export const getSortIcon = (sortConfig, columnName) => {
    if (sortConfig.key !== columnName) {
      return React.createElement("div", { className: "w-4 h-4 inline-block" });
    }
    return sortConfig.direction === "ascending"
      ? React.createElement("img", {
          className: "w-4 h-4 inline-block",
          src: "/images/arrow-up.svg",
          alt: "",
        })
      : React.createElement("img", {
          className: "w-4 h-4 inline-block",
          src: "/images/arrow-down.svg",
          alt: "",
        });
  };
  