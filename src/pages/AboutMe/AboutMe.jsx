import React from "react";

function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20front-end%20developer%20working%20on%20multiple%20screens%20with%20code%20and%20design%20interfaces%2C%20modern%20workspace%20with%20plants%20and%20minimalist%20decor%2C%20side%20view%20of%20person%20typing%20on%20keyboard%2C%20focused%20on%20work%2C%20natural%20lighting%20from%20large%20windows&width=600&height=700&seq=3&orientation=portrait"
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">1+ Years</p>
              <p>Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              I'm Tapswi Yadav, a Front-End Developer based in Noida
            </h3>
            <p className="text-gray-700">
              I specialize in creating responsive, user-friendly web
              applications that deliver exceptional user experiences. With a
              strong foundation in HTML, CSS, and JavaScript, and expertise in
              modern frameworks like React.js, I bridge the gap between design
              and functionality.
            </p>
            <p className="text-gray-700">
              My journey in web development began during my computer science
              studies, where I discovered my passion for creating intuitive user
              interfaces. Since then, I've worked with startups and established
              companies to build products that users love.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Name:</p>
                <p>Tapswi Yadav</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>sytapswi@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p>Noida, UP</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p>Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
