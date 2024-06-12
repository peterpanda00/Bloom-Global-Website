import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BloomOne_Studio from '../components/BloomOne_Studio';
import BloomOne_OneBed from '../components/BloomOne_OneBed';
import BloomOne_TwoBed from '../components/BloomOne_TwoBed';
import BloomOne_ThreeBed from '../components/BloomOne_ThreeBed';
import { Row, Col } from 'react-bootstrap';
import { FaSearch, FaSort, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Properties = () => {
  
  const propertyList = [
    {
      propertyName: 'Bloom One',
      propertyType: 'Residential',
      unitType: 'Studio',
      location: 'Congressional Avenue, Quezon City',
      size: 20,
      price: 18000,
      bed: 1,
      bath: 1,
      imgUrl: 'images/work-2.jpg',
      link: '/bloom-one-studio',
    },
    {
      propertyName: 'Bloom One',
      propertyType: 'Residential',
      unitType: 'One Bedroom',
      location: 'Congressional Avenue, Quezon City',
      size: 30,
      price: 25000,
      bed: 1,
      bath: 1,
      imgUrl: 'images/work-2.jpg',
      link: '/bloom-one-one-bedroom'
    },
    {
      propertyName: 'Bloom One',
      propertyType: 'Residential',
      unitType: 'Two Bedroom',
      location: 'Congressional Avenue, Quezon City',
      size: 60,
      price: 40000,
      bed: 2,
      bath: 1,
      imgUrl: 'images/work-2.jpg',
      link: '/bloom-one-two-bedroom'
    },
    {
      propertyName: 'Bloom One',
      propertyType: 'Residential',
      unitType: 'Three Bedroom',
      location: 'Congressional Avenue, Quezon City',
      size: 90,
      price: 60000,
      bed: 3,
      bath: 2,
      imgUrl: 'images/work-2.jpg',
      link: '/bloom-one-three-bedroom'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filterAndSortProperties = () => {
    let filteredProperties = propertyList;

    if (searchQuery) {
      filteredProperties = filteredProperties.filter(property =>
        property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.unitType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter) {
      filteredProperties = filteredProperties.filter(property =>
        property.propertyType === filter
      );
    }

    if (sort) {
      if (sort === 'sizeAsc') {
        filteredProperties.sort((a, b) => a.size - b.size);
      } else if (sort === 'sizeDesc') {
        filteredProperties.sort((a, b) => b.size - a.size);
      } else if (sort === 'priceAsc') {
        filteredProperties.sort((a, b) => a.price - b.price);
      } else if (sort === 'priceDesc') {
        filteredProperties.sort((a, b) => b.price - a.price);
      }
    }

    return filteredProperties;
  };

  const displayedProperties = filterAndSortProperties();

  return (
    <div className="page">
      <Navbar/>
      <div>
       

        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9 pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Properties <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Choose A Property <br />Right For You</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
        <div className="container">
        <Row>
          {/* Search Bar */}
          <Col lg="4">
            <form>
              <div className="mb-2 mt-3 input-group" style={{ maxWidth: "100%", borderRadius: "10px", overflow: "hidden", maxHeight:"100%" }} >
                <input type="search" className="form-control" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
                <button className="btn me-auto" style={{ color: "white", backgroundColor: "#CDA375" }}>
                  <div style={{ color: 'white' }}>
                    {React.createElement(FaSearch, { size: 20 })}
                  </div>
                </button>
              </div>
            </form>
          </Col>
          {/* Sorting Mechanism */}
          <Col lg="4">
            <div className="mb-2 mt-3 input-group" style={{ backgroundColor: "#CDA375", maxWidth: "100%", display: "flex", borderRadius: "10px", overflow: "hidden", height:"70%" }}>
              <div style={{ backgroundColor: "#CDA375", width: "30px", height: "100%" }}>
                <div style={{ padding: "5px", color: 'white' }}>
                  {React.createElement(FaSort, { size: 20 })}
                </div>
              </div>
              <select className="form-select" value={sort} onChange={handleSortChange} style={{ backgroundColor: "#CDA375",color:"white", fontSize:"18px", borderColor:"#CDA375"}}>
                <option value="">Sort by</option>
                <option value="sizeAsc">Unit Size (Smallest to Biggest)</option>
                <option value="sizeDesc">Unit Size (Biggest to Smallest)</option>
                <option value="priceAsc">Price (Lowest to Highest)</option>
                <option value="priceDesc">Price (Highest to Lowest)</option>
              </select>
            </div>
          </Col>
          {/* Filtering Mechanism */}
          <Col lg="4">
            <div className="mb-2 mt-3 input-group" style={{ backgroundColor: "#CDA375", maxWidth: "100%", display: "flex", borderRadius: "10px", overflow: "hidden", height:"70%" }}>
              <div style={{ backgroundColor: "#CDA375", width: "30px", height: "100%" }}>
                <div style={{ padding: "5px", color: 'white' }}>
                  {React.createElement(FaFilter, { size: 20 })}
                </div>
              </div>
              <select className="form-select" value={filter} onChange={handleFilterChange} style={{ backgroundColor: "#CDA375",color:"white", fontSize:"18px", borderColor:"#CDA375"}}>
                <option value="">Filter by Property Type</option>
                <option value="">All</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </Col>
        </Row>
          
          </div>
        </section>
        

        <section className="ftco-section">
          <div className="container">
            <div className="row">

            {displayedProperties.map((property, index) => (
            <div className="col-md-4" key={index}>
              <div className="property-wrap">
                <Link to={property.link} className="img" style={{ backgroundImage: `url(${property.imgUrl})` }} />
                <div className="text">
                  <p className="price">
                    <span className="orig-price">₱ {property.price.toLocaleString()}<small>/mo</small></span>
                  </p>
                  <ul className="property_list">
                    <li><span className="flaticon-bed" />{property.bed}</li>
                    <li><span className="flaticon-bathtub" />{property.bath}</li>
                    <li><span className="flaticon-floor-plan" />{property.size} sqm</li>
                  </ul>
                  <h3><Link to={property.link}>{property.propertyName} : {property.unitType} Unit</Link></h3>
                  <span className="location">{property.location}</span>
                  <Link to={property.link} className="d-flex align-items-center justify-content-center btn-custom">
                    <span className="ion-ios-link" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

           
            </div>

            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
        <footer className="ftco-footer ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Bloom</h2>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                  <ul className="ftco-footer-social list-unstyled mt-5">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Community</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Search Properties</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />For Agents</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Reviews</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Our Story</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Meet the team</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Careers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Company</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />About Us</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Press</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Careers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope pr-4" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default Properties;
