import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-item">
          <p>
            "This app is a lifesaver! I can consult with my doctor without
            leaving home."
          </p>
          <h4>- John Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>
            "Highly recommend this app for its convenience and ease of use."
          </p>
          <h4>- Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
