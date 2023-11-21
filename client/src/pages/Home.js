import React, { useState } from 'react';
import '../../../server/Uploads/dino-figures.png';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
    category: '',
    supplier: '',
    purchaseDate: '',
    expirationDate: '',
    location: '',
    imageUrl: ''
  });

  // Dummy data
  const inventoryItems = [
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
  ];

  // Handlers for form input and submission
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      imageUrl: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
  };

  // Filter items based on the search term
  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for an item..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="inventory-grid">
        {/* Inventory items are mapped and displayed here */}
      </div>
      <div className="add-item-container">
        <h2>Add New Inventory Item</h2>
        <form onSubmit={handleSubmit} className="add-item-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleFormChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={formData.supplier}
            onChange={handleFormChange}
            required
          />
          <input
            type="date"
            name="purchaseDate"
            placeholder="Purchase Date"
            value={formData.purchaseDate}
            onChange={handleFormChange}
            required
          />
          <input
            type="date"
            name="expirationDate"
            placeholder="Expiration Date"
            value={formData.expirationDate}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleFormChange}
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
