import React from 'react'
import Footer from '../footer/Footer';

const AllProducts = () => {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">All Products</h4>
                  <p class="card-description">
                    See all the products and edit or update by clicking on
                    <code>Action column</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Category</th>
                          <th>Product Name</th>
                          <th>Regular Price</th>
                          <th>Discount (%)</th>
                          <th>Sale Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mekhela Sador - Paat Muga</td>
                          <td>Traditional Brand New Mekhela Set</td>
                          <td>₹ 42,000</td>
                          <td>20</td>
                          <td>33600</td>
                          <td>
                            <span className='text-danger'>Delete</span>
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
}

export default AllProducts
