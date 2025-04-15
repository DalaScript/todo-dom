const API_URL = "http://localhost:5000";

export async function getUserTasks(token) {
    const res = await fetch(`${API_URL}/tasks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.message || "Failed to load tasks");
    return data;
}

export async function createTask(token, taskData) {
    const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify(taskData),
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.message || "");
    return data;
}