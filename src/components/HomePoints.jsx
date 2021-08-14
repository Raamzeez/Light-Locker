import React from "react";

const HomePoints = ({ messages }) => {
  return (
    <div className="text-center">
      <ul style={{ listStylePosition: "inside" }}>
        {messages.map((message) => {
          return <li>{message}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePoints;
