import React from 'react';
import '../account/account.css'; // Reuse styles

const About = () => {
  return (
    <div className="account-page">
      <div className="about-wrapper">
        <div className="form-container about-content-box">
          <div className="form-btn">
            <div><strong>About Us</strong></div>
            <hr id="Indicator" style={{ transform: 'translateX(0)', width: '100px' }} />
          </div>
        <div className="about-text">
  <p>
    Welcome to <strong>Sportify</strong> — your one-stop destination for all things sports, fitness, and active living. We’re more than just an online store; we’re a passionate community built around movement, performance, and empowerment. Whether you’re chasing a new personal best, prepping for game day, or simply looking for comfortable, reliable gear to support your active lifestyle, we’re here to equip and inspire you every step of the way.
  </p>

  <p>
    Founded by athletes, for athletes, Sportify was born out of a simple idea: to make high-quality sports gear accessible to everyone — from elite professionals to everyday enthusiasts. We understand the grit, the grind, and the glory that come with sports, because we live it too. That’s why every product we offer is carefully selected for performance, durability, and value. From cutting-edge training shoes to breathable compression wear, from strength equipment to hydration essentials — we source gear that helps you go further, faster, and stronger.
  </p>

  <p>
    Our product catalog spans across all major sports including football, basketball, tennis, running, cycling, swimming, yoga, gym training, and more. We work with globally recognized brands, but we also support emerging performance labels that are making a difference in both function and sustainability. We believe in offering options that cater to all body types, performance levels, and personal styles — because sport belongs to everyone.
  </p>

  <p>
    At Sportify, customer satisfaction is not just a policy — it's a principle. We offer a smooth and secure online shopping experience, backed by responsive customer support, fast shipping, easy returns, and regular deals and loyalty rewards. Every time you shop with us, we want you to feel confident — not just in your purchase, but in your potential. Your goals matter to us, and so does your journey.
  </p>

  <p>
    Beyond the products, we’re invested in building a community. We sponsor local teams, highlight real athletes through our blog and social media, and run regular challenges that encourage our customers to stay active and share their stories. Whether you're part of a team, training solo, or just getting started, we believe in lifting each other up — because sport is better when we move together.
  </p>

  <p>
    Looking ahead, we’re committed to innovation, sustainability, and inclusivity. We’re continuously expanding our range, introducing eco-friendly materials, and working with suppliers who share our values of ethical manufacturing and environmental responsibility. The future of sportswear is smart, sustainable, and inclusive — and Sportify is proud to be part of that movement.
  </p>

  <p>
    Thank you for choosing Sportify as your trusted sports partner. Whether you're striving, sweating, stretching, or sprinting — we're right there with you. Let’s move with purpose, train with passion, and win together.
  </p>
</div>


        </div>
      </div>
    </div>
  );
};

export default About;
