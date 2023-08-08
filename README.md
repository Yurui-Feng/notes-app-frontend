# Notes App Frontend

This repository contains the frontend code for the Notes App, a web application for creating and managing notes. The frontend is built using React and it interacts with a backend API to manage user authentication and notes storage.
  You can add a screenshot of your app here

## Features

- **Google Authentication**: Users can sign in using their Google accounts.
- **Add, Delete Notes**: Create new notes and remove old ones with a simple user interface.
- **Modern UI**: Beautifully designed with responsive UI components.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 recommended)
- [npm](https://npmjs.com/)

## Local Development

1. Clone the repository:
   ```sh
   git clone https://github.com/Yurui-Feng/notes-app-frontend.git
   cd notes-app-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

Visit `http://localhost:3000` in your browser.

## Docker Deployment

The project comes with a Dockerfile that bundles the app with Nginx for production deployment.

1. Build the Docker image:
   ```sh
   docker build -t notes-app-frontend .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 80:80 notes-app-frontend
   ```

Now, the app should be accessible at `http://localhost`.

## Main Components

### Header Component

The header component displays the application title and provides options for users to either login using Google authentication or logout from the application.

```jsx
<Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} backendUrl={backendUrl} />
```

## Live Demo

Visit the live demo of the app at: [https://notesapp.fuyuri.com/](https://notesapp.fuyuri.com/)

## Backend Repository

For the backend code and API details, check out the backend repository: [notes-app-backend](https://github.com/Yurui-Feng/notes-app-backend)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Remember to add a screenshot of your app to the repository and reference it in the README (`screenshot.png` in the example above). This will give visitors an immediate visual understanding of what your app looks like.