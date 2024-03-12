# webmusicapplication-1
The script.ts file demonstrates obtaining a Spotify API access token and making a request to get data about a user.

I followed the steps on the official Spotify web developer site for this example:
https://developer.spotify.com/documentation/web-api

To run this demo you will need:

- A [Node.js LTS](https://nodejs.org/en/) environment or later (Please use vscode, it dramatically simplifies the following steps)
- A [Spotify Developer Account](https://developer.spotify.com/)
- Vite installed in vscode

Create an instance of an app on the Spotify for developers website.

On the Spotify developer app site, change your redirect URI to http://localhost:5173/callback and http://localhost:5173/callback/

In vscode:
Navigate to the script.ts file.
Change the clientID to the one generated when you created your spotify web app on their website.

Install Vite using this command within the project directory:
npm install vite --save-dev

Now cd into the get_user_profile folder.

Run the commands:
npm install
npm run dev

This will generate a localhost that will prompt you to sign in with your spotify credentials!


