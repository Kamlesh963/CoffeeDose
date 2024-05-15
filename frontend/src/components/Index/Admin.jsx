import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/HomeNavbar.css';
import HomeFooter from './HomeFooter';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function Admin() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [datasearch, setDatasearch] = useState('');
    const [products, setProducts] = useState([]);
    const [present, setPresent] = useState(false);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [productData, setProductData] = useState({
        Name: '',
        XPrice: '',
        MainPrice: '',
        Quantity: '',
        Calories: '',
        img: '',
        Coffeeid: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:1300/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (e) => {
        setDatasearch(e.target.value);
        const isPresent = products.some((value) => value.Name.toLowerCase().includes(e.target.value.toLowerCase()));
        setPresent(!isPresent);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditProduct = (productId) => {
        setEditMode(true);
        setEditProductId(productId);
        setShowAddProductModal(true);
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:1300/api/products/${productId}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            {/* Navbar */}
            <div className='container-fluid' style={{ zIndex: '999' }}>
                <div className="row" style={{ position: 'sticky' }}>
                    <nav className="navbar navbar-expand-lg pe-2 pe-lg-0 post_part" >
                        <div className="container-fluid m-0 p-0">
                            <Link onClick={scrollToTop} to='/admin'><img src="./Data/logo/logo1.png" alt="" className=' logo_img' /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <div className='text-center mx-auto d-block d-lg-none'>
                                        <button onClick={() => setShowAddProductModal(true)} className='d-inline-flex pt-1 p-2 border-0 btn btn-success me-4'><span style={{ fontSize: '19px', cursor: 'pointer' }}>Add Product</span> </button>
                                        <Link onClick={scrollToTop} to='/login' className='text-decoration-none text-black fw-bold'><button className='d-inline-flex pt-1 p-2 border-0 btn btn-primary'><span style={{ fontSize: '19px', cursor: 'pointer' }}>LogOut</span> </button></Link>
                                    </div>
                                </ul>
                                <div className='text-center mx-auto d-none d-lg-block'>
                                    <button onClick={() => setShowAddProductModal(true)} className='d-inline-flex pt-1 p-2 border-0 btn btn-success me-4'><span style={{ fontSize: '19px', cursor: 'pointer' }}>Add Product</span> </button>
                                    <Link onClick={scrollToTop} to='/login' className='text-decoration-none text-black fw-bold'><button className='d-inline-flex pt-1 p-2 border-0 btn btn-primary'><span style={{ fontSize: '19px', cursor: 'pointer' }}>LogOut</span> </button></Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* End Navbar */}

            {/* Add Product Modal */}
            <AddProduct
                showModal={showAddProductModal}
                onClose={() => {
                    setShowAddProductModal(false);
                    setEditMode(false);
                    setEditProductId(null);
                    setProductData({
                        Name: '',
                        XPrice: '',
                        MainPrice: '',
                        Quantity: '',
                        Calories: '',
                        img: '',
                        Coffeeid: ''
                    });
                }}
            />

            {/* Edit Product Modal */}
            {editMode && (
                <EditProduct
                    productId={editProductId}
                    showModal={showAddProductModal}
                    onClose={() => {
                        setShowAddProductModal(false);
                        setEditMode(false);
                        setEditProductId(null);
                        setProductData({
                            Name: '',
                            XPrice: '',
                            MainPrice: '',
                            Quantity: '',
                            Calories: '',
                            img: '',
                            Coffeeid: ''
                        });
                    }}
                />
            )}

            {/* Product List */}
            <div className="container-fluid mt-2 mb-3">
                <div className="background_search">
                    <h1 className='text-center my-3 background_text_posit_search'>Products</h1>
                </div>
            </div>
            <div className="container text-center">
                <input type="search" className='Input_search' placeholder='Search Your Coffee' name="search" id="search" onChange={handleSearch} value={datasearch} />
            </div>
            <div className="container-fluid px-1 px-md-3 px-lg-5">
                {products
                    .filter((e) => {
                        if (datasearch === "") {
                            return e;
                        } else if (e.Name.toLowerCase().includes(datasearch.toLowerCase())) {
                            return e;
                        }
                    })
                    .map((e) => (
                        <div className="card d-inline-flex card_style1 m-3 " style={{ cursor: 'pointer' }} key={e._id}>
                            <div className="container p-0">
                                <img src={e.img} className="card-img-top card_image_property" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title name_style">{e.Name}</h5>
                                    <h5 className="card-text">{e.Calories}</h5>
                                    <h5 className="card-text"><span className='text-decoration-line-through text-danger'>{e.XPrice}</span>&nbsp;{e.MainPrice}</h5>
                                    <button onClick={() => handleEditProduct(e._id)} className="btn btn-primary add_cart me-3">Edit</button>
                                    <button onClick={() => handleDeleteProduct(e._id)} className="btn btn-danger add_cart">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                {present &&
                    <div className="container">
                        <div className="row text-center my-3">
                            <span className='not_available'>The Product is not Available</span>
                        </div>
                    </div>
                }
            </div>

            <HomeFooter />
        </>
    );
}

export default Admin;
