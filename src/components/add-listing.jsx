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


const AddListing = () => {
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
            <div className="header header-dark">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <a className="nav-brand static-show" href="#"><img src="assets/img/logo-light.png" className="logo" alt="" /></a>
                    <a className="nav-brand mob-show" href="#"><img src={trainImage} className="logo" alt="" /></a>
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
                      <li className="active"><a href="home-stay.html"><i className="fa-solid fa-umbrella-beach me-2" />Stays</a></li>
                      <li><a href="home-flight.html"><i className="fa-solid fa-jet-fighter me-2" />Flights</a></li>
                      <li><a href="home-hotel.html"><i className="fa-solid fa-spa me-2" />Hotels</a></li>
                      <li><a href="home-rental.html"><i className="fa-solid fa-house-circle-check me-2" />Rental</a></li>
                      <li><a href="home-car.html"><i className="fa-solid fa-car me-2" />Cars</a></li>
                    </ul>
                    <ul className="nav-menu nav-menu-social align-to-right">
                      <li className="currencyDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                      </li>
                      <li className="languageDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                      </li>
                      <li className="list-buttons light">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</a>
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
            {/* ============================ Title Start ================================== */}
            <section className="bg-cover position-relative" style={{background: '#b22118 url(assets/img/bg2.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-9 col-md-12">
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-captions">
                        <h1 className="fs-1 lh-base text-light">Add Your Listing</h1>
                        <p className="text-light">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                          Occasionally the first Oration against Catiline is taken for type specimens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Title End ================================== */}
            {/* ============================ Booking Page ================================== */}
            <section className="gray-simple position-relative">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div id="stepper" className="bs-stepper stepper-outline mb-5">
                      <div className="bs-stepper-header">
                        {/* Step 1 */}
                        <div className="step active" data-target="#step-1">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger1">
                              <span className="bs-stepper-circle"><i className="fa-solid fa-check" /></span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">Basic Information</h6>
                          </div>
                        </div>
                        <div className="line" />
                        {/* Step 2 */}
                        <div className="step" data-target="#step-2">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger2">
                              <span className="bs-stepper-circle">2</span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">Listing Details</h6>
                          </div>
                        </div>
                        <div className="line" />
                        {/* Step 3 */}
                        <div className="step" data-target="#step-3">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger3">
                              <span className="bs-stepper-circle">3</span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">View &amp; Confirm</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <h2>Basic Information</h2>
                    {/* Basic Information */}
                    <div className="card rounded-3 mt-4 mb-4">
                      {/* Card header */}
                      <div className="card-header border-bottom">
                        {/* Title */}
                        <h5 className="mb-0"><i className="fa-brands fa-slack me-2" />Choose Listing Category</h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body">
                        <div className="row g-4">
                          {/* Choose type */}
                          <div className="col-12">
                            <label className="form-label">Choose listing Type<span className="text-danger">*</span></label>
                            <select className="form-control select">
                              <option>Select Type</option>
                              <option value={0}>Hotel</option>
                              <option value={1}>Villa</option>
                              <option value={2}>Property</option>
                              <option value={3}>Cabs</option>
                              <option value={4}>House</option>
                              <option value={5}>Destination</option>
                            </select>
                          </div>
                          {/* Listing Name */}
                          <div className="col-12">
                            <label className="form-label">Listing Name<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" placeholder="Enter place name" />
                            <small>A catchy name usually includes: House name - Room name - A tourist destination</small>
                          </div>
                          {/* listing type */}
                          <div className="col-12">
                            <label className="form-label">Is your listing set as a personal or guest use *</label>
                            <div className="d-sm-flex">
                              {/* Radio */}
                              <div className="form-check radio-bg-light me-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Entire Place
                                </label>
                              </div>
                              {/* Radio */}
                              <div className="form-check radio-bg-light me-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                  For Guest
                                </label>
                              </div>
                              {/* Radio */}
                              <div className="form-check radio-bg-light">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                  For Personal
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Short description */}
                          <div className="col-12">
                            <label className="form-label">Short description<span className="text-danger">*</span></label>
                            <textarea className="form-control ht-200" placeholder="Enter keywords" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                    {/* Listing Address Information */}
                    <div className="card rounded-3 mb-4">
                      {/* Card header */}
                      <div className="card-header border-bottom">
                        {/* Title */}
                        <h5 className="mb-0"><i className="fa-solid fa-location-dot me-2" />Listing Locations</h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body">
                        <div className="row g-4">
                          {/* Choose Country */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Country/Region<span className="text-danger">*</span></label>
                            <select className="form-control select">
                              <option>Select Country</option>
                              <option value={0}>India</option>
                              <option value={1}>United State</option>
                              <option value={2}>United Kingdom</option>
                              <option value={3}>Australia</option>
                              <option value={4}>Japan</option>
                              <option value={5}>China</option>
                            </select>
                          </div>
                          {/* Choose State */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Sate<span className="text-danger">*</span></label>
                            <select className="form-control select">
                              <option>Select State</option>
                              <option value={0}>Denver</option>
                              <option value={1}>New York</option>
                              <option value={2}>California</option>
                              <option value={3}>Housten</option>
                              <option value={4}>Liverpool</option>
                              <option value={5}>Canada</option>
                            </select>
                          </div>
                          {/* Listing City */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">City/Town<span className="text-danger">*</span></label>
                            <select className="form-control select">
                              <option>Select City</option>
                              <option value={0}>Denver</option>
                              <option value={1}>New York</option>
                              <option value={2}>California</option>
                              <option value={3}>Housten</option>
                              <option value={4}>Liverpool</option>
                              <option value={5}>Canada</option>
                            </select>
                          </div>
                          {/* Listing City */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Zip Code<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="zipcode" />
                          </div>
                          {/* Listing City */}
                          <div className="col-xl-12 col-lg-12 col-12">
                            <label className="form-label">Home/Street<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Street" />
                          </div>
                          {/* Listing City */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Latitude<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Enter Latitude" />
                          </div>
                          {/* Listing City */}
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Longitude<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Enter Longitude" />
                          </div>
                          {/* Short description */}
                          <div className="col-12">
                            <iframe className="full-width ht-400 grayscale rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" height={500} style={{border: 0}} aria-hidden="false" tabIndex={0} />
                          </div>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                    {/* Listing Address Information */}
                    <div className="card rounded-3 mt-4 mb-4">
                      {/* Card header */}
                      <div className="card-header border-bottom">
                        {/* Title */}
                        <h5 className="mb-0"><i className="fa-regular fa-images me-2" />Upload Gallery</h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body">
                        <div className="row g-4">
                          {/* Thumbnail */}
                          <div className="col-12">
                            <label className="form-label">Upload thumbnail image<span className="text-danger">*</span></label>
                            <input className="form-control" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                            <p className="small mb-0 mt-2"><b>Note:</b> Upload only jpg, png, gif only with 500x500px width adn
                              height.</p>
                          </div>
                          {/* Gallery */}
                          <div className="col-12">
                            <label className="form-label">Upload Gallery<span className="text-danger">*</span></label>
                            <form action="/target" className="dropzone rounded-3 border br-dashed border-2">
                              <div className="mx-auto mb-4 z-0">
                                <div className="square--60 circle text-primary bg-light-primary mx-auto my-3"><i className="fa-solid fa-arrow-up-from-bracket" /></div>
                              </div>
                            </form>
                            <p className="small mb-0 mt-2"><b>Note:</b> Upload only jpg, png, gif only with 1920x1000px width adn
                              height.</p>
                          </div>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                  </div>
                </div>
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="text-center d-flex align-items-center justify-content-center mt-4">
                      <a href="add-listing-step-02.html" className="btn btn-md btn-primary fw-semibold">Next<i className="fa-solid fa-arrow-right ms-2" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Booking Page End ================================== */}
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


    export default AddListing;