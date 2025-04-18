// This file provides configuration that can be updated without rebuilding the application
// For local development, values come from .env file via import.meta.env
// For production, you can update this file directly on the server

const config = {
  // Use environment variables in development, but fallback to empty values in production
  // You'll need to manually update these values when deploying
  youtubeApiKey: import.meta.env.VITE_YOUTUBE_API_KEY || "YOUR_API_KEY_PLACEHOLDER"
};

export default config;