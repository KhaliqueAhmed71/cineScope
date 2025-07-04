

export default function ProfileCard({ image, name, role, bio }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>
      <p className="mt-2 text-gray-600 text-sm">{bio}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Follow
      </button>
    </div>
  );
}
