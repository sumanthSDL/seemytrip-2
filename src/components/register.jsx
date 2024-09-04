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
import { trainImage, login } from '../assets/images';


const Register = () => {
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
                            <img src={login} className="img-fluid" alt="" />
                          </div>
                          {/* Divider */}
                          <div className="vr opacity-1 d-none d-lg-block" />
                        </div>
                        {/* Information */}
                        <div className="col-lg-6 order-1">
                          <div className="p-4 p-sm-7">
                            {/* Logo */}
                            <Link to="/">
                              <img className="img-fluid mb-4" src={trainImage} width={70} alt="logo" />
                            </Link>
                            {/* Title */}
                            <h1 className="mb-2 fs-2">Create New Account</h1>
                            <p className="mb-0">Already a Member?<Link to= "/login" className="fw-medium text-primary"> Signin</Link></p>
                            {/* Form START */}
                            <form className="mt-4 text-start">
                              <div className="form py-4">
                                <div className="form-group">
                                  <label className="form-label">Enter email ID</label>
                                  <input type="email" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Enter Password</label>
                                  <div className="position-relative">
                                    <input type="password" className="form-control" id="password-field" name="password" placeholder="Password" />
                                    <span className="fa-solid fa-eye toggle-password position-absolute top-50 end-0 translate-middle-y me-3" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Confirm Password</label>
                                  <input type="password" className="form-control" placeholder="*********" />
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Create An
                                    Account</button>
                                </div>
                                <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                                  <div className="modal-flex-first">
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                                      <label className="form-check-label" htmlFor="savepassword">Keep me signed in</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Divider */}
                              <div className="prixer px-3">
                                <div className="devider-wraps position-relative">
                                  <div className="devider-text text-muted-2 text-md">Sign-Up with Socials</div>
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
export default Register;