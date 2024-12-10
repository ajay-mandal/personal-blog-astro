---
title: Zustand for state management in React.js
author: Ajay Mandal
pubDatetime: 2024-12-09T11:20:24.624Z
modDatetime: 2024-12-10T09:57:40.832Z
slug: zustand-for-state-management-in-reactjs
featured: true
draft: false
tags:
  - reactjs
  - typescript
  - state-management
  - zustand
ogImage: ../../assets/images/zustand-react/zustand-reactjs.jpg
description: How to use zustand in react.js for easy state management
---
![zustand-reactjs](@assets/images/zustand-react/zustand-reactjs.jpg)

State management becomes very crucial when it comes to build a robust React applications, and Zustand has emerged as a lightweight, elegant 
solution that simplifies the way we handle global state.

## Table of contents

## What is Zustand?
![zustand-reactjs](@assets/images/zustand-react/zustand-def.png)
As said, Zustand is a small, fast and scalable status management solution. Its state management is centralized and action-based.
Its core philosophy is to make state management straightforward and developer-friendly.

## Advantages of using Zustand
- Middleware and Persist
- Simple and Minimal API
- Performance Optimizations
- Async Actions

## Quick Installation
```shell
npm install zustand
# or
yarn add zustand
```
Once the library is installed, we need to create a folder `/hooks` and inside the folder we add a new file, I am creating  `use-cart.ts`.

I am taking example of my [ecommerce-store](https://cms-ecommerce-store.vercel.app/) app where I have used zustand for state management.

## Creating Store
Zustand provide function to create store using `create` and set variables to certain function using `set` that can be activated using certain conditions.

Importing zustand
```js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
```
Here, `use-cart.ts` basically handles the card activity for the ecommerce app. First step would be to set the variables
```ts
import { Product } from "@/types";
interface CartProps {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
};
```
- `addItems: (data: Product) => void` is a function that add items to cart, takes a Product as an argument and returns nothing (void).
- `removeItem: (id: string) => void` is a function that removes item from cart using their id, takes id as an argument, returns nothing (void)
- `removeAll: () => void;` is a function that removes all item from cart, takes no argument and returns nothing (void).

Here, data is of type `Product` as in
```ts
export interface Product {
    id: string;
    name: string;
    price: string;
}
```
Now, we can create a store by using above variables and functions as
```tsx
const useCart = create(
    // Store definition
    persist<CartProps>((set, get) => ({
        // Initial state
        items: [],

        // Method to add an item to the cart
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if(existingItem) {
                return toast("Item already in cart.")
            }

            set({ items: [...get().items, data] });
            toast.success("Item added to cart.")
        },

        // Method to remove a specific item from the cart
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from the cart.");
        },

        // Method to clear all items from the cart
        removeAll: () => set({ items: [] }),
    }), 
    // Persistence configuration
    {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)
export default useCart;
```
### Key Components

<b>Zustand Store Creation:</b></br>
`create()` is a Zustand method to create a global state store. `persist()` is a middleware that allows saving the store's state to local storage. `set` and `get` are used to modify and retrieve the current state of the variables.
```ts
const useCart = create(
    persist<CartProps>((set, get) => ({
    }))
)
```

<b>Store State:</b></br>
items: An array to store cart items by starting as an empty array []

<b>Methods:</b></br>
- addItem() - Checks if item already exists in cart, prevents duplicate items, adds new item to cart, shows a toast notification
```ts
addItem: (data: Product) => {
    const currentItems = get().items;
    ...
    set({ items: [...get().items, data] });
    ...
}
```
Here, current state of data is retrieved which of type `Product` using `get`. `set` is used to modify the state.
- removeItem() - Removes a specific item by its ID, shows a toast notification
```ts
removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    ...
}
```
Again, `set` is used to remove the item from cart i.e localStorage using the `id` of product
- removeAll() - Clears entire cart

<b>Persistence Configuration:</b>

- `name: "cart-storage"` - Key used in local storage.

- `createJSONStorage(() => localStorage)` - Saves cart data to browser's local storage
This means cart items persist between page reloads
> This is just an example, but the principle remain same.

## Executing the action
It can be easily imported and be used for state management in other components.

We can create an object using the hook that we created earlier and subject the variables though it for overall state-management
```ts
import useCart from "@/hooks/use-cart";
// creating object 
const cart = useCart();
```
Now, it can be used in action to provide the parameters.
```tsx
function ProductComponent() {
  const { addItem } = useCart();
  
  return (
    <button onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}

function CartComponent() {
  const { items, removeItem, removeAll } = useCart();
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={removeAll}>Clear Cart</button>
    </div>
  );
}
```

This implementation provides a robust, globally accessible cart state management solution with local storage persistence and user-friendly notifications.

## Conclusion
Navigating the complexities of state management in React just got easier with Zustand. This innovative library cuts through the traditional complexity, offering developers an elegant and straightforward approach to handling global application states.

Thanks for joining me on this deep dive into Zustand. I hope this guide has demystified state management and shown you how powerful yet simple this library can be.