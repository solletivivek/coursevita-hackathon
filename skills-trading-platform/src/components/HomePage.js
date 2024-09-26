import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Star, Users, Book } from 'lucide-react';

// NavBar Component
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">SkillSwap</div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-purple-200 transition duration-300">Explore</a>
          <a href="#" className="text-white hover:text-purple-200 transition duration-300">Teach</a>
          <a href="#" className="text-white hover:text-purple-200 transition duration-300">Community</a>
          <button onClick={() => navigate('/login')} className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => (
  <div className="bg-gradient-to-b from-indigo-100 to-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-indigo-800">Unlock Your Potential with SkillSwap</h1>
      <p className="text-xl mb-8 text-gray-600">Share your expertise, learn new skills, and grow together</p>
      <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
        Get Started <ArrowRight className="inline-block ml-2" size={20} />
      </button>
    </div>
  </div>
);

// SearchBar Component
const SearchBar = () => (
  <div className="container mx-auto mt-8 px-4">
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="What skill do you want to learn?"
        className="w-full p-4 pr-12 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500 shadow-md"
      />
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 p-2 rounded-full">
        <Search className="text-white" />
      </button>
    </div>
  </div>
);

// FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <Icon className="text-purple-600 mb-4" size={40} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Features Section Component
const Features = () => (
  <div className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Why Choose SkillSwap?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard
        icon={Star}
        title="Learn from Experts"
        description="Connect with skilled professionals and learn through personalized sessions."
      />
      <FeatureCard
        icon={Users}
        title="Build Your Network"
        description="Expand your professional circle and collaborate with like-minded individuals."
      />
      <FeatureCard
        icon={Book}
        title="Diverse Skill Catalog"
        description="Explore a wide range of skills from tech to creative arts and everything in between."
      />
    </div>
  </div>
);

// PopularSkills Component
const PopularSkills = () => {
  const skills = ['Web Development', 'Digital Marketing', 'Data Science', 'Graphic Design', 'Language Learning', 'Photography'];
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Popular Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <button key={index} className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300">
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// HomePage Component
const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <Hero />
    <SearchBar />
    <Features />
    <PopularSkills />
  </div>
);

export default HomePage;
