import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="container">
      <div className="row footer-content">
        <div className="col-xl-6 col-lg-7 col-md-8">
          <h2 className="mb-0">Do you want to know more or just have a question? write to us.</h2>
        </div>
        <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
          <Link href="/contact" className="btn btn-danger btn-lg">
            Contact form
          </Link>
        </div>
      </div>
      <div className="row footer-widget-area">
        <div className="col-md-3">
          <div className="py-3">
            <Image
              src="/assets/images/logo-white.svg"
              alt="FOI"
              width={100}
              height={40}
            />
          </div>
          <p className="font-os font-weight-semibold mb-3">Get our mobile app</p>
          <div>
            <button className="btn btn-app-download mr-2">
              <Image
                src="./styles/images/ios.svg"
                alt="App store"
                width={135}
                height={40}
              />
            </button>
            <button className="btn btn-app-download">
              <Image
                src="/assets/images/android.svg"
                alt="Play store"
                width={135}
                height={40}
              />
            </button>
          </div>
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <nav>
            <ul className="nav flex-column">
              {['Account', 'My tasks', 'Projects', 'Edit profile', 'Activity'].map((item) => (
                <li className="nav-item" key={item}>
                  <Link href="#!" className="nav-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  Careers <span className="badge badge-pill badge-secondary ml-3">Hiring</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  Shop with us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <p>
            &copy; foi. 2020{' '}
            <a
              href="https://www.bootstrapdash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reset"
            >
              BootstrapDash
            </a>
          </p>
          <p>All rights reserved.</p>
          <nav className="social-menu">
            {/* <Image
              src="" alt="facebook"
            />

            <Image
              src="" alt="instagram"
            />

            <Image
              src="assets/images/twitter.svg" alt="twitter"
            />

            <Image
              src="assets/images/twitter.svg" alt="twitter"
            /> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;