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
import Header02 from './header02';
import { Link } from 'react-router-dom';

const FlightList01 = () => {
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
            <Header02/>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* ============================ Hero Banner  Start================================== */}
            <div className="py-5 bg-primary position-relative">
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap position-relative">
                      <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
                                <label className="text-light text-uppercase opacity-75">Leaving From</label>
                                <select className="leaving form-control fw-bold">
                                  <option value>Select</option>
                                  <option value="ny">New York</option>
                                  <option value="sd">San Diego</option>
                                  <option value="sj">San Jose</option>
                                  <option value="ph">Philadelphia</option>
                                  <option value="nl">Nashville</option>
                                  <option value="sf">San Francisco</option>
                                  <option value="hu">Houston</option>
                                  <option value="sa">San Antonio</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group hdd-arrow mb-0">
                                <label className="text-light text-uppercase opacity-75">Going To</label>
                                <select className="goingto form-control fw-bold">
                                  <option value>Select</option>
                                  <option value="ny">New York</option>
                                  <option value="sd">San Diego</option>
                                  <option value="sj">San Jose</option>
                                  <option value="ph">Philadelphia</option>
                                  <option value="nl">Nashville</option>
                                  <option value="sf">San Francisco</option>
                                  <option value="hu">Houston</option>
                                  <option value="sa">San Antonio</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Journey Date</label>
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-whites text-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </row> */}
              </div>
            </div>
            {/* ============================ Hero Banner End ================================== */}
            {/* ============================ All Flits Search Lists Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                  {/* Sidebar Filter Options */}
                  <div className="col-xl-3 col-lg-4 col-md-12">
                    <div className="filter-searchBar bg-white rounded-3">
                      <div className="filter-searchBar-head border-bottom">
                        <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
                          <div className="searchBar-headerfirst">
                            <h6 className="fw-bold fs-5 m-0">Filters</h6>
                            {/* <p className="text-md text-muted m-0">Showing 180 Flights</p> */}
                          </div>
                          <div className="searchBar-headerlast text-end">
                            <a href="#" className="text-md fw-medium text-primary active">Clear All</a>
                          </div>
                        </div>
                      </div>
                      <div className="filter-searchBar-body">
                        {/* Departure & Return */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Quick Filters</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="baggage" />
                                  <label className="form-check-label" htmlFor="baggage">AC</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightmeal" />
                                  <label className="form-check-label" htmlFor="inflightmeal">Available</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightenter" />
                                  <label className="form-check-label" htmlFor="inflightenter">Departure after 6 PM</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flswifi" />
                                  <label className="form-check-label" htmlFor="flswifi">Arrival before 12 PM</label>
                                </div>
                              </li>
                              <li className="col-12">
                                {/* <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flusbport" />
                                  <label className="form-check-label" htmlFor="flusbport">Power/USB Port</label>
                                </div> */}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Onward Stops */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Ticket Types</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="baggage" />
                                  <label className="form-check-label" htmlFor="baggage">Free Cancellation</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightmeal" />
                                  <label className="form-check-label" htmlFor="inflightmeal">Trip Guarantee</label>
                                </div>
                              </li>
                              {/* <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightenter" />
                                  <label className="form-check-label" htmlFor="inflightenter">In-flight Entertainment</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flswifi" />
                                  <label className="form-check-label" htmlFor="flswifi">WiFi</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flusbport" />
                                  <label className="form-check-label" htmlFor="flusbport">Power/USB Port</label>
                                </div>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                        {/* Pricing */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Journey Class Filters</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="baggage" />
                                  <label className="form-check-label" htmlFor="baggage">1st Class AC -  
                                  1A</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightmeal" />
                                  <label className="form-check-label" htmlFor="inflightmeal">2 Tier AC -  
                                  2A</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightenter" />
                                  <label className="form-check-label" htmlFor="inflightenter">3 Tier AC -  
                                  3A</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flswifi" />
                                  <label className="form-check-label" htmlFor="flswifi">Sleeper -  
                                  SL</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flusbport" />
                                  <label className="form-check-label" htmlFor="flusbport">
                                  Second Sitting -2S</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Facilities */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Facilities</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="baggage" />
                                  <label className="form-check-label" htmlFor="baggage">Baggage</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightmeal" />
                                  <label className="form-check-label" htmlFor="inflightmeal">In-flight Meal</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightenter" />
                                  <label className="form-check-label" htmlFor="inflightenter">In-flight Entertainment</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flswifi" />
                                  <label className="form-check-label" htmlFor="flswifi">WiFi</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flusbport" />
                                  <label className="form-check-label" htmlFor="flusbport">Power/USB Port</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Popular Flights */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Facilities</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="baggage" />
                                  <label className="form-check-label" htmlFor="baggage">Baggage</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightmeal" />
                                  <label className="form-check-label" htmlFor="inflightmeal">In-flight Meal</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="inflightenter" />
                                  <label className="form-check-label" htmlFor="inflightenter">In-flight Entertainment</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flswifi" />
                                  <label className="form-check-label" htmlFor="flswifi">WiFi</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flusbport" />
                                  <label className="form-check-label" htmlFor="flusbport">Power/USB Port</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* All Flight Lists */}
                  <div className="col-xl-9 col-lg-8 col-md-12">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                          <div className="flsx-first me-2">
                            <div className="bg-white rounded py-2 px-3">
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                <label className="form-check-label ms-1" htmlFor="mapoption">Map</label>
                              </div>
                            </div>
                          </div>
                          <div className="flsx-first mt-sm-0 mt-2">
                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                              <li className="nav-item" role="presentation">
                                <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Our Trending</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Popular</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Lowest Price</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center g-4 mt-2">
                    {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Offer Coupon Box */}
                          <div className="col-xl-12 col-lg12 col-md-12">
                            <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                              <div className="d-md-flex align-items-center justify-content-start">
                                <div className="flx-icon-first mb-md-0 mb-3">
                                  <div className="square--60 circle bg-white"><i className="fa-solid fa-gift fs-3 text-success" /></div>
                                </div>
                                <div className="flx-caps-first ps-2">
                                  <h6 className="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                                  <p className="text-light mb-0">Book FlightsEffortless and Earn $50+ for each booking with Booking.com
                                  </p>
                                </div>
                              </div>
                              <div className="flx-last text-md-end mt-md-0 mt-4">
                                <button type="button" className="btn btn-whites fw-medium full-width text-dark px-xl-4">Get Started</button>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Flight */}
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="train-availability-card bg-white rounded-3 p-3">
                              <div className="row gy-4 align-items-center justify-content-between">
                                {/* Train Info Header */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                      <h5 className="mb-1">12976 JP MYSORE EXP</h5>
                                      <div className="text-muted">Runs on: S M T W T F S • Mail/Express</div>
                                    </div>
                                    <Link to="/booking-page" >
                                      <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                  </div>
                                </div>
                                {/* Train Details */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">00:10</div>
                                      <div className="text-muted text-sm fw-medium">KCG</div>
                                    </div>
                                    <div className="col text-center">
                                      <div className="train-timing">
                                        <div className="text-muted text-sm">12hr 45min</div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="text-dark fw-bold">12:55</div>
                                      <div className="text-muted text-sm fw-medium">SBC</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Train Class Availability */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="row text-center gx-2 gy-2">
                                    <div className="col">
                                      <div  className=" availability-card bg-success-subtle  rounded-2 p-2 " >
                                        <h5 className="mb-1">SL</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div> 
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">CC</h5>
                                        <div className="price">₹855</div>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3E</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-success-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">3A</h5>
                                        <div className="not-available">AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">2A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="availability-card bg-danger-subtle bg-opacity-50 rounded-2 p-2">
                                        <h5 className="mb-1">1A</h5>
                                        <div className="not-available">NOT AVL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Last Updated */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="text-muted text-sm text-center mt-3">Updated: 11hr 15min ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                      <div className="col-xl-12 col-lg-12 col-12">
                        <div className="pags card py-2 px-5">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination m-0 p-0">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true"><i className="fa-solid fa-arrow-left-long" /></span>
                                </a>
                              </li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true"><i className="fa-solid fa-arrow-right-long" /></span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ All Flits Search Lists End ================================== */}
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
            {/* Book Flight */}
            <div className="modal modal-lg fade" id="bookflight" tabIndex={-1} aria-labelledby="bookflightModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="bookflightModalLabel">Your Flight To Singapore</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body px-4 py-4 px-xl-5 px-lg-5">
                    <div className="upper-section01 mb-3 mt-3">
                      <div className="alert alert-success" role="alert">
                        13% lower CO2 emissions than the average of all flights we offer for this route
                      </div>
                    </div>
                    <div className="airLines-fullsegment">
                      {/* Departure Route */}
                      <div className="segmentDeparture-wrap">
                        <div className="segmentDeparture-head mb-3">
                          <h4 className="fs-5 m-0">Flight to Singapore</h4>
                          <p className="text-muted-2 fw-medium text-md m-0">1 Stop · 19h 46m</p>
                        </div>
                        <div className="segmentDeparture-block">
                          <div className="segmentDeparture blockfirst">
                            <ul>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">LKO . Lucknow</h6>
                                  <p className="text-muted text-md m-0">Sat 7 Oct · 21:15</p>
                                </div>
                              </li>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">DEL . Delhi</h6>
                                  <p className="text-muted text-md m-0">Sat 7 Oct · 22:30</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="segmentDeparture-blocklast">
                            <div className="d-flex align-items-start timeline-stprs">
                              <div className="timeline-stprsthumb"><img src="https://placehold.co/110x110" className="img-fluid" width={40} alt="" />
                              </div>
                              <div className="timeline-stprscaps ps-2">
                                <p className="text-sm m-0">Air India<br />AI812 · Economy<br />Flight time 1h 00m
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="segmentDeparture-overlay">
                          <div className="css-1894l3t"><span className="text-muted"><i className="fa-regular fa-clock me-1" />Layover 1h
                              36m</span></div>
                        </div>
                        <div className="segmentDeparture-block">
                          <div className="segmentDeparture blockfirst">
                            <ul>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">LKO . Lucknow</h6>
                                  <p className="text-muted text-md m-0">Sat 7 Oct · 21:15</p>
                                </div>
                              </li>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">DEL . Delhi</h6>
                                  <p className="text-muted text-md m-0">Sat 7 Oct · 22:30</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="segmentDeparture-blocklast">
                            <div className="d-flex align-items-start timeline-stprs">
                              <div className="timeline-stprsthumb"><img src="https://placehold.co/110x110" className="img-fluid" width={40} alt="" />
                              </div>
                              <div className="timeline-stprscaps ps-2">
                                <p className="text-sm m-0">Air India<br />AI812 · Economy<br />Flight time 1h 00m
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Returen Route */}
                      <div className="segmentDeparture-wrap mt-5">
                        <div className="segmentDeparture-head mb-3">
                          <h4 className="fs-5 m-0">Flight to Lucknow</h4>
                          <p className="text-muted-2 fw-medium text-md m-0">Non Stop · 19h 46m</p>
                        </div>
                        <div className="segmentDeparture-block">
                          <div className="segmentDeparture blockfirst">
                            <ul>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">SIN · Singapore Changi Apt</h6>
                                  <p className="text-muted text-md m-0">Sat 8 Oct · 21:15</p>
                                </div>
                              </li>
                              <li>
                                <div className="segmenttriox">
                                  <h6 className="fs-6 fw-medium m-0">Loc . Lucknow</h6>
                                  <p className="text-muted text-md m-0">Sat 7 Oct · 22:30</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="segmentDeparture-blocklast">
                            <div className="d-flex align-items-start timeline-stprs">
                              <div className="timeline-stprsthumb"><img src="https://placehold.co/110x110" className="img-fluid" width={40} alt="" />
                              </div>
                              <div className="timeline-stprscaps ps-2">
                                <p className="text-sm m-0">IndiGo<br />6E1012 · Economy<br />Flight time 5h 20m
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="airLines-includedbaggases border-top border-bottom mt-4 py-4">
                      <div className="departure-servicess mb-4">
                        <h5 className="fs-6 mb-4">Flight To Singapore</h5>
                        <div className="single-includedbaggases d-flex align-items-center justify-content-between mb-3">
                          <div className="includedbaggases-blc d-flex align-items-start">
                            <div className="includedbaggases-icons"><i className="fa-solid fa-suitcase-rolling fs-5" /></div>
                            <div className="includedbaggases-caps ps-2">
                              <p className="m-0 lh-base">1 personal item</p>
                              <p className="m-0">Must go under the seat in front of you</p>
                            </div>
                          </div>
                          <div className="text-end"><span className="label bg-light-success text-success">Included</span></div>
                        </div>
                        <div className="single-includedbaggases d-flex align-items-center justify-content-between">
                          <div className="includedbaggases-blc d-flex align-items-start">
                            <div className="includedbaggases-icons"><i className="fa-solid fa-briefcase fs-5" /></div>
                            <div className="includedbaggases-caps ps-2">
                              <p className="m-0 lh-base">1 cabin bag</p>
                              <p className="m-0">Max weight 8 kg</p>
                            </div>
                          </div>
                          <div className="text-end"><span className="label bg-light-success text-success">Included</span></div>
                        </div>
                      </div>
                      <div className="departure-servicess">
                        <h5 className="fs-6 mb-4">Flight To Lucknow</h5>
                        <div className="single-includedbaggases d-flex align-items-center justify-content-between mb-3">
                          <div className="includedbaggases-blc d-flex align-items-start">
                            <div className="includedbaggases-icons"><i className="fa-solid fa-suitcase-rolling fs-5" /></div>
                            <div className="includedbaggases-caps ps-2">
                              <p className="m-0 lh-base">1 personal item</p>
                              <p className="m-0">Must go under the seat in front of you</p>
                            </div>
                          </div>
                          <div className="text-end"><span className="label bg-light-success text-success">Included</span></div>
                        </div>
                        <div className="single-includedbaggases d-flex align-items-center justify-content-between">
                          <div className="includedbaggases-blc d-flex align-items-start">
                            <div className="includedbaggases-icons"><i className="fa-solid fa-briefcase fs-5" /></div>
                            <div className="includedbaggases-caps ps-2">
                              <p className="m-0 lh-base">1 cabin bag</p>
                              <p className="m-0">Max weight 8 kg</p>
                            </div>
                          </div>
                          <div className="text-end"><span className="label bg-light-success text-success">Included</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="airLines-priceinfoy1 pt-4">
                      <div className="airLines-flex d-flex align-items-center justify-content-between">
                        <div className="airLinesyscb">
                          <h4 className="fs-4 m-0">US$479</h4>
                          <p className="text-md m-0">Total price for all travellers</p>
                        </div>
                        <div className="flds-ytu"><button className="btn btn-primary btn-md fw-medium">Book Now</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

    export default FlightList01;