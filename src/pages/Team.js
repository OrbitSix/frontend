import Footer from "../components/Footer";
import Header from "../components/Header";

const Team = () => {
  const teamMembers = [
    {
      name: "Abrar",
      role: "ML Developer",
      bio: "Specializes in building and optimizing machine learning models for exoplanet detection.",
    },
    {
      name: "Afeef",
      role: "Data Analyst",
      bio: "Expert in data preprocessing, cleaning, and extracting insights from astronomical datasets.",
    },
    {
      name: "Farabi",
      role: "Data Analyst",
      bio: "Focuses on data analysis and validation to ensure accuracy in exoplanet discoveries.",
    },
    {
      name: "Arik",
      role: "Full-stack Developer",
      bio: "Develops and maintains the backend and frontend systems for OrbitSix.",
    },
    {
      name: "Antor",
      role: "UI Designer",
      bio: "Designs intuitive and engaging user interfaces for the OrbitSix platform.",
    },
    {
      name: "Jomman",
      role: "Front-end Developer",
      bio: "Implements responsive and interactive features for a seamless user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Meet the passionate team of scientists, engineers, and developers
            behind OrbitSix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
