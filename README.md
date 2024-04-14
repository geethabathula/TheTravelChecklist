# Travel Checklist App

This is a simple checklist app for planning your trip. You can add items you need to pack, mark them as packed, delete them, and clear the entire list.

## Concepts Used

### React Components

- **App Component**: The main component that manages the state of the application and renders child components.
- **Form Component**: Handles the form for adding new items to the checklist.
- **List Component**: Displays the list of items with options to delete, mark as packed, and clear the list.
- **Item Component**: Represents an individual item in the checklist.

### React Hooks

- **useState**: Used to manage state variables like `items`, `sortBy`, `text`, and `quantity`.

### Conditional Rendering

- **Conditional Rendering**: Used to conditionally render components and elements based on certain conditions. For example, rendering the list of items only if there are items in the list.

### Event Handling

- **Event Handling**: Handling events like form submission, button clicks, checkbox changes, etc., using event handlers like `handleSubmit`, `onToggleItem`, `onDeleteItem`, and `onClearList`.

### State Management

- **State Management**: Managing application state using the `useState` hook, updating state variables, and passing state down to child components as props.

### Sorting

- **Sorting**: Sorting the list of items based on different criteria like input order, description, and packed status.
