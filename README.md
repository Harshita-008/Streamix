# **Streamix - Modern Video Streaming Platform**

## 📝 Description
Streamix is a modern, feature-rich video streaming platform inspired by YouTube, built with React and Vite. It provides users with a seamless experience for watching and discovering content. The platform is designed with a focus on user experience, performance, and modern web technologies.

## ✨ Features
- 🎥 **Video Streaming**
  - High-quality video playback
  - Multiple video quality options
  - Smooth buffering and loading
  - Video player controls
  - Full-screen mode support

- 🔍 **Content Discovery**
  - Trending videos on homepage
  - Video recommendations
  - Category-based filtering
  - Search functionality
  - Related videos suggestions

- 📊 **Video Analytics**
  - View count tracking
  - Like/Dislike system
  - Comment section
  - Channel statistics
  - Video duration display

- 📱 **User Interface**
  - Responsive design
  - Sidebar navigation
  - Dark/Light theme
  - Mobile-friendly layout
  - Intuitive controls

- 🎯 **Channel Features**
  - Channel information display
  - Subscriber count
  - Video uploads
  - Playlist management
  - Channel customization

## 🛠️ Tech Stack
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS3
- **API Integration**: YouTube Data API
- **Date Handling**: Moment.js
- **Development Tools**:
  - ESLint for code quality
  - Git for version control
  - npm/yarn for package management

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14.0 or later)
- npm or yarn package manager
- YouTube Data API key

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/Streamix.git
cd Streamix
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create a `.env` file in the root directory and add your YouTube API key:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

4. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

5. **Build for Production**
```bash
npm run build
# or
yarn build
```

### Environment Variables
- `VITE_YOUTUBE_API_KEY`: Your YouTube Data API key for accessing YouTube's services

### Development Tips
- Use `npm run lint` to check code quality
- Follow React best practices
- Keep your API key secure
- Test on multiple devices for responsiveness

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
