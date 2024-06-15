# School Application
This project was bootstrapped with Create React App.

## Introduction

This is a school application to maintain the records of the school, including students' and teachers' data. In this application, school management and other users can publish blogs for various activities such as school games, exams, exam results, video dates, promotions, cultural activities, blood donation camps, etc.

## Users

This school application has 7 different types of users, each with different features based on their user role:

- Headmaster
- Vice Headmaster
- Teacher Admin
- Teacher
- Student Admin
- Student Class Leader
- Student

## Pages

The school application has 9 different pages, each demonstrating some features, with some pages having user-specific features.

### Home Page

In the homepage, everyone can visit without requiring a login. On the home page, some posts will appear which are posted by the school management, such as school games, promotions, results, and exam dates.

### Login Page

First-time users can create their profile using the sign-up page, but profiles can also be created by school management personnel like the headmaster, vice headmaster, or teacher admin. On the login page, users need to provide their credentials to log in.

### Blogs Page

Every user can visit the blogs page with login only. On this blogs page, there are some blogs posted by the school management and other users.

### Profile Detail Page

Every user can visit their profile detail page; user login is required.

### User Creation Page

Headmaster and teacher admin can visit and create new users; login is required. While creating users, they can assign the user role as well. When a user is created, an ID number will be generated for every user.

### Create Blog Page

Every user can visit and create new blogs and posts; user login is required. While creating a blog, it takes the user information like name, ID, and user role.
## Technologies Used

- React.js
- Material-UI (MUI)
- Axios (for API calls)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sanyasappadu/MySchoolFrontend.git
    cd MySchoolFrontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable components.
  - `pages/`: Different pages for different user types.
  - `services/`: API calls and service functions.
  - `utils/`: Utility functions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
