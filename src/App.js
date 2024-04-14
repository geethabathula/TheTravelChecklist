import './index.css';
import Form from './Form';
import List from './List';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (<h1>Travel Checklist 💼</h1>);
}

function Stats({ items }) {
  if (!items.length) return (
    <footer className='stats'>
      <em>Start Listing your items</em>
      <p> Copyrights &#169; 2024 Geetha Supriya Bathula. All rights Reserved.</p>
    </footer>
  );

  const numItems = items.length;
  const packedItemsCount = items.filter(item => item.packed).length;
  const packPercentage = Math.round((packedItemsCount / numItems) * 100);
  const itemsCount = numItems;

  return (
    <footer className='stats'>
      <em>
        {packPercentage === 100 ? `You got everything you need good to go` : `You have ${itemsCount} items in the list, and you already packed ${packedItemsCount}. (${packPercentage}%).`}
        <p> Copyrights &#169; 2024 Geetha Supriya Bathula. All rights Reserved.</p>
      </em>

    </footer>
  )
}

export default App;
