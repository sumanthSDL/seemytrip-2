import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import { trainImage } from '../assets/images';

const CareerPage = () => {
      return (
        <div>
          
          {/* ============================================================== */}
          {/* Preloader - style you can find in spinners.css */}
          {/* ============================================================== */}
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          {/* ============================================================== */}
          {/* Main wrapper - style you can find in pages.scss */}
          {/* ============================================================== */}
          <div id="main-wrapper">
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* Start Navigation */}
            <div className="header header-light">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <a className="nav-brand" href="#"><img src={trainImage} className="logo" alt="" /></a>
                    <div className="nav-toggle" />
                    <div className="mobile_nav">
                      <ul>
                        <li className="currencyDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                        </li>
                        <li className="languageDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                        </li>
                        <li>
                          <a href="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                    <ul className="nav-menu">
                      <li><a href="JavaScript:Void(0);">Home<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <a href="index.html">Home version 01</a>
                          </li>
                          <li>
                            <a href="home-2.html">Home version 02</a>
                          </li>
                          <li>
                            <a href="home-3.html">Home version 03</a>
                          </li>
                          <li>
                            <a href="home-4.html">Home version 04</a>
                          </li>
                          <li>
                            <a href="home-5.html">Home version 05</a>
                          </li>
                          <li>
                            <a href="slider-home.html">Home version 06</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Listing<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li><a href="JavaScript:Void(0);">Hotel<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="hotel-list-01.html">Hotel list 01</a></li>
                              <li><a href="hotel-list-02.html">Hotel list 02</a></li>
                              <li><a href="hotel-list-03.html">Hotel list 03</a></li>
                              <li><a href="hotel-detail.html">Hotel Detail 01</a></li>
                              <li><a href="hotel-detail-2.html">Hotel Detail 02</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Flight<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="flight-list-01.html">Flight List 01</a></li>
                              <li><a href="flight-list-02.html">Flight List 02</a></li>
                              <li><a href="Flight-detail.html">Flight Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Rental<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="property-list-01.html">Rental List 01</a></li>
                              <li><a href="property-list-02.html">Rental List 02</a></li>
                              <li><a href="property-list-03.html">Rental List 03</a></li>
                              <li><a href="rental-detail.html">Rental Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Car<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="car-list-01.html">Car List 01</a></li>
                              <li><a href="car-list-02.html">Car List 02</a></li>
                              <li><a href="car-list-03.html">Car List 03</a></li>
                              <li><a href="car-detail.html">Car Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Destination<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="destination-01.html">Destination List 01</a></li>
                              <li><a href="destination-02.html">Destination List 02</a></li>
                              <li><a href="destination-03.html">Destination List 03</a></li>
                              <li><a href="destination-detail.html">Destination Detail</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="join-us.html">Join with GeoTrip</a>
                          </li>
                          <li>
                            <a href="add-listing.html">Add Listing</a>
                          </li>
                          <li>
                            <a href="compare-listing.html">Compare Listing</a>
                          </li>
                          <li>
                            <a href="booking-page.html">Booking Page</a>
                          </li>
                          <li>
                            <a href="my-profile.html">User Dashboard</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Pages<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li><a href="JavaScript:Void(0);">Blog<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="classic-blog.html">Classic Blog</a></li>
                              <li><a href="blog.html">Blog Grid Style</a></li>
                              <li><a href="blog-detail.html">Single Blog</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Authentication<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="login.html">Sign In</a></li>
                              <li><a href="register.html">Sign Up</a></li>
                              <li><a href="forgot-password.html">Forgot Password</a></li>
                              <li><a href="two-factor-auth.html">Two factor authentication</a></li>
                            </ul>
                          </li>
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="career-page.html">Career Page</a></li>
                          <li><a href="help-center.html">Help Center</a></li>
                          <li><a href="faq.html">FAQ's</a></li>
                          <li><a href="404.html">Error Page</a></li>
                          <li><a href="pricing.html">Pricing</a></li>
                          <li><a href="privacy-policy.html">Privacy Policy</a></li>
                          <li><a href="JavaScript:Void(0);">Contact Us<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="contact-v1.html">Contact V.01</a></li>
                              <li><a href="contact-v2.html">Contact V0.2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Menu<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu xxl-menu">
                          <li>
                            <a href="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i className="fa-solid fa-spa" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Stays</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-hotel.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i className="fa-solid fa-hotel" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-flight.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i className="fa-solid fa-plane" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Flight</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-rental.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i className="fa-solid fa-eye" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Rental</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-car.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i className="fa-brands fa-dropbox" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i className="fa-solid fa-person-walking-luggage" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Destination</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="../documantion/index.html" target="_blank">Docs</a></li>
                    </ul>
                    <ul className="nav-menu nav-menu-social align-to-right">
                      <li className="currencyDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                      </li>
                      <li className="languageDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                      </li>
                      <li className="list-buttons">
                        <a href="#" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* ============================ Booking Title ================================== */}
            <section className="bg-cover position-relative" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-9 col-md-12">
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-captions">
                        <h1 className="xl-heading text-light">Career with GeoTrip</h1>
                      </div>
                    </div>
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-form">
                        <form className="frm-career bg-white rounded-2 p-2">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-10 col-9">
                              <div className="form-group mb-0 position-relative">
                                <input type="text" className="form-control border-0 ps-5" placeholder="Search Keyword..." />
                                <span className="fa-solid fa-location-dot position-absolute top-50 start-0 translate-middle-y ms-2 text-primary fs-3" />
                              </div>
                            </div>
                            <div className="col-md-2 col-3 text-end">
                              <button className="btn btn-primary" type="button"><i className="fa-solid fa-magnifying-glass" /></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fpc-banner" />
            </section>
            {/* ============================ Booking Title ================================== */}
            {/* ============================ Articles Section ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2><span className="text-primary">24</span> Jobs Active on GeoTrip</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-xl-5 g-4">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-chalkboard fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Maintainence</h5>
                              <p className="career-jbs text-md">58+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-server fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Server &amp; Management</h5>
                              <p className="career-jbs text-md">21+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-uikit fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">UI/UX Interface</h5>
                              <p className="career-jbs text-md">34+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-layer-group fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Product Brand Design</h5>
                              <p className="career-jbs text-md">05+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-paypal fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Payment Methode Developer</h5>
                              <p className="career-jbs text-md">12+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-business-time fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Team Leader</h5>
                              <p className="career-jbs text-md">10+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-solid fa-file-word fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Content Writer</h5>
                              <p className="career-jbs text-md">02+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="career-single-wrap">
                      <a href="career-page" className="careerBox">
                        <div className="careerBox-flex d-flex align-items-end justify-content-between">
                          <div className="careerBoxfl01 d-flex align-items-start">
                            <div className="careerBoxflicon flex-shrink-0">
                              <i className="fa-brands fa-firefox fs-3 icons" />
                            </div>
                            <div className="careerBoxflcaps ps-3">
                              <h5 className="career-tlt fs-6 mb-1">Work Management</h5>
                              <p className="career-jbs text-md">07+ Active Jobs</p>
                            </div>
                          </div>
                          <div className="careerBox-link"><i className="fa-solid fa-arrow-right-long" /></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-flex align-items-center justify-content-center mt-5 mx-auto text-center">
                      <button type="button" className="btn btn-light-primary rounded-pill px-5 fw-medium">Load More Jobs</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Articles Section End ================================== */}
            {/* ============================ Footer Start ================================== */}
            <footer className="footer skin-dark-footer">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget">
                        <div className="d-flex align-items-start flex-column mb-3">
                          <div className="d-inline-block"><img src="assets/img/logo-light.png" className="img-fluid" width={160} alt="Footer Logo" /></div>
                        </div>
                        <div className="footer-add pe-xl-3">
                          <p>We make your dream more beautiful &amp; enjoyful with lots of happiness.</p>
                        </div>
                        <div className="foot-socials">
                          <ul>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-facebook" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-linkedin" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-google-plus" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-twitter" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-dribbble" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Navigation</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">Talent Marketplace</a></li>
                          <li><a href="JavaScript:Void(0);">Payroll Services</a></li>
                          <li><a href="JavaScript:Void(0);">Direct Contracts</a></li>
                          <li><a href="JavaScript:Void(0);">Hire Worldwide</a></li>
                          <li><a href="JavaScript:Void(0);">Hire in the USA</a></li>
                          <li><a href="JavaScript:Void(0);">How to Hire</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">Our Resources</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">Free Business tools</a></li>
                          <li><a href="JavaScript:Void(0);">Affiliate Program</a></li>
                          <li><a href="JavaScript:Void(0);">Success Stories</a></li>
                          <li><a href="JavaScript:Void(0);">Upwork Reviews</a></li>
                          <li><a href="JavaScript:Void(0);">Resources</a></li>
                          <li><a href="JavaScript:Void(0);">Help &amp; Support</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Company</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">About Us</a></li>
                          <li><a href="JavaScript:Void(0);">Leadership</a></li>
                          <li><a href="JavaScript:Void(0);">Contact Us</a></li>
                          <li><a href="JavaScript:Void(0);">Investor Relations</a></li>
                          <li><a href="JavaScript:Void(0);">Trust, Safety &amp; Security</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                        <h4 className="widget-title">Payment Methods</h4>
                        <div className="pmt-wrap">
                          <img src="https://placehold.co/300x50" className="img-fluid" alt="" />
                        </div>
                        <div className="our-prtwrap mt-4">
                          <div className="prtn-title">
                            <p className="text-light opacity-75 fw-medium">Our Partners</p>
                          </div>
                          <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom border-top">
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                        <li><a href="#">Terms of services</a></li>
                        <li className="ms-3"><a href="#">Privacy Policies</a></li>
                        <li className="ms-3"><a href="#">Cookies</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* ============================ Footer End ================================== */}
            {/* Log In Modal */}
            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Sign In / Register</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body">
                    <div className="modal-login-form py-4 px-md-3 px-0">
                      <form>
                        <div className="form-floating mb-4">
                          <input type="email" className="form-control" placeholder="name@example.com" />
                          <label>User Name</label>
                        </div>
                        <div className="form-floating mb-4">
                          <input type="password" className="form-control" placeholder="Password" />
                          <label>Password</label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                        </div>
                        <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                          <div className="modal-flex-first">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                              <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                            </div>
                          </div>
                          <div className="modal-flex-last">
                            <a href="JavaScript:Void(0);" className="text-primary fw-medium">Forget Password?</a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="prixer px-3">
                      <div className="devider-wraps position-relative">
                        <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                      </div>
                    </div>
                    <div className="social-login py-4 px-2">
                      <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer align-items-center justify-content-center">
                    <p>Don't have an account yet?<a href="signup.html" className="text-primary fw-medium ms-1">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Print Invoice */}
            <div className="modal modal-lg fade" id="invoice" tabIndex={-1} role="dialog" aria-labelledby="invoicemodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered invoice-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Download your invoice</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body">
                    <div className="invoiceblock-wrap p-3">
                      {/* Header */}
                      <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                        <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                          <div className="inv-fliop01">
                            <div className="square--60 circle bg-light-primary text-primary"><i className="fa-solid fa-file-invoice fs-2" /></div>
                          </div>
                          <div className="inv-fliop01 ps-3">
                            <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">Invoice #3256425</span>
                            <span className="text-sm text-muted lh-2"><i className="fa-regular fa-calendar me-1" />Issued Date 12 Jul
                              2023</span>
                          </div>
                        </div>
                        <div className="inv-fliop02"><span className="label text-success bg-light-success">Paid</span></div>
                      </div>
                      {/* Invoice Body */}
                      <div className="invoice-body">
                        {/* Invoice Top Body */}
                        <div className="invoice-bodytop">
                          <div className="row align-items-start justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>From</h6>
                                <p className="text-md lh-2 mb-0">#782 Baghambari, Poudery Colony<br />Shivpuras Town,
                                  Canada<br />QBH230542 USA</p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>To</h6>
                                <p className="text-md lh-2 mb-0">Dhananjay Verma/ Brijendra Mani<br />220 K.V Jail Road Hydel
                                  Colony<br />271001 Gonda, UP</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Invoice Mid Body */}
                        <div className="invoice-bodymid py-2">
                          <ul className="gray rounded-3 p-3 m-0">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Account No.:</span>
                              <span className="fw-semibold text-muted-2 text-md">************4562</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Reference ID:</span>
                              <span className="fw-semibold text-muted-2 text-md">#2326524</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Pay by:</span>
                              <span className="fw-semibold text-muted-2 text-md">25 Aug 2023</span>
                            </li>
                          </ul>
                        </div>
                        {/* Invoice bott Body */}
                        <div className="invoice-bodybott py-2 mb-2">
                          <div className="table-responsive border rounded-2">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Item</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Qut.</th>
                                  <th scope="col">Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">king Bed in Royal Resort</th>
                                  <td>$514</td>
                                  <td>03</td>
                                  <td>$514</td>
                                </tr>
                                <tr>
                                  <th scope="row">Breakfast for 3</th>
                                  <td>$214</td>
                                  <td>03</td>
                                  <td>$214</td>
                                </tr>
                                <tr>
                                  <th scope="row">Tax &amp; VAT</th>
                                  <td>$78</td>
                                  <td>-</td>
                                  <td>$772.40</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="invoice-bodyaction">
                          <div className="d-flex text-end justify-content-end align-items-center">
                            <a href="#" className="btn btn-sm btn-light-success fw-medium me-2">Download Invoice</a>
                            <a href="#" className="btn btn-sm btn-light-primary fw-medium me-2">Print Invoice</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Choose Currency Modal */}
            <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body">
                    <div className="allCurrencylist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Pound Sterling</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency active" href="#">
                                <div className="text-dark text-md fw-medium">Indian Rupees</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Euro</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Thai Baht</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Currencies</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Property currency</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Argentine Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Brazilian Real</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Chilean Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Colombian Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Danish Krone</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Japanese Yen</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Choose Countries Modal */}
            <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body">
                    <div className="allCountrieslist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry active" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Euro</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Countries</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="fa-solid fa-sort-up" /></a>
          </div>
          {/* ============================================================== */}
          {/* End Wrapper */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* All Jquery */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* This page plugins */}
          {/* ============================================================== */}
        </div>
      );
    }

export default CareerPage;