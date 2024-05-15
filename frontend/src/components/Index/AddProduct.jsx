import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ showModal, onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    XPrice: '',
    MainPrice: '',
    Quantity: '',
    Calories: '',
    img: '',
    Coffeeid: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Validate form fields
      if (!Object.values(formData).every(value => value !== '')) {
        alert('Please fill in all fields');
        return;
      }
      // Send data to server
      await axios.post("http://localhost:1300/api/products", formData);
      // Close modal after successful submission
      onClose();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again later.');
    }
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product</h5>
            <button type="button" className="close px-1 border border-black fs-5 fw-bold rounded " data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="Name" value={formData.Name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>X Price</label>
              <input type="text" className="form-control" name="XPrice" value={formData.XPrice} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Main Price</label>
              <input type="text" className="form-control" name="MainPrice" value={formData.MainPrice} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="text" className="form-control" name="Quantity" value={formData.Quantity} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Calories</label>
              <input type="text" className="form-control" name="Calories" value={formData.Calories} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input type="text" className="form-control" name="img" value={formData.img} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Coffee ID</label>
              <input type="text" className="form-control" name="Coffeeid" value={formData.Coffeeid} onChange={handleChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
