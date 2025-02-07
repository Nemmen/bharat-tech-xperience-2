import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import axios from "axios";

const User = () => {
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://bharat-tech-backend.vercel.app/api/registrations"
        );
        console.log(res.data);
        setTeams(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleCheckIn = async () => {
    if (!selectedTeam) return;

    try {
      await axios.put(
        `https://bharat-tech-backend.vercel.app/api/registrations/checkin/${selectedTeam}`,
        { isCheckedin: true } // Corrected request payload
      );

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);

      // Update state to reflect check-in
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team._id === selectedTeam ? { ...team, isCheckedin: true } : team
        )
      );
    } catch (err) {
      console.error("Error during check-in:", err);
    }
  };

  const filteredTeams = search
    ? teams.filter(
        (team) =>
          team.teamLeader &&
          team.teamLeader.email &&
          team.teamLeader.email.toLowerCase() === search.toLowerCase()
      )
    : [];

  return (
    <>
      <div id="stars"></div>
      <div className="relative min-h-screen bg-transparent text-white flex flex-col items-center p-8 overflow-hidden">
        <h1 className="text-4xl font-bold mb-6 z-10">Team Check-In</h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg z-10">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
            size={24}
          />
          <motion.input
            type="text"
            placeholder="Search by Leader's Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 pl-14 text-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-full outline-none backdrop-blur-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Team List */}
        {filteredTeams.length > 0 && (
          <div className="space-y-6 w-full max-w-md mt-6 z-10">
            {filteredTeams.map((team) => (
              <motion.div
                key={team._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTeam(team._id)}
                className={`p-6 border border-gray-500 rounded-xl cursor-pointer transition-all backdrop-blur-md shadow-lg ${
                  selectedTeam === team._id
                    ? "bg-indigo-900 bg-opacity-70"
                    : "bg-gray-800 bg-opacity-50"
                }`}
              >
                <h2 className="text-xl font-semibold mb-2">{team.teamName}</h2>
                <p className="text-gray-300">Leader: {team.teamLeader.name}</p>
                <div className="mt-3 text-gray-400 flex flex-wrap gap-2">
                  {team.teamMembers.map((member, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 bg-opacity-50 rounded-full text-sm"
                    >
                      {member.name}
                    </span>
                  ))}
                </div>
                {team.isCheckedin && (
                  <p className="text-green-400 mt-2 text-sm font-bold">
                    ✔ Checked In
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Check-In Button */}
        {selectedTeam !== null && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCheckIn}
            className="mt-8 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 hover:shadow-xl transition-all duration-300"
          >
            Check In
          </motion.button>
        )}

        {/* Success Popup */}
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Check-In Successful!
          </motion.div>
        )}
      </div>
    </>
  );
};

export default User;
