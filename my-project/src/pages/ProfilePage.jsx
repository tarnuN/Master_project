
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaSmile, FaUserFriends, FaStar } from "react-icons/fa";

export default function ProfilePage() {
  const [profile] = useState({
    name: "Tarun",
    surname: "Naik",
    country: "@Indian",
    age: 20,
    status: "Single",
    picture: "https://via.placeholder.com/300",
    job: "Software Developer",
    company: "Microsoft",
    income: "$120,000",
  });

  const [stats] = useState([
    { label: "Sentiment Score", value: "85%", icon: <FaSmile />, color: "text-green-400" },
    { label: "Extrovert Level", value: "Mid", icon: <FaUserFriends />, color: "text-blue-400" },
    { label: "Social Topics Cognizant", value: "8.2/10", icon: <FaStar />, color: "text-yellow-400" },
    { label: "Risk Level", value: "Low Risk", icon: <FaStar />, color: "text-teal-400" },
    { label: "Fair Play Rating", value: "8.0/10", icon: <FaStar />, color: "text-pink-400" },
  ]);

  const [personality] = useState([
    { label: "Adventure", value: 73 },
    { label: "Extrovert", value: 45 },
    { label: "Sportive", value: 94 },
    { label: "Attentive", value: 52 },
  ]);

  const [interests] = useState([
    { name: "Swimming", value: 80 },
    { name: "Gaming", value: 80 },
    { name: "Travel", value: 64 },
    { name: "Adventure", value: 64 },
    { name: "Movies", value: 23 },
    { name: "Social", value: 16 },
  ]);

  // 🔹 New: State for posts
  const [recentPosts, setRecentPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    image: "",
    caption: "",
    likes: "",
    comments: "",
  });

  // 🔹 New: Add post handler
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.image || !newPost.caption) return;

    const post = {
      id: Date.now(),
      image: newPost.image,
      caption: newPost.caption,
      likes: newPost.likes || 0,
      comments: newPost.comments || 0,
      timeAgo: "5 Min ago",
    };

    setRecentPosts([post, ...recentPosts].slice(0, 10));
    setNewPost({ image: "", caption: "", likes: "", comments: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 text-white font-sans">
      {/* Header */}
      <div className="bg-[#111113] rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg">
        <img
          src={profile.picture}
          alt={profile.name}
          className="w-48 h-48 rounded-xl object-cover shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {profile.name} <span className="font-light">{profile.surname}</span>
          </h1>
          <p className="text-gray-400 mt-1">
            {profile.country} • {profile.age} years old • {profile.status}
          </p>

          <div className="mt-4 bg-[#1a1a1d] rounded-xl p-4">
            <p className="text-sm text-gray-400">Occupation</p>
            <p className="text-lg font-semibold">{profile.job}</p>
            <p className="text-gray-400">{profile.company}</p>
            <p className="text-green-400 font-bold">{profile.income}</p>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow">
              <FaPhoneAlt /> Call Now
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow">
              <FaEnvelope /> Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-[#111113] rounded-2xl p-4 text-center shadow-lg">
            <div className={`text-2xl mb-2 ${s.color}`}>{s.icon}</div>
            <p className="text-lg font-bold">{s.value}</p>
            <p className="text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Personality */}
      <div className="bg-[#111113] rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Personality</h2>
        <div className="flex flex-col gap-4">
          {personality.map((p, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{p.label}</span>
                <span>{p.value}%</span>
              </div>
              <div className="w-full bg-[#1a1a1d] h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  style={{ width: `${p.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="bg-[#111113] rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-6">Interests</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {interests.map((i, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 text-center shadow"
            >
              <div>
                <p className="text-xl font-bold">{i.value}%</p>
                <p className="text-sm text-gray-300">{i.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Post Form */}
      <div className="bg-[#111113] rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleAddPost} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Image URL"
            value={newPost.image}
            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            className="bg-[#1a1a1d] p-3 rounded-lg text-white"
          />
          <input
            type="text"
            placeholder="Caption"
            value={newPost.caption}
            onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
            className="bg-[#1a1a1d] p-3 rounded-lg text-white"
          />
          <input
            type="number"
            placeholder="Likes"
            value={newPost.likes}
            onChange={(e) => setNewPost({ ...newPost, likes: e.target.value })}
            className="bg-[#1a1a1d] p-3 rounded-lg text-white"
          />
          <input
            type="number"
            placeholder="Comments"
            value={newPost.comments}
            onChange={(e) => setNewPost({ ...newPost, comments: e.target.value })}
            className="bg-[#1a1a1d] p-3 rounded-lg text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
          >
            Add Post
          </button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#111113] rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-6">Recent Posts</h2>
        {recentPosts.length === 0 ? (
          <p className="text-gray-400">No posts yet. Add one above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-[#1a1a1d] rounded-xl shadow p-4">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="mt-3 text-gray-300 text-sm">{post.caption}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                  <span>❤️ {post.likes} Likes</span>
                  <span>💬 {post.comments} Comments</span>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
