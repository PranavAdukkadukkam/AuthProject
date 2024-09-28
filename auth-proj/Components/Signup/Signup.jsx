import { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {

    const [userName,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    const [terms,setTerms] = useState(false)
    const [focus1,setFocus1] = useState(false)
    const [focus,setFocus] = useState(false)
    const reviews = [
        {
          name: "Priya Nair",
          review: `"Great course! The mentors made complex topics easy, and I feel more confident coding."`,
          profilePic: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          name: "Ankit Patel",
          review: "Real-time projects and practical lessons make 100xDevs stand out. Highly recommend it!",
          profilePic: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          name: "Ritu Gupta",
          review: "I had no coding background, but 100xDevs made it simple to understand and apply new skills.",
          profilePic: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          name: "Vikram Rao",
          review: "The course is amazing! It breaks down complex concepts and makes them easy to follow.",
          profilePic: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          name: "Sneha Iyer",
          review: "100xDevs helped me build a strong portfolio and secure job offers in no time!",
          profilePic: "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
          name: "Rohan Desai",
          review: "The course is structured perfectly to help developers advance their careers quickly.",
          profilePic: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          name: "Neha Verma",
          review: "Hands-on learning and real-world projects helped me level up my skills significantly.",
          profilePic: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          name: "Arjun Singh",
          review: "Best course for developers! Focus on real-world coding and problem-solving was key.",
          profilePic: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          name: "Meera Menon",
          review: "The mentors provide great feedback and truly care about helping you grow as a developer.",
          profilePic: "https://randomuser.me/api/portraits/women/10.jpg"
        }
      ];

      
    return (
        <div className="container">
            <div className="mainPart1">
                <div className="subPart one">
                <div className="header">
                        <span>
                            100xDevs,<br/>
                            because 10x ain't enough!
                        </span>
                        
                </div>
                <div className="desc">
                100xdevs is an initiative by <strong> Harkirat Singh </strong> to personally mentor folks in the field of Programming. We believe that today you are either a 1x engineer or a 100x engineer and nothing in the middleware.
                </div>
                </div>
                <div className="subPart two">
                    <div className="stars">
                        <img src="../assets/stars.png" alt="start" />
                    </div>
                    <div className="review">
                        <p>{reviews[0].review}</p>
                    </div>
                    <div className="profile">
                        <div className="profilePic">
                            <img src={reviews[0].profilePic} alt="profile pic" />
                        </div>
                        <div className="profileInfo">
                            <h1>{reviews[0].name}</h1>
                            <h2>Student At 100xdevs</h2>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="mainPart2">
            <div className="inputDiv">
                    <div className="header">
                        <div className="title">
                            Sign up to
                            <div>
                                100xdevs
                            </div>
                        </div>
                        <div className="signIn">
                            Already a member?
                            <div>
                                <Link to={'/signin'} className='signinLink'>Log in here</Link>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={() => {}}>
                    <div className="field">
                        <label>Your Full Name</label>
                        <input type="text" placeholder='You Full Name' onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                    </div>
                    <div className="field">
                        <label>Your Email Address</label>
                        <input type="text" placeholder='Your Email Address' onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="field">
                        <label>Create a Password</label>
                        <input type="password" placeholder='Create a Password' onChange={(e) => {
                            setPassword(e.target.value)
                        }} onBlur={() => {
                            setFocus1(true)
                        }}/>
                    </div>
                    <div className="errorMessage">
                    {focus1 && password.length < 8 ? <p>Password length must be atleast 8 characters.</p> : null}
                    </div>
                    <div className="field">
                        <label>Confirm Your Password</label>
                        <input type="password" placeholder='Confirm your Password' onChange={(e) => {
                            setConfirm(e.target.value)
                        }} onBlur={() => {
                            setFocus(true)
                        }} />
                    </div>
                    <div className="errorMessage">
                    {focus && password !== confirm ? <p>Passwords do not match!</p> : null}
                    </div>
                    <div className="terms">
                        <input type="checkbox" onChange={() => {
                            setTerms(!terms)
                        }} />
                        <span>By Signing up, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></span>
                    </div>
                    <div className="submitButton">
                        <button>Create Account</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup