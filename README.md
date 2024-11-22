User Management System with Role-Based Access Control (RBAC)
This project is a straightforward User Management System built using React.js. It facilitates managing users and roles through a table interface, allowing functionality for adding, updating, and deleting user records. Each user record includes essential details such as name, email, role, and status (active/inactive). User data is stored locally using the browser's localStorage to ensure data persistence across page reloads.

Key Features
User Management
1.Add New Users: Use a user-friendly form to add users with attributes like name, email, and role. The email input is validated to ensure proper formatting.
2.Edit User Details: Modify the existing user information, including their assigned role, by using the "Edit" option in the user list.
3.Delete Users: Remove user records permanently by clicking the "Delete" button available in the table.
Role Management
Roles can be created and assigned to users during the add or edit process. This feature provides flexibility in controlling access and permissions.
Data Persistence
Utilizes the browser's localStorage to:
Save user and role changes (e.g., additions, updates, and deletions).
Ensure that the data remains intact even after refreshing the page, as it automatically loads from localStorage on initialization.
Responsive Design
Optimized for both desktop and mobile devices, ensuring the tables and forms are easily accessible and readable on any screen size.
Technology Stack
React.js: For building the interactive and dynamic user interface.
Tailwind CSS: For styling the application and ensuring responsive design.
localStorage: For data storage and persistence.
Getting Started
Clone the Repository
git clone url
Install Dependencies
Make sure you have Node.js and npm installed. Navigate to the project directory and run:

npm install
Start the Application
Run the following command to start the project locally:

npm start
How to Use
Create Roles:

Begin by defining roles that can be assigned to users later.
Add Users:

Click on the "Add User" button and fill out the form with details like name, email, and the role to create a new user.
Edit User Details:

Locate the "Edit" button in the user table, click it to pre-fill the form with existing details, and make necessary modifications.
Delete Users:

Permanently remove a user by clicking the corresponding "Delete" button in the table.
Role Assignment:

When adding or editing a user, select the appropriate role to define their permissions and access levels.
LocalStorage Integration:

All data (users and roles) is saved to localStorage, ensuring persistence. Any modifications you make will reflect immediately and remain consistent across page refreshes.