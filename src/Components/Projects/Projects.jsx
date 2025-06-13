import React from 'react'

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical
            skills and creativity.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-lg hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              React
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              JavaScript
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              UI/UX
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20responsive%20design%20elements%2C%20professional%20UI%20showcase%20on%20desktop%20screen%2C%20light%20background%20with%20subtle%20shadows&width=600&height=400&seq=4&orientation=landscape"
                alt="E-commerce Website"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">E-commerce Platform</h3>
                  <p className="text-sm text-gray-200">
                    A full-featured online shopping experience
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Redux
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A responsive e-commerce platform with product filtering, cart
                functionality, and secure checkout process.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Dashboard%20interface%20with%20data%20visualization%20charts%2C%20analytics%20graphs%2C%20user%20statistics%2C%20dark%20mode%20UI%2C%20modern%20admin%20panel%20design%2C%20clean%20layout%20with%20information%20cards%20and%20metrics%20display&width=600&height=400&seq=5&orientation=landscape"
                alt="Dashboard Application"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                  <p className="text-sm text-gray-200">
                    Interactive data visualization tool
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Chart.js
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Firebase
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive dashboard for visualizing and analyzing business
                metrics with real-time updates.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Mobile%20app%20UI%20design%20for%20weather%20application%20with%20daily%20forecast%2C%20temperature%20graphs%2C%20location-based%20weather%20data%2C%20clean%20minimalist%20interface%20with%20weather%20icons%2C%20light%20theme%20with%20blue%20accents&width=600&height=400&seq=6&orientation=landscape"
                alt="Weather App"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Weather Application</h3>
                  <p className="text-sm text-gray-200">
                    Location-based weather forecasts
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React Native
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                  API Integration
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  Geolocation
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A mobile weather app providing accurate forecasts, hourly
                updates, and severe weather alerts.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%20layout%2C%20task%20cards%2C%20progress%20tracking%2C%20due%20dates%2C%20assignee%20avatars%2C%20clean%20and%20organized%20project%20management%20UI%20with%20light%20color%20scheme&width=600&height=400&seq=7&orientation=landscape"
                alt="Task Manager"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Task Manager</h3>
                  <p className="text-sm text-gray-200">
                    Productivity and organization tool
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  MongoDB
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A collaborative task management application with drag-and-drop
                interface, notifications, and team features.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Blog%20website%20design%20with%20featured%20articles%2C%20category%20sections%2C%20author%20profiles%2C%20comment%20system%2C%20responsive%20layout%20for%20desktop%20and%20mobile%2C%20modern%20typography%20and%20clean%20reading%20experience&width=600&height=400&seq=8&orientation=landscape"
                alt="Blog Platform"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Blog Platform</h3>
                  <p className="text-sm text-gray-200">
                    Content management system
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Gatsby
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                  GraphQL
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Netlify CMS
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A fast, SEO-optimized blog platform with markdown support,
                categories, and responsive design.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Fitness%20application%20interface%20with%20workout%20tracking%2C%20exercise%20library%2C%20progress%20charts%2C%20personal%20profile%2C%20clean%20and%20energetic%20UI%20design%20with%20motivational%20elements%2C%20health%20tracking%20dashboard&width=600&height=400&seq=9&orientation=landscape"
                alt="Fitness App"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Fitness Tracker</h3>
                  <p className="text-sm text-gray-200">
                    Health and workout monitoring
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Chart.js
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive fitness tracking application with workout plans,
                progress visualization, and social features.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
