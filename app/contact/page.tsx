import '../../styles/contact.css'

const Contact = () => {
  return (
    <div className="container1contact">
      <div id="contactUsContent">
        <h1>CONTACT US</h1>
        {/* Office Address */}
        <div className="contact-section">
          <h2>Office Address</h2>
          <p>A.J. Hospital &amp; Research Centre
            Kuntikana,
            NH - 66, Mangalore - 575004.
            INDIA</p>
        </div>
      </div>
      <link />
      <div className="form_iframe">
        {/* Contact Form */}
        <div className="contact-section contactf">
          <h2 className="contact_form">Contact Form</h2>
          <form className="form" action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter the name" required />
            <label htmlFor="phone">Phone No:</label>
            <input type="number" name="phone" placeholder="Enter the Phone number" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter the Email id" required />
            <label htmlFor="regno">Reg no:</label>
            <input type="text" id="regno" name="regno" placeholder="Enter the registered Number if registered" />
            <label htmlFor="message">Querry:</label>
            <textarea id="message" name="message" placeholder="Enter the querry" style={{ height: '20vh' }} required defaultValue={""} />
            <input className="submit" type="submit" defaultValue="Submit" />
          </form>
        </div>
        {/* Google Maps Section */}
        <div className="contact-section maps">
          <h2>Location on Google Maps</h2>
          <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31113.025483680212!2d74.845976!3d12.899478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a726f995fbd%3A0x2beaab818918fa16!2sA.J.%20Institute%20of%20Medical%20Sciences!5e0!3m2!1sen!2sus!4v1706638306105!5m2!1sen!2sus" width="100%" height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  )
}
export default Contact
