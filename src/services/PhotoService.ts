const API_URL = import.meta.env.VITE_API_URL;

export async function getPhotos() {
    const response = await fetch(
        `${API_URL}/photos`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch photos");
    }

    return response.json();
}