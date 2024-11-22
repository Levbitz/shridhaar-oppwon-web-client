
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Navbar from "../../components/Navbar/Navbar";
import "./Register.css";
import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
// import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../../lib/Firebase/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
// import NavBarTwo from "../../Business/BusinessComponents/NavBarTwo/NavBarTwo";
// import { Helmet } from "react-helmet-async";
// import RegisterWithGoogle from "../../components/GoogleAuthBtn/RegisterWithGoogle/RegisterWithGoogle";

function Register() {
 
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [ipDetails, setIpDetails] = useState([]);
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          setIpDetails(jsonData);
          // console.log(jsonData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [""]);
  const [data, setData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    error: null,
    loading: false,
  });

  let navigate = useNavigate();

  const { name, email, password, phoneNumber, error, loading } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.phoneNumber]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(data.phoneNumber);
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        number: data.phoneNumber,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        isBlocked: false,
        privateData: ipDetails,
        avatar:'https://firebasestorage.googleapis.com/v0/b/ug-b2b.appspot.com/o/icons%2Fuser.png?alt=media&token=171c3a30-e1d4-4720-a36f-12fac0126b08'
      });
      setData({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        error: null,
        loading: false,
      });
      navigate("/profile", { replace: true });
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  //console.log(ipDetails);
  return (
    <>
      
  
      <div >
        <div className="loginPage_wrap ">
          
            <div className="row">
           <div className="l1"/>
              <div className="col l10 s12 ">
                <div className="white registerForm_wrap">
                  <h4 className="">
                    welcome to{" "}
                    <span
                      style={{
                        color: "coral",
                        fontWeight: "bold",
                      }}
                    >
                      OPPWON
                    </span>
                  </h4>
                  {error ? <p className="error">{error}</p> : null}
                  <form action="POST" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col l6 s12 center">
                        <div className="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            className=" grey lighten-2"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            id="user_name"
                            type="text"
                          />
                          <label htmlFor="user_name">First Name</label>
                        </div>
                      </div>

                      <div className="col l6 s12 center">
                        <div className="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            className=" grey lighten-5"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
                            id="number"
                            type="text"
                          />
                          <label htmlFor="phoneNumber">Last Name</label>
                        </div>
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col l12 s12 center">
                        <div className="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            name="email"
                            value={email}
                            onChange={handleChange}
                            id="user_email"
                            type="text"
                          />
                          <label htmlFor="user_email">User Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col l12 s12 center">
                        <div className="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            name="password"
                            value={password}
                            onChange={handleChange}
                            id="user_password"
                            type={visiblePassword ? "text" : "password"}
                          />
                          <small
                            style={{
                              position: "absolute",
                              right: 5,
                              top: "30%",
                              zIndex: 1,
                            }}
                          >
                            {visiblePassword ? (
                              <AiFillEye
                                onClick={() => setVisiblePassword(false)}
                                size={20}
                              />
                            ) : (
                              <AiFillEyeInvisible
                                size={20}
                                onClick={() => setVisiblePassword(true)}
                              />
                            )}
                          </small>
                          <label htmlFor="user_password">User Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col l12 s12">
                        <button
                          style={{
                            height: "45px",
                            // background: "#094c59",
                             width: "100%",
                            // margin: "0 auto",
                          }}
                          className=" btn clickable  valign-wrapper btn primary_bg btn-small "
                          disabled={loading}
                        >
                          {loading ? "Registering ..." : "Register"}
                        </button>
                      </div>
                    </div>
                    {/*<div className="row">
                    <div className="col l12">
                      <button
                        style={{
                          height: "45px",
                          background: "#094c59",
                          width: "100%",
                          margin: "0 auto",
                        }}
                        className="valign-wrapper btn  "
                        disabled={loading}
                      >
                        {loading ? "Registering ..." : "Register"}
                      </button>
                    </div>
                      </div>*/}
                  </form>
                  <div className="row">
                    <div className="col l12 s12">
                      {/*<RegisterWithGoogle />*/}
                    </div>
                    <div className="col l12">
                      <p
                        style={{
                          marginTop: 10,
                        }}
                      >
                        {" "}
                        Have an account ? <Link to="/sign_in">Sign In!</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Register;
