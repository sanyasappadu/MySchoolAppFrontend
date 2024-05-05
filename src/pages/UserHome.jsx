import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import "./userhome.css";
import TableComponent from '../components/TableComponent';

const UserHome = () => {
  const { userType } = useParams();
  console.log(userType);
  const subjects = [
    { name: <h3>Subject</h3>, marks: <h3>Marks</h3> },
    { name: "Telugu", marks: 20 },
    { name: "Hindi", marks: 20 },
    { name: "English", marks: 20 },
    { name: "Maths", marks: 20 },
    { name: "Science", marks: 20 },
    { name: "Social", marks: 20 },
  ];
  
  const [mainSection, setMainSection] = useState("profile");
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    class: '',
    unitTest: '',
    telugu: '',
    hindi: '',
    english: '',
    maths: '',
    science: '',
    social: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or perform any action
    console.log(formData); // For testing, you can log the form data to the console
    // Reset form after submission (if needed)
    setFormData({
      idNumber: '',
      name: '',
      class: '',
      unitTest: '',
      telugu: '',
      hindi: '',
      english: '',
      maths: '',
      science: '',
      social: ''
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSelect = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setMainSection(value)
    console.log(mainSection);

  };
  

  const renderFeatures = () => {
    switch (userType) {
      case "hm":
      // case "vhm":
      // case "teacher-admin":  
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>HM</h2>
            </div>
            <div className="side-container-box" onClick={handleSelect} data-value={"hm-profile"}>
              <h2 style={{ marginLeft: "50px" }}  >Profile Details</h2>
            </div>
            <div className="side-container-box" data-value={"createNewTeacher"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }} >Create teachers</h2>
            </div>
            <div className="side-container-box" data-value={"createNewStudent"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }} >Create students</h2>
            </div>
            <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }} >Manage Marks</h2>
            </div>
            <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }} >Manage blogs</h2>
            </div>
          </div>
        );

      case "teacher":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>TEACHER</h2>
            </div>
            <div className="side-container-box" onClick={handleSelect} data-value={"hm-profile"}>
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );
      case "class-leader":
      case "student-admin":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>CLASS-LEADER</h2>
            </div>
            <div className="side-container-box" onClick={handleSelect} data-value={"student-profile"}>
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
            <div className="side-container-box" data-value={"manageMarks"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }}>Manage Marks</h2>
            </div>
            <div className="side-container-box" data-value={"manageBlogs"} onClick={handleSelect}>
              <h2 style={{ marginLeft: "50px" }}>Manage blogs</h2>
            </div>
          </div>
        );

      case "student":
        return (
          <div className="home-side-container">
            <div>
              <img
                className="side-container-img"
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
                alt=""
              />
            </div>
            <div className="side-container-box">
              <h2 style={{ marginLeft: "50px" }}>STUDENT</h2>
            </div>
            <div className="side-container-box" onClick={handleSelect} data-value={"student-profile"}>
              <h2 style={{ marginLeft: "50px" }}>Profile Details</h2>
            </div>
          </div>
        );

      default:
        return <div>Invalid user type</div>;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="sidebar">{renderFeatures()}</div>
      {mainSection === "hm-profile" ? 
          <div className="mainsection">
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <img
              className="profile-img"
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
              alt=""
            />
            <div style={{ marginLeft: "50px" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Name : </h3>
                <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Qualification : </h3>
                <h3 style={{ marginLeft: "10px" }}>M.Ed</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3> Designation : </h3>
                <h3 style={{ marginLeft: "10px" }}>HEAD MASTER</h3>
              </div>
            </div>
          </div>
          <div>
            <h2>Year Of Working</h2>
            <p>joined in this school 2018 june 16 and contiuing</p>
          </div>
        </div>
      </div> :<></>  
    }
    {mainSection === "createNewTeacher" ? 
     <div className="mainsection">
      <h1>Create New Teacher Account</h1>
      <div style={{ display:"flex", flexWrap: "wrap"}}>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Name</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Gender</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Email</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Password</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Qualification</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Designation</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Experience</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Phone Number</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Subjects</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <button style={{width:"200px"}}>Save</button>
        </div>
      </div>
    </div> : <></>

    }
    {mainSection === "createNewStudent" ?  
      <div className="mainsection">
      <h1>Create New Student Account</h1>
      <div style={{ display:"flex", flexWrap: "wrap"}}>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Name</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Gender</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Email</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Password</label>
          <input style={{width:"200px"}}></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Class</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Role</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <label>Phone Number</label>
          <input style={{width:"200px"}}></input>
        </div>

        <div style={{ display: "flex", flexDirection: "column" , margin:"50px" }}>
          <button style={{width:"200px"}}>Save</button>
        </div>
      </div>
    </div>  :<></>
    }
    {mainSection === "manageMarks" ? 
    <div className="marksection">
      <h1>Announce The Exam Marks</h1>
      <TableComponent />
    </div> : <></>

  }
{ mainSection === "manageBlogs" ? 
      <div className='mainsection'>
        <h1>Create blogs</h1>
        <div>
          <label>Id Number</label>
          <input></input>
        </div>
        <div>
          <label>Name</label>
          <input></input>
        </div>
        <div>
          <label>Heading</label>
          <input></input>
        </div>
        <div className='use-columntype'>
          <label>Description</label>
          <input style={{width:"500px", height:"300px"}}></input>
        </div>
        <div>
          <label>Related Links</label>
          <input></input>
        </div>
        <div>
        <button>Save Blog</button>
      </div>
      </div> : <></>
  }

  






{ mainSection === "student-profile" ? 
   <div className="mainsection">
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <img
              className="profile-img"
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt_0WRr8Mc016RGaTK8eaiv6dSHKuNjIwdUrnF_7Xa_GdQL9YX9f4le5qucuyVUpKxbo7gqIGC0pZo14"
              alt=""
            />
            <div style={{ marginLeft: "50px" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Name : </h3>
                <h3 style={{ marginLeft: "10px" }}>Virat Kohli</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>Class : </h3>
                <h3 style={{ marginLeft: "10px" }}>5th</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3> Section : </h3>
                <h3 style={{ marginLeft: "10px" }}>A</h3>
              </div>
            </div>
          </div>
          <div>
            <h2>Year Of Studying</h2>
            <p>joined in this school 2018 june 16 and contiuing</p>
          </div>
          <div>
            <h2>Mark sheets</h2>
            <div>
              <div style={{display:"flex", flexDirection:"row"}}>
              <h5>ID Number :</h5>
              <h5>S2017H123</h5>
              </div>
              <div style={{display:"flex", flexDirection:"row"}}>

              <h5>Name :</h5>
              <h5>Virat Kohli</h5>
              </div>
              <div style={{display:"flex", flexDirection:"row"}}>

              <h5>Class : </h5>
              <h5>5th</h5>
              </div>
              <div style={{display:"flex", flexDirection:"row"}}>

              <h5>Unit Test :</h5>
              <h5>1st</h5>
              </div>

            </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  {subjects.map((subject) => (
                    <th key={subject.name} style={{ textAlign: "start" }}>
                      {subject.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {subjects.map((subject) => (
                    <td key={subject.name} style={{ textAlign: "start" }}>
                      {subject.marks}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  : <> </> 
      }

      <div className="blogsection">
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
        <div>
          <h2>School Games August 15</h2>
          <p>
            Here let us have a look at some of the interesting Independence Day
            celebrations and activities for schools that instills the freedom
            spirit in kids.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;


