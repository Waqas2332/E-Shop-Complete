import React from "react";

function FooterList({ text }: { text: string }) {
  return (
    <li>
      <a className="text-gray-600 hover:text-gray-800">{text}</a>
    </li>
  );
}

export default FooterList;
