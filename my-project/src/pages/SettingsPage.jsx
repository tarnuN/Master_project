import { useState, useEffect } from "react";
import axios from "axios";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    email: "",
    password: "",
    interests: "",
    notifications: true,
  });

  const [loading, setLoading] = useState(true);

  // Fetch current user settings from backend
  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await axios.get("http://localhost:4000/api/settings");
        setSettings(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching settings", err);
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setSettings({ ...settings, [name]: type === "checkbox" ? checked : value });
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:4000/api/settings", settings);
      alert("Settings updated successfully!");
    } catch (err) {
      console.error("Error updating settings", err);
      alert("Failed to update settings");
    }
  };

  if (loading) return <div className="p-6">Loading Settings...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Account Settings</h1>

      <div className="grid gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={settings.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={settings.password}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="interests"
          type="text"
          placeholder="Interests"
          value={settings.interests}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <label className="flex items-center gap-2">
          <input
            name="notifications"
            type="checkbox"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Enable notifications
        </label>
      </div>

      <button
        onClick={handleSave}
        className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
      >
        Save Settings
      </button>
    </div>
  );
}
