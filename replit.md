# GRIP — Global Reputation Information Platform

## Overview
GRIP is a Celebrity Reputation Command Center built with React and Vite. It's a dashboard application designed for brand managers to monitor multiple celebrities from a single workspace, track social media sentiment, mentions, videos, and trending topics.

## Project Details
- **Name**: GRIP (Global Reputation Information Platform)
- **Type**: Single-page React application
- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.4.1
- **Language**: JavaScript (JSX)
- **Port**: 5000 (development server)

## Features
- **Celebrity Portfolio**: View all tracked celebrities in a card-based layout
- **Individual Dashboards**: Click any celebrity card (Virat Kohli enabled in demo) to see:
  - Sentiment analysis (positive, neutral, negative mentions)
  - Social media mentions from X, Instagram, Reddit, Quora, and news outlets
  - Video feed with sentiment tagging
  - Trending hashtags and topics
  - Brand endorsements and business ventures
  - Weekly reputation reports (downloadable)
- **Celebrity Comparison**: Compare sentiment metrics across multiple celebrities
- **Filters**: Filter mentions by sentiment and source

## Project Structure
```
/
├── src/
│   ├── App.jsx          # Main application component with all views
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Node dependencies and scripts
└── .gitignore          # Git ignore patterns
```

## Development Setup
The project is configured to run in the Replit environment with:
- **Dev Server**: `npm run dev` runs on `0.0.0.0:5000`
- **HMR**: Hot Module Replacement configured with WSS protocol for Replit proxy
- **Host Configuration**: Vite configured to accept all hosts for iframe compatibility

## Deployment
- **Type**: Static site deployment
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- The build creates an optimized production bundle

## Architecture Notes
- Single-component architecture (App.jsx contains all views)
- State management using React hooks (useState)
- Inline CSS-in-JS styling
- No external CSS frameworks
- Demo data embedded in component (celebrities, mentions, videos, hashtags)

## Current State (November 30, 2025)
- ✅ Project successfully imported from GitHub
- ✅ React + Vite setup complete
- ✅ Development server running on port 5000
- ✅ Workflow configured for automatic startup
- ✅ Deployment configuration set as static site
- ✅ All dependencies installed
- ✅ Application tested and verified working

## Future Enhancements (Not Implemented)
- Backend API integration for real-time data
- Database for storing celebrity information
- Authentication for brand managers
- Real social media API connections
- Advanced analytics and reporting
- Multiple celebrity dashboard access (currently only Virat Kohli)
