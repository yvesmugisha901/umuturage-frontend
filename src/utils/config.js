// src/config.js

// Base URL for your backend API
export const API_BASE = "http://localhost:5000/api/isibo";

// Any other global constants
export const PAGE_SIZE = 20;

// Common headers for axios requests
export const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { Authorization: token ? `Bearer ${token}` : "" };
};
