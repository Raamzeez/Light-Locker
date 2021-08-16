import React, { FC } from "react";

interface iProps {
  messages: string[];
}

const HomePoints: FC<iProps> = ({ messages }) => {
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
