import { gql } from '@apollo/client';

export const GET_INVENTORY_ITEMS = gql`
  query GetInventoryItems {
    inventoryItems {
      id
      name
      description
      quantity
      price
      category
      supplier
      purchaseDate
      expirationDate
      location
      imageUrl
    }
  }
`;

export const ADD_INVENTORY_ITEM = gql`
  mutation AddInventoryItem($name: String!, $description: String!, $quantity: Int!, $price: Float!, $category: String!, $supplier: String!, $purchaseDate: String!, $expirationDate: String, $location: String!, $imageUrl: String!) {
    addInventoryItem(name: $name, description: $description, quantity: $quantity, price: $price, category: $category, supplier: $supplier, purchaseDate: $purchaseDate, expirationDate: $expirationDate, location: $location, imageUrl: $imageUrl) {
      id
    }
  }
`;

// Add more queries and mutations as needed
