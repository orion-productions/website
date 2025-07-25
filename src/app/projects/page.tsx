"use client";

import Layout from '../../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Projects</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project cards will go here */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Project 1</h3>
                <p className="mt-2 text-gray-600">
                  Description of project 1. Add details about technologies used and problems solved.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Project 2</h3>
                <p className="mt-2 text-gray-600">
                  Description of project 2. Add details about technologies used and problems solved.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
