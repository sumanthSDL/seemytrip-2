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

const Blogdetail = () => {
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
            {/* ============================ Articles Thumb Section ================================== */}
            <section className="p-0">
              <div className="thumb-wrap">
                <img src="https://placehold.co/2200x1200" className="img-fluid full-width ht-500 object-fit" alt="" />
              </div>
            </section>
            {/* ============================ Articles Thumb Section ================================== */}
            {/* ============================ Articles Deatil Section ================================== */}
            <section className="p-0 position-relative mt-n6">
              <div className="container">
                <div className="row g-4">
                  {/* Article content */}
                  <div className="col-11 col-lg-10 mx-auto">
                    <div className="bg-white shadow rounded-4 p-4">
                      {/* Badge */}
                      <div className="d-inline-flex mb-2"><span className="label text-success bg-light-success">Software &amp; Tools</span></div>
                      {/* Title */}
                      <h1 className="fs-3">Top 20 AI Tools To Make Your Website More Attractive</h1>
                      <p className="mb-2">Commercial publishing platforms and conten Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder.</p>
                      {/* List */}
                      <ul className="nav nav-divider align-items-center p-0">
                        <li className="nav-item ps-0">
                          <div className="nav-link">
                            <div className="d-flex align-items-center">
                              {/* Avatar */}
                              <div className="avatar avatar-lg">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </div>
                              {/* Info */}
                              <div className="ms-2">
                                <h6 className="mb-0"><a href="#">Adam Wisdom</a></h6>
                                <p className="mb-0"><span>10 Sep 2023</span><span className="text-muted-2 mx-2">.</span><span>2 min read</span></p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item text-muted text-md" />
                        <li className="nav-item text-muted text-md" />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Articles Detail Section End ================================== */}
            {/* ============================ Article Description ========================================== */}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <p><span className="square--60 rounded fs-4 bg-light-primary d-inline-flex me-2 fw-bold text-primary">I</span> n a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text</p>
                    <h5 className="my-4">There are some important tools for AI</h5> 
                    <div className="row g-4">
                      {/* List */}
                      <div className="col-md-12 col-lg-12">
                        <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness</p>
                        <ul className="simple-list">
                          <li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem</li>
                          <li>The Latin scholar H. Rackham translated the above in 1914</li>
                          <li>But I must explain to you how all this mistaken idea of denouncing</li>
                          <li>Pleasure and praising pain was born and I will give you a complete</li>
                          <li>Pain was born and I will give you a complete</li>
                        </ul>
                      </div>
                    </div>
                    <p className="pb-0 pt-3">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    {/* Blockquote */}
                    <blockquote className="bg-light-primary rounded text-center p-3 p-md-4 my-4">
                      <h6 className="fw-normal"><i className="fa-solid fa-quote-left me-2" />Asking the client to pay no attention Lorem Ipsum isn't hard as it doesn’t make sense in the first place, that will limit any initial interest soon enough. Try telling a client to ignore draft copy however, and you're up to something you can't win.<i className="fa-solid fa-quote-right ms-2" /></h6>
                      <div className="blockquote-footer mb-0 fs-6 mt-3 text-primary fw-medium">
                        Rouze M. Alhatri
                      </div>
                    </blockquote>
                    <p className="mt-3">In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.</p>
                    <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p> 
                    {/* Author info */}
                    <div className="bg-mode border rounded p-4">
                      {/* Avatar and info */}
                      <div className="d-flex">
                        {/* Avatar */}
                        <a href="#">
                          <div className="avatar avatar-lg me-2 me-md-4">
                            <img className="avatar-img rounded-circle" src="https://placehold.co/500x500" alt="avatar" />
                          </div>
                        </a>
                        {/* Info */}
                        <div>
                          <h4 className="m-0"><a href="#">Adam Wisdom</a></h4>
                          <small>GeoTrip Senior Writer</small>
                        </div>
                      </div>
                      {/* Content */}
                      <p className="my-3">Using dummy content or fake elegant design can quickly begin to bloat with unexpected content information in the Web design process can result in products with unrealistic assumptions and potentially serious design flaws. A seemingly.</p>
                      {/* Buttons */}
                      <div className="d-flex align-items-center justify-content-between">
                        {/* Social icons */}
                        <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link ps-0 pe-2 fs-5" href="#"><i className="fa-brands fa-facebook" /></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link px-2 fs-5" href="#"><i className="fa-brands fa-twitter" /></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link px-2 fs-5" href="#"><i className="fa-brands fa-google-plus" /></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link px-2 fs-5" href="#"><i className="fa-brands fa-linkedin" /></a>
                          </li>
                        </ul>					
                        {/* Button */}
                        <a href="#" className="btn btn-md btn-primary mb-0">Contact Author</a>
                      </div>
                    </div>
                    {/* Review poll START */}
                    <div className="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-4">
                      {/* Title */}
                      <h6 className="mb-0">Was this article helpful?</h6>
                      <small className="py-3 p-md-0 d-block">40 out of 84 found this helpful</small>
                      {/* Check buttons */}
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        {/* Yes button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                        <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio1"><i className="fa-regular fa-thumbs-up me-1" /> Yes</label>
                        {/* No button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio2"> No <i className="fa-regular fa-thumbs-down ms-1" /></label>
                      </div>
                    </div>
                    {/* Review poll END */}
                    {/* Social links and tags */}
                    <div className="d-lg-flex justify-content-lg-between mt-4">
                      {/* Social media button */}
                      <div className="align-items-center mb-3 mb-lg-0">
                        <h6 className="d-inline-block mb-2 me-4">Share This:</h6>
                        <ul className="list-inline hstack flex-wrap gap-3 h6 fw-normal mb-0">
                          <li className="list-inline-item"> <a className="text-facebook" href="#"><i className="fa-brands fa-facebook-square" /> Facebook</a> </li>
                          <li className="list-inline-item"> <a className="text-instagram-gradient" href="#"><i className="fa-brands fa-instagram-square" /> Instagram</a> </li>
                          <li className="list-inline-item"> <a className="text-twitter" href="#"><i className="fa-brands fa-twitter-square" /> Twitter</a> </li>
                        </ul>
                      </div>
                      {/* Popular tags */}
                      <div className="align-items-center">
                        <h6 className="d-inline-block mb-2 me-4">Popular Tags:</h6>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Article</a> </li>
                          <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Holiday</a> </li>
                          <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Destination</a> </li>
                          <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">GeoTrip</a> </li>
                        </ul>
                      </div>
                    </div>
                    {/* Social links and END */}
                  </div>	
                </div>
              </div>
            </section>
            {/* ============================ Article Description ========================================== */}
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


    export default Blogdetail;