import { useParams } from 'react-router-dom';
import './home.css'
const Home = () => {
  const { userType } = useParams();

  // Function to render features based on user type
  const feature = () => {
    return(
      <div  className='home-side-container'>
        <div><img className='side-container-img' src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14" alt="" /></div>
        <div className='side-container-box'><h2 style={{marginLeft:"50px"}}>Profile Details</h2></div>
        <div  className='side-container-box'><h2 style={{marginLeft:"50px"}}>Create Account</h2></div>
        <div  className='side-container-box'><h2 style={{marginLeft:"50px"}}>Manage Accounts</h2></div>
        <div  className='side-container-box'><h2 style={{marginLeft:"50px"}}>Manage Marks</h2></div>
        <div  className='side-container-box'><h2 style={{marginLeft:"50px"}}>Give Attendance</h2></div>
        <div  className='side-container-box'><h2 style={{marginLeft:"50px"}}>Logout Account</h2></div>

      </div>
    )
  }
  const renderFeatures = () => {
    switch (userType) {
      case 'type1':
        return <div>Features A-F</div>;
      case 'type2':
        return <div>Features A-E</div>;
      case 'type3':
        return <div>Features A-D</div>;
      case 'type4':
        return <div>Features A-C</div>;
      case 'type5':
        return <div>Features A-B</div>;
      default:
        return <div>Invalid user type</div>;
    }
  };

  return (
    <div style={{backgroundColor:"rgb(229, 171, 238)"}}>
      {/* <h2>Welcome to Home Page</h2> */}
      {feature()}
    </div>
  );
};

export default Home;
