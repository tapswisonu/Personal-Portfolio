import React from 'react'

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in, continuously
            expanding my expertise to stay current with industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6 mx-auto">
              <i className="fas fa-code text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-html5 text-orange-500 mr-2"></i>
                  HTML5
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-css3-alt text-blue-500 mr-2"></i>
                  CSS3
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-js text-yellow-500 mr-2"></i>
                  JavaScript
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-sass text-pink-500 mr-2"></i>
                  Sass/SCSS
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-bootstrap text-purple-500 mr-2"></i>
                  Bootstrap
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-lg mb-6 mx-auto">
              <i className="fas fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Frameworks</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-react text-blue-400 mr-2"></i>
                  React.js
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
               
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-angular text-red-500 mr-2"></i>
                  Angular
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-node-js text-green-600 mr-2"></i>
                  Node.js
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-mobile-alt text-gray-600 mr-2"></i>
                  React Native
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-6 mx-auto">
              <i className="fas fa-paint-brush text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Design</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-pencil-ruler text-gray-600 mr-2"></i>
                  UI/UX Design
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-figma text-orange-500 mr-2"></i>
                  Figma
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-palette text-red-500 mr-2"></i>
                  Photoshop
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-lg mb-6 mx-auto">
              <i className="fas fa-tools text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              Tools & Others
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-git-alt text-orange-600 mr-2"></i>
                  Git
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-orange-600 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-terminal text-gray-700 mr-2"></i>
                  Command Line
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-orange-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-database text-blue-500 mr-2"></i>
                  RESTful APIs
                </span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-orange-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              
               
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
