import React from 'react'

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            My career journey in web development, showcasing my growth and
            achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Experience 1 */}
            {/* <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-md md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Senior Front-End Developer
                    </h3>
                    <p className="text-blue-600 font-medium">
                      TechInnovate Solutions
                    </p>
                    <p className="text-gray-500 mb-4">January 2023 - Present</p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Led development of the company's flagship SaaS product
                          UI
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Implemented performance optimizations resulting in 40%
                          faster load times
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Mentored junior developers and established front-end
                          best practices
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        Redux
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  {/* Empty div for layout  
                </div>
              </div>
            </div> */}

            {/* Experience 2 */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  {/* Empty div for layout */}
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Front-End Developer
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Pioneer the Future Pvt. Ltd.
                    </p>
                    <p className="text-gray-500 mb-4">
                      October 2023 - February 2025
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Developed responsive websites for BlinkExam Projects.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Collaborated with designers to implement pixel-perfect
                          UI components
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        SCSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-md md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Junior Web Developer
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Locksish Digitech India Private Limited
                    </p>
                    <p className="text-gray-500 mb-4">March 2023 - June 2023</p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Assisted in building and maintaining client websites
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Implemented responsive designs and cross-browser
                          compatibility
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Participated in code reviews and team knowledge
                          sharing
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        HTML5
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        CSS3
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        jQuery
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  {/* Empty div for layout */}
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            {/* <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  {/* Empty div for layout 
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Web Development Intern
                    </h3>
                    <p className="text-blue-600 font-medium">StartUp Tech</p>
                    <p className="text-gray-500 mb-4">
                      January 2020 - May 2020
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Gained hands-on experience with front-end development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Assisted in building UI components for the company's
                          web application
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Learned industry best practices for code organization
                          and version control
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        HTML
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        CSS
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        JavaScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
