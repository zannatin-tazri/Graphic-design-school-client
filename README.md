# Graphic Design School Web Application

The **Graphic Design School** is a responsive web application designed to manage and showcase the creative content of a design school. It features role-based access for regular users and admins, allowing for dynamic content control and interaction.

---

# Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v18 or later)

npm (Node Package Manager)

Docker & Docker Compose

Git

VS Code or any code editor  
Make sure server is running (Graphic-design-school-server)


# Run project locally
Commands-

-git clone https://github.com/zannatin-tazri/Graphic-design-school-client.git

-cd Graphic-design-school-client

Create .env file to the same level as package.json and paste environment variables

-"npm install"

-"npm run dev"

# Required environment variables
VITE_apiKey=AIzaSyClxZSmErm3YOBLbnmJouUWQTWqEdyHDW4  

VITE_authDomain=graphic-design-268eb.firebaseapp.com  

VITE_projectId=graphic-design-268eb  

VITE_storageBucket=graphic-design-268eb.firebasestorage.app  

VITE_messagingSenderId=913159203468  

VITE_appId=1:913159203468:web:73a524d55e6aa76c03a9a9  

# Build and run the container
-systemctl start docker

-run "docker compose up --build"

-docker ps -a   # To verify the containers are running

PORT : 5173

## CI/CD pipeline yml file
https://github.com/zannatin-tazri/Graphic-design-school-client/blob/main/.github/workflows/frontend.yml

The frontend.yml file is configured to automate the CI/CD pipeline for the frontend service. On every push to the main branch, it performs the following tasks:  

Builds the Docker image of the frontend application using the provided Dockerfile.  

Pushes the image to Docker Hub for containerized delivery.  

Deploys the latest image to a remote server via SSH by pulling, stopping any existing container, and running the new one on port 5173.  


## About Website


## Authentication and Access Control

- **Firebase Authentication** is used for secure sign in and sign up.
- Users **must be signed in** to:
  - View detailed website content
  - Access the **Dashboard** and **Profile**
- Admin privileges are granted by assigning specific email addresses.

---

## Navigation Bar

The navigation bar includes:
- **Home**
- 👤 **Profile** – Visible only to signed-in users.
  - Users can update their information:
    - Name
    - Phone Number
- 📄 **About Us**
- 📄 **Program**
- 📄 **Contact**
- 🖥️ **Dashboard** – Accessible only to signed-in users.
                    -admin control can be given
  


---

## Admin Features

Users granted admin privileges have additional access to manage specific parts of the website:

### 1. Work Gallery
- Admin can sees an extra button: **Manage Work Gallery** at the bottom of the title "Work gallery"
- Features on the Manage Page:
  -  Add new gallery items (Photo, Title, Subtitle)
    - Delete existing gallery items

### 2. About Us
- Admin sees a **Read More** button
- Features on the Manage Page:
  - Change the photo
  - Edit the "About Us" content

---

## Responsive Design

- The website is fully responsive and works seamlessly across all mobile and tablet devices.

---

## Guest Limitations

- Guests (not signed in) **cannot**:
  - View full website content
  - Access the dashboard or profile section

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Authentication**: Firebase Auth
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **CI/CD**: GitHub Actions with Dockerized deployment

---




