"use client";

import Layout from '../../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Orion Productions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are a creative technology company specializing in innovative solutions and cutting-edge development.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  To create innovative solutions that help businesses and individuals achieve their goals through technology.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base text-gray-500">
                  To be a leading force in technological innovation and creative solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Our Values</h3>
                <p className="mt-2 text-base text-gray-500">
                  Innovation, Quality, Integrity, and Customer Success are at the core of everything we do.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Our Expertise</h3>
                <p className="mt-2 text-base text-gray-500">
                  Web Development, Mobile Applications, Cloud Solutions, and Digital Transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
