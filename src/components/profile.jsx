import "../styles/profile.css";
import linkedin from "../assets/linkedin.png";
import google from "../assets/google.png";
const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <section className="profile-header-text">
          <h2>Account</h2>
          <h3>Real-time infomation and activities of your property</h3>
        </section>
        {/* profile header  start*/}
        <section className="profile-header">
          {/* profile banner header  start */}
          <div className="profile-banner">
            <div className="profile-avatar-container">
              <div className="profile-img-container">
                <img src="https://via.placeholder.com/50" alt="Profile" />
                <h2>Jane Smith</h2>
              </div>
              <div className="profile-avatar">
                <h3>Profile Picture</h3>
                <p>PNG, JPEG under 15mb</p>
              </div>
            </div>
            <div className="update-profile-pic">
              <input type="text" placeholder="Update new Picture " />
              <button>Delete</button>
            </div>
          </div>
          {/* profile banner header end  */}
          {/* profile info header start */}
          <div className="profile-info-header">
            <div className="profile-input-box">
              <label>First Name</label>
              <input type="text" name="full-name" />
            </div>
            <div className="profile-input-box">
              <label>Last Name</label>
              <input type="text" name="last-name" />
            </div>
          </div>
          {/* profile info header end */}
        </section>
        {/* profile header end */}

        {/* contact info section */}
        <section className="contact-info-section">
          <div className="contact-info">
            <h2>Contact email</h2>
            <h3>Manage your accounts email address for the invoices</h3>
          </div>
          <div className="contact-email">
            <div className="contact-input-box">
              <label>
                <i className="fa-regular fa-envelope"></i>Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Jane.Smith@gmail.com"
              />
            </div>
            {/* <div className="contact-input-box Aemail">
              <label>
                <i className="fa-solid fa-circle-plus"></i> Add another email
              </label>
              <input type="email" name="add-email" />
            </div> */}
            <button className="Aemail">
              {" "}
              <i className="fa-solid fa-circle-plus"></i> Add another email
            </button>
          </div>
        </section>
        {/* contact info section */}

        {/* passwoard section start */}
        <section className="password-section">
          <div className="password-info">
            <h2>Password</h2>
            <h3>Modify your current Password</h3>
          </div>
          <div className="password-change-section">
            <div className="password-input-box">
              <label>
                <i className="fa-solid fa-lock"></i>Current Password
                <i className="fa-regular fa-eye"></i>
              </label>
              <input type="password" name="current-password" />
            </div>
            <div className="password-input-box">
              <label>
                <i className="fa-solid fa-lock"></i>New Password
                <i className="fa-regular fa-eye"></i>
              </label>
              <input type="password" name="new-password" />
            </div>
          </div>
        </section>
        {/* passwoard section end */}

        {/* integrated account start */}
        <section className="integrated-account-section">
          <div className="integrated-account-info">
            <h2>Integrated account</h2>
            <h3>Manage your current integrated accounts</h3>
          </div>
          <div className="connected-account-container">
            <div className="connected-account">
              <div className="account-info-container">
                <div className="account-info">
                  <img src={linkedin} alt="linkedin" />
                  <div className="account-info-texting">
                    <h2>Linkedin analytics</h2>
                    <h3>
                      Navigate the Linkedin analytics interface and reports
                    </h3>
                  </div>
                </div>
                <button>Connected</button>
              </div>

              <div className="account-info-container">
                <div className="account-info">
                  <img src={google} alt="google" />
                  <div className="account-info-texting">
                    <h2>Google Account</h2>
                    <h3>Link your Google Account to this devices</h3>
                  </div>
                </div>
                <button>Connected</button>
              </div>
            </div>
          </div>
        </section>
        {/* integrated account end */}
      </div>
    </>
  );
};

export default Profile;
