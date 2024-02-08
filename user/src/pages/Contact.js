import Base from "../components/Base";
import './contact.css'
const Contact=()=>{
    return(
        <Base>
        <div className="content">
          <h2>Contact Us</h2>
          <p>For any help you may contact us at</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>MIT ACADEMY OF ENGINEERING , Alandi<br/>Dehu Phata Pune-412105</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>942-567-20987</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Email</h3>
                <p>extensionhelper@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
                
              </div>
            </form>
          </div>
        </div>
        </Base>
    );
};
export default Contact;