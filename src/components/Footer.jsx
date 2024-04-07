import './footer.css'
const Footer = () => {
  return (
    <footer >
      <div className="container">
        <div className='follow-us-container'>
          <h1 className="container-heading">Follow Us</h1>
          <div className="follow-us-list">
            <a>
              Facebook
            </a>
            <a>
              Twitter
            </a>
            <a>
              Instagram
            </a>
            <a>
              LinkedIn
            </a>
          </div>
        </div>
        <div className='about-container'>
          <h1 className="container-heading">About Our School</h1>
          <p>
          The smart school is a technology-based teaching learning institution for preparing children for the Information Age. To achieve smarts schools educational objectives, these teaching and learning concepts should be covered: curricular, pedagogy, assessment and teaching-learning materials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
