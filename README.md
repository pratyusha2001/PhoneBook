# Phonebook

Phonebook Web App project built using the MERN stack.

## Introduction

The Phonebook Web App is a simple web application that allows users to store and manage their contacts. It provides functionalities to add new contacts, view existing contacts, update contact information, and delete contacts. The application is built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. This stack enables the development of a full-stack JavaScript application.

## Features

The Phonebook Web App includes the following features:
1. Contact Management: Users can perform various operations on their contacts, including adding new contacts, viewing existing contacts, updating contact information, and deleting contacts.
2. Responsive Design: The user interface is designed to be responsive, ensuring that the application is usable on different devices and screen sizes.

## Prerequisites

Before running the Phonebook Web App, ensure that you have the following installed:

1. Node.js: Make sure you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org).

2. MongoDB: Install MongoDB on your machine or use a remote MongoDB database service.

## Installation

To install and run the Phonebook Web App, follow these steps:

1. Clone the repository: Use Git to clone the repository to your local machine.

   ```
   git clone https://github.com/pratyusha2001/PhoneBook.git
   ```

2. Navigate to the project directory:

   ```
   cd PhoneBook
   ```

3. Install dependencies: Run the following command to install the necessary dependencies for both the server and client.

   ```
   npm install
   ```

4. Set up environment variables: Create a `.env` file in the project's root directory and provide the required environment variables. Include variable `DB_URI` for MongoDB connection URL.

5. Start the application: Use the following command to start the application. It will concurrently start the server and client.

   ```
   npm run start
   ```

6. Access the application: Once the application is running, you can access it by navigating to `http://localhost:3000` in your web browser.

## Folder Structure

The folder structure of the Phonebook Web App project is organized as follows:

- `client`: Contains the client-side code, built with React.js.
- `server`: Contains the server-side code, built with Express.js and Node.js.
- `public`: Includes static assets for the client-side application.
- `models`: Defines the data models for contacts in the MongoDB database.
