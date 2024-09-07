const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 ">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4">
            <h5 className="mb-3 text-uppercase font-weight-bold">ROYALTY JACKETS</h5>
            <p className="text-secondary ">
              Start designing your own varsity jacket today with ROYALTY JACKET and create something truly unique.
            </p>
          </div>

          {/* Categories */}
          <div className="col-md-2">
            <h5 className="mb-3 text-uppercase font-weight-bold">CATEGORIES</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Varsity Jackets</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Hoodies</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Bomber Jackets</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Coach Jackets</a></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="col-md-3">
            <h5 className="mb-3 text-uppercase font-weight-bold">ADDITIONAL LINKS</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Shipping Policy</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Refund Policy</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Get Free Quote</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-3">
            <h5 className="mb-3 text-uppercase font-weight-bold">NEWSLETTER</h5>
            <form>
              <div className="form-group mb-2">
                <input type="email" className="form-control" placeholder="Newsletter Signup" />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">Submit</button>
            </form>

          
            <div className="mt-3">
              <p className="text-muted">You can also find us on:</p>
              <a href="#" className="text-white mr-3 text-decoration-none"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-white mr-3 text-decoration-none"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white text-decoration-none"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;