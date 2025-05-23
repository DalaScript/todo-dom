const API_URL = "http://localhost:5000";

export async function getUserTasks(token, filters = {}) {
    const params = new URLSearchParams();

    if(filters.completed && filters.completed !== "all") {
        params.append("completed", filters.completed);
    }

    if(filters.sort) {
        params.append("sort", filters.sort);
    }

    if(filters.search) {
        params.append("search", filters.search);
    }
    
    const res = await fetch(`${API_URL}/tasks?${params.toString()}`, {
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
    if(!res.ok) throw new Error(data.message || "Failed to create task");
    return data;
}

export async function updateTask(token, taskId, updates) {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.message || "Failed to update task");
    return data;
}

export async function deleteTask(token, taskId) {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.message || "Failed to delete task");
    return data;
}