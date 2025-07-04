import ProfileCard from "./ProfileCard";
import aliImg from './assets/aliRaza.png';


function App() {
  const users = [
    {
      image: aliImg,
      name: "Ali Raza",
      role: "Web Developer",
      bio: "Coding with coffee and passion ",
    },
    {
      image: aliImg,
      name: "Fida Khoso",
      role: "UI/UX Designer",
      bio: "Design is not just what it looks like.",
    },
    {
      image: aliImg,
      name: "Bilal Ahmed",
      role: "Backend Engineer",
      bio: "Loves building scalable APIs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Meet Our Team
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, idx) => (
          <ProfileCard key={idx} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
