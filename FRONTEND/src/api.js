const API_BASE_URL = "http://localhost:5000/api";

export const getTasks = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks`);
    return await res.json();
  } catch (err) { return { success: false, tasks: [] }; }
};

export const getTeam = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/team`);
    return await res.json();
  } catch (err) { return { success: false, team: [] }; }
};

export const getChecklist = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/checklists`);
    return await res.json();
  } catch (err) { return { success: false, checklist: [] }; }
};

export const updateChecklist = async (id, completed) => {
  try {
    const res = await fetch(`${API_BASE_URL}/checklists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const getDeadline = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/deadlines`);
    return await res.json();
  } catch (err) { return { success: false, deadlines: [] }; }
};

export const getRisk = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/risk`);
    return await res.json();
  } catch (err) { return { success: false, risk: [] }; }
};

export const getReadiness = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/readiness`);
    return await res.json();
  } catch (err) { return { success: false, readiness: {} }; }
};

export const addTask = async (taskData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const updateTask = async (id, updatedData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// --- Emergency API Endpoints ---
export const getEmergencyStatus = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/emergency`);
    return await res.json();
  } catch (err) { return { success: false, active: false }; }
};

export const activateEmergency = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/emergency/activate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (err) { return { success: false, error: err.message }; }
};

export const deactivateEmergency = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/emergency/deactivate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (err) { return { success: false, error: err.message }; }
};

export const triggerPanic = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/emergency/panic`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (err) { return { success: false, error: err.message }; }
};