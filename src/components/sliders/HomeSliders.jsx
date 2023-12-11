import React from "react";
import Footer from "../footer/Footer";
import slider__ImageOne from "../../assets/image/dash-banner.jpg"


const HomeSliders = () => {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 class="card-title">All Sliders</h4>
                      <p class="card-description">
                        See all the Sliders and edit or update by clicking on
                        <code>Particular Slider</code>
                      </p>
                    </div>
                    <div className="col-md-6 text-right">
                      <button className="btn btn-primary">
                        + Add New Slider
                      </button>
                    </div>
                  </div>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Slider Image</th>
                          <th>Use Slider</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <img
                              src={slider__ImageOne}
                              alt=""
                              className="image-fluid"
                            />
                          </td>
                          <td>Yes</td>
                          <td>
                            <span className="text-danger">Delete</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- content-wrapper ends --> */}
        {/* <!-- partial:../../partials/_footer.html --> */}
        <Footer />
        {/* <!-- partial --> */}
      </div>
    </>
  );
};

export default HomeSliders;
