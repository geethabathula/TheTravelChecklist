import './index.css'
import { useState } from 'react';

export default function Form({ onAddItems }) {
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!text) return;
        const newlyAddedItems = { text, quantity, packed: false, id: Date.now() };
        onAddItems(newlyAddedItems);
        setText("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
                {/* This creates an array of length 20 because we can't
                    create 20 options with values. Instead we loop over the array */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..." value={text} onChange={(e) => setText(e.target.value)} />
            <button>Add</button>
        </form>
    )
}
