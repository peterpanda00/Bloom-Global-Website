import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import { BsBuildingFillGear } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';





const Home = () => {

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
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/properties?search=${searchQuery}`);
  };

  return (
    <div className="page">
     <Navbar/>
     <div>
        <div className="hero-wrap ftco-degree-bg" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 d-flex align-items-end ">
                <div className="text text-center" data-aos="fade-up">
                  <h1 className="mb-4" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>Where Every Property <br/> Blooms</h1>
                  <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>At Bloom Global Estate & Development, we transform your real estate aspirations into reality. Partner with us to discover exceptional service and unmatched expertise in the world of real estate.</p>
                  <form className="search-location mt-md-5" data-aos="fade-up" onSubmit={handleSearchSubmit}>
                    <div className="row justify-content-center">
                      <div className="col-lg-10 align-items-end">
                        <div className="form-group">
                          <div className="form-field">
                          <input type="search" className="form-control" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
                            <button><span className="ion-ios-search" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                 
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <section className="ftco-section go-to-here">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center  mb-5">
                <span className="subheading" data-aos="fade-up">Our Properties</span>
                <h2 className="mb-2" data-aos="fade-up">Check Out Our Upcoming Project</h2>
              </div>
            </div>
            <div className="row">
            {propertyList.map((property, index) => (
            <div className="col-md-3" key={index}>
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
          </div>
        </section>
        <section className="ftco-section ftco-no-pb">
          <div className="container" >
            <div className="row no-gutters">
              <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center img-fluid"   style={{backgroundImage: 'url(images/about.png)'}}>
              </div>
              <div className="col-md-6 wrap-about py-md-5 ">
                <div className="heading-section p-md-5">
                  <h2 style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '40px'}} className="mb-4">Who are we?</h2>
                  <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>Bloom Global Estate and Development Corp. is
                      dedicated to acquiring valuable assets through
                      various means such as purchase, lease, and
                      ownership. We have a team of experts who
                      specialize in the development, management, and
                      improvement of properties to enhance their value
                      and potential return on investment.</p>
                  <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>Our focus is on carefully selecting properties
                      with growth potential and implementing
                      strategic plans to optimize their performance in
                      the market. Whether it's acquiring existing
                      buildings or developing new structures, we are
                      committed to delivering exceptional results for
                      our investors and partners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center mb-5">
                <span className="subheading" data-aos="fade-up" >Our Services</span>
                <h2 className="mb-2" data-aos="fade-up" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '40px'}}>What do we offer?</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"> <BsBuildingFillGear style={{ color: '#CDA375', fontSize: '52px' }}/></div>
                  <div className="media-body py-md-4" >
                    <h3 data-aos="fade-up" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '24px'}}>Property Development</h3>
                    <p className="text-left" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}} data-aos="fade-up">
                      <ul>
                        <li data-aos="fade-left" >Land acquisition and site selection</li>
                        <li data-aos="fade-left">Feasibility studies and market analysis</li>
                        <li data-aos="fade-left">Property design and development planning</li>
                        <li data-aos="fade-left" >Obtaining permits and approvals</li>
                        <li  data-aos="fade-left">Construction management</li>
                      </ul>
                    </p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><FaMoneyBillTrendUp  style={{ color: '#CDA375', fontSize: '54px' }}/></div>
                  <div className="media-body py-md-4">
                    <h3 data-aos="fade-up" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '24px'}}>Real Estate Investment</h3>
                    <p className="text-left" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>
                      <ul>
                        <li data-aos="fade-left">Investment analysis and strategy development</li>
                        <li data-aos="fade-left">Property valuation and appraisal</li>
                        <li data-aos="fade-left">Financing and capital sourcing</li>
                        <li data-aos="fade-left">Asset management and portfolio optimization</li>
                      </ul>
                    </p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><MdManageAccounts style={{ color: '#CDA375', fontSize: '60px' }}/></div>
                  <div className="media-body py-md-4">
                    <h3 data-aos="fade-up" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '24px'}}>Property Management</h3>
                    <p className="text-left" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>
                      <ul>
                        <li data-aos="fade-left">Tenant screening and leasing</li>
                        <li data-aos="fade-left">Rent collection and financial reporting</li>
                        <li data-aos="fade-left">Maintenance and repairs</li>
                        <li data-aos="fade-left">Property marketing and tenant retention</li>
                      </ul>
                    </p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><FaHandshakeAngle style={{ color: '#CDA375', fontSize: '60px' }}/></div>
                  <div className="media-body py-md-4">
                    <h3 data-aos="fade-up" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '24px'}}>Brokerage Services</h3>
                    <p className="text-left" style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>
                      <ul>
                        <li data-aos="fade-left">Property listing and marketing</li>
                        <li data-aos="fade-left">Buyer and seller representation</li>
                        <li data-aos="fade-left">Lease negotiation and transaction management</li>
                      </ul>
                      </p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </section>
       
       
        <section className="ftco-section ftco-degree-bg services-section img mx-md-5" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container ml-5">
            <div className="row justify-content-start mb-5">
              <div className="col-md-7 text-center heading-section heading-section-white ">
                <span className="subheading">Work flow</span>
                <h2 className="mb-3">How it works</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>01</span></div>
                        <h3>Evaluate Property</h3>
                        <p>Whether you're looking to buy or sell, our expert team conducts a comprehensive assessment to determine its market value and potential. We consider all relevant factors, including location, condition, and market trends, ensuring you get the best possible advice and valuation.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>02</span></div>
                        <h3>Meet Your Agent</h3>
                        <p>Once your property evaluation is complete, you'll be introduced to one of our experienced agents. They will guide you through the process, addressing all your questions and concerns. Your agent will be your dedicated point of contact.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>03</span></div>
                        <h3>Close the Deal</h3>
                        <p>With the evaluation and consultation done, we move to the negotiation phase. Your agent will leverage their expertise to secure the best deal for you, whether you're buying or selling. We handle all the paperwork, negotiations, and legalities, ensuring a smooth and stress-free transaction.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>04</span></div>
                        <h3>Have Your Property</h3>
                        <p>Congratulations! The final step is handing over the keys to your new property or successfully selling your existing one. Our support doesn’t end here; we remain available for any post-deal assistance you may need. Enjoy the peace of mind that comes with knowing you made the right choice with our comprehensive real estate services.</p>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        
       
        <section className="ftco-section ftco-agent ftco-no-pt">
        
        </section>
        <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex ">
                <div className="blog-entry justify-content-end">
                  <div className="text">
                    <h3 className="heading"><Link to="/properties">Bloom One : Our First Project</Link></h3>
                    <div className="meta mb-3">
                      <div><Link to="/properties">June 16, 2024</Link></div>
                      <div><Link to="/properties">Admin</Link></div>
                    </div>
                    <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                    </a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
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
                  <h2 className="ftco-heading-2">Bloom Global Estate & Development</h2>
                  <p>Bloom Global Estate and Development Corp. is
                      dedicated to acquiring valuable assets through
                      various means such as purchase, lease, and
                      ownership. </p>
                  <ul className="ftco-footer-social list-unstyled mt-5">
                    <li className="ftco-animate"><a href="https://www.facebook.com/profile.php?id=61555958554608&mibextid=LQQJ4d"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="https://www.instagram.com/bloomglobalestate?igsh=Z2pidjh6dnYza3Q2"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Community</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/properties"><span className="icon-long-arrow-right mr-2" />Search Properties</Link></li>
                    <li><Link to="/services"><span className="icon-long-arrow-right mr-2" />FAQs</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/services"><span className="icon-long-arrow-right mr-2" />Services</Link></li>
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />Vision & Mission</Link></li>
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />Core Values</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Company</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />About Us</Link></li>
                    <li><Link to="/contact"><span className="icon-long-arrow-right mr-2" />Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">Sunrise Drive, Pasay City, Philippines, 1700</span></li>
                      <li><a href="tel:+639175425666"><span className="icon icon-phone" /><span className="text">+63917 542 5666</span></a></li>
                      <li><a href="mailto:ask@bloomglobalestate.com"><span className="icon icon-envelope pr-4" /><span className="text">ask@bloomglobalestate.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
       
  

    
  </div>
    </div>
  );
};

export default Home;
