import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif"
import Modal from "./../Modal/Modal.jsx";
class Home extends Component {

    state = {showModal:false};
    componentDidMount(){
        setTimeout(() =>{
            this.setState({showModal:true});
        }, 2400);
    }

    closeModal = () => {
        this.setState({showModal:false});
    }
  render(){
    return(
        <div className="home-container">
            {this.state.showModal && <Modal closeModal={this.closeModal}/>}
            <div className="header-text">
                <h1>
                    Welcome to my portfolio!
                </h1>
                <p>
                I am Christian Chibuike, a passionate and skilled Backend Developer with expertise in building scalable and efficient web applications
                </p>
            </div>
            <div className="header-btns">
                <Link className="btn btn-white" to="/about">
                    <p className="btn-text">Background</p>
                </Link>
                <Link className="btn btn-transparent" to="/contact">
                    <p className="btn-text">Get in touch</p>
                </Link>
            </div>
            <div className="splash-image">
                <img src={homeAnime} alt="animation" loading="lazy" className="home-anim"/>
            </div>
        </div>
    )
  }
}

export default Home;
