import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = ({ productId, showModal, onClose }) => {
    console.log("yhe id :", productId)
  const [formData, setFormData] = useState({
    Name: '',
    XPrice: '',
    MainPrice: '',
    Quantity: '',
    Calories: '',
    img: '',
    Coffeeid: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1300/api/products/${productId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        alert('Failed to fetch product details. Please try again later.');
      }
    };
    fetchData();
  }, [productId]);

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
      // Send updated data to server
      await axios.put(`http://localhost:1300/api/products/${productId}`, formData);
      // Close modal after successful submission
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again later.');
    }
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="close px-1 border border-black fs-5 fw-bold rounded" data-dismiss="modal" aria-label="Close" onClick={onClose}>
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
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
