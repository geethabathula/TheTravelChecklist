import { useState } from 'react';
import './index.css';

export default function List({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") { sortedItems = items; }

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.text.localeCompare(b.text));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return <div className="list">
        <ul>
            {sortedItems.map((item) =>
            (<Item itemObj={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
                key={item.id} />
            ))}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={onClearList}>Clear list</button>
        </div>
    </div>
}

function Item({ itemObj, onDeleteItem, onToggleItem }) {

    return (
        <li>
            <input type="checkbox" value={itemObj.packed} onChange={() => onToggleItem(itemObj.id)} />
            <span style={itemObj.packed ? { textDecorationLine: "line-through" } : {}}>
                {itemObj.quantity} {itemObj.text}
            </span>
            <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
        </li>
    );
}