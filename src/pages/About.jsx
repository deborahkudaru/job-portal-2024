import React from "react";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div className="px-48">
      <Logo />
      <div>
        <h2 className="text-4xl font-bold w-3/4">About us</h2>
        <p>
          Welcome to WorkBuddy, your one-stop destination for finding your dream
          job or discovering top talent. We believe that a fulfilling career is
          not just about the right job, but about the right match between
          employers and employees.
        </p>
      </div>
      <div>
        {" "}
        <h3 className="text-3xl font-bold">Our Mission</h3>
        <p>
          At WorkBuddy, our mission is to bridge the gap between employers
          seeking exceptional talent and job seekers aspiring to grow in their
          careers. We are dedicated to creating a platform that empowers job
          seekers to explore opportunities that align with their skills,
          passions, and goals, while helping companies build diverse, innovative
          teams.
        </p>
      </div>
      <div>
        <h3>What We Offer</h3>
        <ul>
          <li>
            For Job Seekers: Whether you're just starting your career, looking
            for a change, or seeking to advance to the next level, we provide a
            vast array of opportunities across various industries and roles. Our
            user-friendly interface allows you to search, filter, and apply for
            jobs that match your skills and interests. We also offer resources
            like resume building, career advice, and interview tips to help you
            succeed.
          </li>
          <li>
            For Employers: Finding the right talent is crucial for any
            organization’s success. We offer advanced tools and filters to help
            you discover candidates who not only have the right qualifications
            but also fit your company culture. Our extensive database and
            targeted job postings ensure that your listings reach the right
            audience.
          </li>
        </ul>
      </div>
      <div>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            Comprehensive Listings: We offer a wide range of job opportunities
            across various industries, from entry-level positions to executive
            roles.
          </li>
          <li>
            Advanced Matching: Our smart algorithms match job seekers with the
            most relevant job listings, saving time for both candidates and
            recruiters.
          </li>
          <li>
            Career Development Resources: Beyond job listings, we provide
            valuable resources such as career advice, interview preparation, and
            skill development courses.
          </li>
          <li>
            Diverse and Inclusive: We are committed to promoting diversity and
            inclusion in the workplace. Our platform encourages equal
            opportunities for all, helping companies build teams that reflect a
            wide range of perspectives and experiences.
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <h3>Our Vision</h3>
        <p>
          We envision a future where every job seeker finds a role that excites
          them, and every company builds a team that propels them towards
          greater success. At [Your Job Portal Name], we are constantly evolving
          to meet the needs of a dynamic job market, leveraging the latest
          technology and industry insights to create a seamless experience for
          all our users.
        </p>
      </div>
      <div>   <h3>Join Us</h3>
        <p>
          Whether you’re looking to make your next career move or searching for
          the perfect addition to your team, [Your Job Portal Name] is here to
          help. Join us today and take the next step in your professional
          journey!
        </p></div>
    </div>
  );
};

export default About;
