import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} // Replace with your background image path
    >
      <div className="bg-opacity-80 text-white p-6 rounded-lg max-w-3xl w-full mt-[80px] mb-[60px]"> {/* Adjust margins to prevent overlap */}
        <h2 className="text-4xl font-bold mb-4">Projects</h2>

        

        {/* Online Quiz Maker */}
        <h3 className="text-xl font-semibold mt-4">Online Quiz Maker</h3>
        <ul className="list-disc ml-6">
          <li>Created an interactive web application for creating and taking quizzes, featuring real-time feedback upon submission and user-friendly navigation.</li>
        </ul>

        {/* ShopNow - Shopping App */}
        <h3 className="text-xl font-semibold mt-4">ShopNow - Shopping App</h3>
        <ul className="list-disc ml-6">
          <li>Developed a dynamic and responsive e-commerce application using the MERN (MongoDB, Express, React, Node.js) stack, providing features like user authentication, shopping cart functionality, and payment integration.</li>
          <li>Designed a user-friendly interface with seamless navigation, enhancing the overall shopping experience and increasing customer engagement.</li>
        </ul>

        {/* Bookstore Application */}
        <h3 className="text-xl font-semibold mt-4">
          Bookstore Application -{" "}
          <a href="https://github.com/Pulishekhar/Bookstore.git" className="underline">
            link
          </a>
        </h3>
        <ul className="list-disc ml-6">
          <li>Built a full-stack bookstore application using React, Node.js, Express.js, and MongoDB, featuring book categorization, user authentication, and access control for restricted sections.</li>
          <li>Employed Tailwind CSS and DaisyUI for responsive UI design and integrated React Router for dynamic routing between pages.</li>
          <li>Implemented form validation with React Hook Form, and provided real-time user feedback using react-hot-toast notifications.</li>
        </ul>

        <h2 className="text-4xl font-bold mt-8 mb-4">Experience</h2>

        {/* NeuroNexus Innovations - Intern */}
        <h3 className="text-xl font-semibold mt-4">
          NeuroNexus Innovations - Intern <span className="text-gray-300">(March 2023 - April 2024)</span>
        </h3>
        <ul className="list-disc ml-6">
          <li>Developed an interactive platform that allows users to create and participate in quizzes, featuring functionalities for entering questions, selecting multiple-choice answers, and providing immediate feedback upon submission.</li>
          <li>Collaborated with a team of developers to implement user interface enhancements, improving the overall user experience and accessibility of the platform.</li>
        </ul>

        {/* Sanskriti Committee - Associate Coordinator */}
        <h3 className="text-xl font-semibold mt-4">
          Sanskriti Committee, NIT RR - Associate Coordinator <span className="text-gray-300">(Aug 2023)</span>
        </h3>
        <ul className="list-disc ml-6">
          <li>Supported Core Coordinators in planning and executing events, ensuring smooth operations throughout the process.</li>
          <li>Assigned tasks to volunteers based on their strengths and interests, fostering a collaborative and engaging environment.</li>
          <li>Completed tasks assigned by the Coordinators while upholding the organization’s values and maintaining professionalism.</li>
        </ul>

        {/* Sanskriti Committee - Volunteer */}
        <h3 className="text-xl font-semibold mt-4">
          Sanskriti Committee, NIT RR - Volunteer <span className="text-gray-300">(Dec 2022 – July 2023)</span>
        </h3>
        <ul className="list-disc ml-6">
          <li>Enhanced leadership and problem-solving skills by leading teams.</li>
          <li>Ensured the success of Eclectika 2023, providing flexibility and assistance as needed.</li>
          <li>Assisted in planning event programs, including speaker selection, agenda development, and content coordination.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;