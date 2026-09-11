import React, { useState, useEffect } from "react";

const ReadinessDashboard = () => {
  const [readiness, setReadiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch readiness score from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/readiness")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch readiness score");
        return res.json();
      })
      .then((data) => {
        setReadiness(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white p-4">Loading Readiness Stats...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-800 max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
        Command Center Status
      </h2>

      {/* Main Readiness Score Display */}
      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-6">
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wider">Submission Readiness</p>
          <span className="text-3xl font-extrabold text-green-400">
            {readiness?.score}%
          </span>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center bg-gray-900">
          <span className="text-sm font-semibold">{readiness?.score}%</span>
        </div>
      </div>

      {/* Status Checklist Details */}
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded">
          <span className="text-sm text-gray-300">Tasks complete</span>
          <span className={`text-xs font-bold px-2 py-1 rounded ${readiness?.tasksComplete ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
            {readiness?.tasksComplete ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded">
          <span className="text-sm text-gray-300">Checklist complete</span>
          <span className={`text-xs font-bold px-2 py-1 rounded ${readiness?.checklistComplete ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
            {readiness?.checklistComplete ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded">
          <span className="text-sm text-gray-300">Final file available</span>
          <span className={`text-xs font-bold px-2 py-1 rounded ${readiness?.finalFileAvailable ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
            {readiness?.finalFileAvailable ? 'Available' : 'Pending'}
          </span>
        </div>

        <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded">
          <span className="text-sm text-gray-300">Critical issues</span>
          <span className="text-xs font-bold px-2 py-1 rounded bg-red-900/50 text-red-400">
            {readiness?.criticalIssues}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadinessDashboard;