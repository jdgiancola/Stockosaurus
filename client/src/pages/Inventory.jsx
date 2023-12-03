import React, { useState } from 'react';
import { Table } from 'react-bootstrap'; 
import '../Styles/Inventory.css';
import '../../../server/Uploads/dino-figures.png';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: "Dinosaur Figures",
      description: "Assorted dinosaur figurines",
      quantity: 10,
      price: 29.99,
      category: "Toys",
      supplier: "FunTimes",
      purchaseDate: "2023-01-01",
      expirationDate: "2025-12-31",
      location: "Aisle 3",
      imageUrl: ""  
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="my-inventory-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for an item..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Purchase Date</th>
            <th>Expiration Date</th>
            <th>Location</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems
            .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.supplier}</td>
                <td>{item.purchaseDate}</td>
                <td>{item.expirationDate}</td>
                <td>{item.location}</td>
                <td><img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventory;
