import { useState, useEffect } from "react";
import axios from "axios";

export default function ReelsPage() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reels from backend API
  useEffect(() => {
    async function fetchReels() {
      try {
        const res = await axios.get("http://localhost:4000/api/reels");
        setReels(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reels", err);
        setLoading(false);
      }
    }
    fetchReels();
  }, []);

  if (loading) return <div className="p-6">Loading Reels...</div>;
  if (!reels.length) return <div className="p-6">No reels available</div>;

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map((reel) => (
        <div
          key={reel.id}
          className="h-screen snap-start flex flex-col justify-center items-center bg-black"
        >
          <video
            src={reel.video_url}
            controls
            autoPlay
            loop
            className="h-4/5 w-auto rounded-xl"
          />
          <p className="text-white mt-3">{reel.caption}</p>
        </div>
      ))}
    </div>
  );
}
