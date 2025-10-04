import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
          
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>
              <p className="text-gray-300">
                Upload your astronomical data in various formats including CSV files, raw light curve data, 
                or select from our existing datasets.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">2. AI Analysis</h2>
              <p className="text-gray-300">
                Our advanced AI algorithms analyze the light curve data to detect periodic dimming patterns 
                that indicate the presence of exoplanets transiting their host stars.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">3. Results & Validation</h2>
              <p className="text-gray-300">
                Get detailed results including confidence scores, transit characteristics, and visual 
                representations of detected exoplanets with comprehensive analysis reports.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
