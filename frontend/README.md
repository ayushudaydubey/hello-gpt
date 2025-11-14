# AI ChatBot Frontend

A beautiful, responsive chat interface for interacting with the AI chatbot backend.

## Features

✨ **Real-time Communication** - Socket.io integration for instant messaging  
🎨 **Modern UI** - Clean and intuitive chat interface  
📱 **Responsive Design** - Works great on mobile and desktop  
💬 **Chat History** - Messages displayed in conversation format  
⚡ **Smooth Animations** - Slide-in effects and loading animations  
🔄 **Connection Status** - Live connection indicator  

## Files

- **index.html** - Main chat interface markup
- **styles.css** - Complete styling with animations and responsive design
- **script.js** - Socket.io client and chat logic

## How to Use

1. Make sure your backend server is running on `http://localhost:3000`

2. Open `index.html` in your browser (or serve it with a simple HTTP server):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

3. Open `http://localhost:8000` in your browser

4. Type your message and click Send (or press Enter)

## Backend Connection

The frontend expects the backend to:
- Run on `http://localhost:3000`
- Use Socket.io for WebSocket communication
- Emit `ai-response` event with `{ response: "text" }` structure
- Listen for `ai-message` events

## Customization

- **Server URL**: Edit line 1 in `script.js` to change the backend URL
- **Colors**: Edit the gradient colors in `styles.css` (`.chat-header`, `.send-button`, etc.)
- **Max Width**: Modify `.chat-container` max-width in `styles.css` to change chat box size
