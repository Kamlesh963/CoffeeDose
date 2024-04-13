import React, { useState } from 'react';
import '../CSS/AboutGallery.css';

const AboutGallery = () => {
    const [showImage, setShowImage] = useState(null);

    const openGallery = (imageUrl) => {
        setShowImage(imageUrl);
    };

    const closeGallery = () => {
        setShowImage(null);
    };

    return (
        <>
        <div className="mainbox">
            <div className="containergallery">
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery7.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery7.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery8.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery8.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery6.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery6.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery5.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery5.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery4.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery4.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a onClick={() => openGallery("https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery3.jpg")}>
                            <img src="https://caverta.matchthemes.com/cafe/wp-content/uploads/sites/2/2023/01/cafe-gallery3.jpg" alt="Coffee" />
                        </a>
                    </div>
                </div>
            </div>
            {showImage && (
                <div className="galleryshow" onClick={closeGallery}>
                    <div className="gallerytext">
                        <img src={showImage} alt="Gallery" />
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default AboutGallery;
