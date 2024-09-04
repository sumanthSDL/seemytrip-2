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
import { Link } from 'react-router-dom';
import {trainImage, login } from '../assets/images';

const Login = () => {
      return (
        <div>
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          {/* ============================================================== */}
          {/* Main wrapper - style you can find in pages.scss */}
          {/* ============================================================== */}
          <div id="main-wrapper">
            {/* ============================== Login Section ================== */}
            <section className="py-5">
              <div className="container">
                <div className="row justify-content-center align-items-center m-auto">
                  <div className="col-12">
                    <div className="bg-mode shadow rounded-3 overflow-hidden">
                      <div className="row g-0">
                        {/* Vector Image */}
                        <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                          <div className="p-3 p-lg-5">
                            <img src= {login} className="img-fluid" alt="" />
                          </div>
                          {/* Divider */}
                          <div className="vr opacity-1 d-none d-lg-block" />
                        </div>
                        {/* Information */}
                        <div className="col-lg-6 order-1">
                          <div className="p-3 p-sm-4 p-md-5">
                            {/* Logo */}
                            <Link to="/">
                              <img className="img-fluid mb-4" src={trainImage} width={70} alt="logo" />
                            </Link>
                            {/* Title */}
                            <h1 className="mb-2 fs-2">Welcome Back Adam!</h1>
                            <p className="mb-0">Are you new here?<Link to="/register" className="fw-medium text-primary"> Create an
                                account</Link></p>
                            {/* Form START */}
                            <form className="mt-4 text-start">
                              <div className="form py-4">
                                <div className="form-floating mb-4">
                                  <input type="email" className="form-control" placeholder="name@example.com" required />
                                  <label>User Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                  <input type="password" className="form-control" id="password-field" name="password" placeholder="Password" required />
                                  <label>Password</label>
                                  <span className="toggle-password position-absolute top-50 end-0 translate-middle-y me-3 fa-regular fa-eye" />
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
                              </div>
                              {/* Divider */}
                              <div className="prixer px-3">
                                <div className="devider-wraps position-relative">
                                  <div className="devider-text text-muted-2 text-md">Sign In with Socials</div>
                                </div>
                              </div>
                              {/* Google and facebook button */}
                              <div className="social-login py-4 px-md-2">
                                <ul className="row align-items-center justify-content-center g-3 p-0 m-0">
                                  <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-facebook color--facebook fs-2" /></a></li>
                                  <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></a></li>
                                  <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></a></li>
                                  <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></a></li>
                                  <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-twitter color--twitter fs-2" /></a></li>
                                </ul>
                              </div>
                              {/* Copyright */}
                              <div className="text-primary-hover mt-3 text-center"> Copyrights ©2023 GeoTrip.com. Build by <a href="https://www.themezhub.com/">Themezhub</a>. </div>
                            </form>
                            {/* Form END */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================== Login Section End ================== */}
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


export default Login;
