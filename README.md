# Join Waitlist

This project allows users to join a waitlist by entering their email addresses. The emails are stored in Firebase Realtime Database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Demo](#Demo)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Firebase Configuration](#firebase-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simple form to collect user emails.
- Data is stored in Firebase Realtime Database.
- Uses Firebase for real-time data handling and jQuery for form submission.

## Prerequisites

Ensure you have the following before setting up the project:

- A web browser.
- Internet connection for loading Firebase SDK and jQuery.

## Demo
[!(demo)](https://github.com/mandarwagh9/waitlist-webpage/blob/main/0821(2).gif?raw=true)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/waitlist-webpage.git
   cd waitlist-webpage
   ```

2. **Install Dependencies**

   This project does not require any local dependencies, but it relies on external CDN links for jQuery and Firebase SDK.

## Running the Project

1. **Open the `index.html` File**

   You can open `index.html` directly in your web browser.

## Firebase Configuration

To use Firebase, you need to replace the placeholder values in `index.html` with your Firebase project's configuration details.

1. **Go to the [Firebase Console](https://console.firebase.google.com/)** and select your project.
2. **Navigate to Project Settings** and find your Firebase config details.
3. **Replace the placeholders** in `index.html` with your Firebase configuration:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

## Troubleshooting

- **Firebase Initialization Issues**: Ensure you have replaced the configuration placeholders with your actual Firebase project details. Verify Firebase rules and ensure your browser's console shows no errors related to Firebase.

- **Permission Denied Errors**: Check your Firebase Realtime Database rules. For development purposes, you might set your rules to allow read and write access. Update the rules in the Firebase Console to:

   ```json
   {
     "rules": {
       ".read": "auth != null",
       ".write": "auth != null"
     }
   }
   ```

   Refine these rules for production to secure your database.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. Ensure to follow the project's code style and provide clear descriptions of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** Make sure to replace `yourusername` and `your-repo-name` with your actual GitHub username and repository name.


### Additional Tips:

- **Replace Placeholder Values**: Ensure you replace all placeholder values with actual details.
- **Test Thoroughly**: Test the application thoroughly to make sure Firebase integration is working correctly.
- **Keep Firebase Config Secure**: When pushing code to a public repository, consider removing sensitive information and using environment variables for configuration.

Let me know if you need any adjustments or additional information!
