User Management System
Role-Based Access Control (RBAC)
A lightweight, React-based User Management System designed to manage users and roles efficiently. This application provides a clean interface for adding, editing, and deleting user records while ensuring data persistence using the browser's localStorage.





🌟 Features
👤 User Management
Add Users: Easily add new users by filling out a form with their name, email, and role. The email field is validated to ensure proper formatting.
Edit Users: Modify user details such as name, email, and assigned role using the "Edit" option in the user table. The form pre-fills with the selected user’s details for convenience.
Delete Users: Permanently remove users with the "Delete" button available in the table.
🔒 Role Management
Create roles and assign them to users during the add/edit process. Roles help define user permissions and access levels.
💾 Persistent Data Storage
Utilizes localStorage for:
Saving user and role data (including additions, edits, and deletions).
Retaining all data even after refreshing the page by reloading it from localStorage.
📱 Responsive Design
Built with Tailwind CSS to ensure a responsive and clean interface across desktop and mobile devices. Tables and forms dynamically adjust to various screen sizes.





💻 Technology Stack
React.js: For building a dynamic and interactive UI.
Tailwind CSS: For modern, responsive styling.
localStorage: For persisting user and role data.




🚀 Getting Started
Follow these steps to set up and run the project locally:
1. Clone the Repository
git clone https://github.com/shantanu-yadav01/User-Management_vrv.git

2. Install Dependencies
Ensure you have Node.js and npm installed. Navigate to the project directory and run:
npm install

3. Start the Application
Run the following command to launch the app locally:

npm start



🛠️ How to Use
Initialize Roles:

Create roles before assigning them to users.
Add Users:

Click "Add User", fill out the form, and submit to add a new user.
Edit User Information:

Use the "Edit" button to modify user details. Changes will be reflected immediately.
Delete Users:

Permanently delete a user by clicking the "Delete" button.
Role Assignment:

Assign a role to each user during the add or edit process to control their permissions.
LocalStorage Integration:

All data is automatically stored and retrieved from localStorage, ensuring that it persists even after the page is refreshed.
