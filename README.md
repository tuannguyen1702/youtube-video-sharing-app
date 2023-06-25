# Youtube Video Sharing App

This project is a Youtube Video Sharing application that allows users to register, log in, share Youtube videos, view a list of shared videos, and receive real-time notifications for new video shares. The application is divided into two parts: the server, built with Nestjs, and the client, built with Nextjs.

## Key Features

- User registration and login: Users can create an account and log in to the application.
- Sharing Youtube videos: Logged-in users can share Youtube videos by providing the video URL.
- Viewing a list of shared videos: Users can browse through the shared videos and view their details.
- Real-time notifications for new video shares: When a user shares a new video, other logged-in users will receive real-time notifications containing the video title and the name of the user who shared it.

## Prerequisites

Make sure you have the following software and tools installed:

- Node.js (version >=16)
- npm or Yarn 
- MongoDB (version >= 4)

## Installation & Configuration

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the server directory: `cd server`
3. Install server dependencies: `npm install` or `yarn install`
4. Configure server settings:
   - Create a `.env` file in the server directory.
   - Specify the necessary environment variables in the `.env` file (e.g., database connection details, JWT secret, etc.).
5. Navigate to the client directory: `cd ../client`
6. Install client dependencies: `npm install` or `yarn install`
7. Configure client settings:
   - Open the `.env.local` file in the client directory.
   - Update the necessary environment variables (e.g., API endpoint, etc.).

## Database Setup

1. Make sure MongoDB is running on your system.
2. Create a new MongoDB database.
3. Update the database connection details in the server's `.env` file.

## Running the Application

1. Start the server: In the server directory, run `npm start` or `yarn start`.
2. Start the client: In the client directory, run `npm run dev` or `yarn dev`.
3. Access the application in a web browser: Open `http://localhost:3000`.
4. Run the test suite: In the server directory, run `npm run test` or `yarn test`.

## Docker Deployment

To deploy the application using Docker, follow these steps:

1. Build the Docker image: In the root directory, run `docker build -t youtube-app .`
2. Run a Docker container: `docker run -d -p 3000:3000 youtube-app`

## Usage

Once the application is running, follow these steps to use its features:

1. Login/Register: Click on the "Login/Register" button to login or register new a account.
3. Share a Youtube video: Click on the "Share Video" button, paste the Youtube video URL, and submit the form.
4. View shared videos: Click on Home Button or Funny Movies text to go to the shared videos list.
5. Real-time notifications: When a new video is shared by another user, you will receive a real-time notification containing the video title and the user's name.

## Troubleshooting

If you encounter any issues during setup or usage, consider the following troubleshooting steps:

- Double-check that all the prerequisites are installed correctly.
- Verify the configuration settings for both the server and client.
- Make sure the database connection details are accurate.

If you're still experiencing difficulties, please open a new issue in the project's repository for further assistance.

