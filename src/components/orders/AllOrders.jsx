import React from 'react';
import Footer from '../footer/Footer';

const AllOrders = () => {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">All Orders</h4>
                  <p class="card-description">
                    See all list of orders and also see more details by clicking
                    on
                    <code>Action column</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Order ID</th>
                          <th>Placed</th>
                          <th>Transaction ID</th>
                          <th>Amount</th>
                          <th>Placed By</th>
                          <th>Address</th>
                          <th>Payment Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>KE00001</td>
                          <td>Hengrabari , Ghy</td>
                          <td>00981189990</td>
                          <td>20,000</td>
                          <td>Ankur Chetry</td>
                          <td>Hengrabari , Ghy</td>
                          <td>
                            <span class="badge badge-success">Paid</span>
                          </td>
                          <td>
                             <button type="button" class="btn btn-primary btn-sm">View</button>
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

export default AllOrders
