import 'bootstrap/dist/css/bootstrap.min.css';

export const Form = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4  fw-bold mb-5 ">Get In Touch</h1>
          <p className="lead">
            Simply fill in this form and we’ll get back to you. We’re more than happy to answer any question you might have, even to arrange a time to chat about your order.
          </p>
          <h2 className='fw-bold mb-4'>Royalty Jackets</h2>
          <ul className="list-unstyled ">
            <li className='mb-4'><strong >Faisal Munir Butt</strong></li>
            <li className='mb-4'><i className="fas fa-phone"></i> +1-718-255-7191</li>
            <li className='mb-4'><i className="fas fa-phone"></i> +1-307-205-6951</li>
            <li className='mb-4'><i className="fas fa-envelope"></i> info@royaltyjacket.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 5900 BALCONES AUSTIN TX 78731</li>
          </ul>
          <h3 className='mt-4 fw-bold mb-4'>You can also find us on:</h3>
          <ul className="list-inline">
            <li className="list-inline-item"><i className="fab fa-facebook fa-2x"></i></li>
            <li className="list-inline-item"><i className="fab fa-twitter fa-2x"></i></li>
            <li className="list-inline-item"><i className="fab fa-youtube fa-2x"></i></li>
          </ul>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group mb-4 ">
              <label htmlFor="name" className='fs-5 fw-bold text-secondary '>Name <span className="text-danger">*</span></label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control mr-2 pb-3 " 
                  placeholder="First"
                  id="firstName"
                />
                <input
                  type="text"
                  className="form-control  pb-3"
                  placeholder="Last"
                  id="lastName"
                />
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className='fs-5 fw-bold text-secondary '>Email  <span className="text-danger" >*</span> </label>
              <input type="email" className="form-control  pb-3" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className='fs-5 fw-bold text-secondary '>Comment or Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
