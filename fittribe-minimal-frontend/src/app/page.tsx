"use client";
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Find Your Perfect <span className="text-accent-500">Fitness Trainer</span>
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Connect with certified fitness professionals for personalized virtual and in-person training sessions tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Find Trainers
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Become a Trainer
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-700/80 to-transparent z-10"></div>
              <div className="w-full h-full bg-primary-700 flex items-center justify-center">
                <p className="text-white text-xl">Fitness Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">How FitTribe Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find the perfect trainer and start your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Find Your Trainer",
                description: "Browse profiles of certified trainers specializing in various fitness disciplines."
              },
              {
                title: "Book Sessions",
                description: "Schedule in-person or virtual sessions that fit your calendar and preferences."
              },
              {
                title: "Achieve Your Goals",
                description: "Work with your trainer to create and follow a personalized fitness plan."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold mb-2">FitTribe</h2>
            <p className="text-primary-200 mb-4">Connect with certified fitness trainers</p>
            <p className="text-sm text-primary-300">© 2025 FitTribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
