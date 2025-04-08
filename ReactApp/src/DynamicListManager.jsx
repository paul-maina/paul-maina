import React from 'react'

function DynamicListManager({ items }) {
  return (
    <ul className="DynamicListManger">
      {items.length === 0 ? (
        <li className="empty">First Item.</li>
      ) : (
        items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))
      )}
    </ul>
  );
}

export default DynamicListManager;