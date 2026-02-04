A full-stack mini investment platform built as part of the Grip Invest Winter Internship Assignment.
This project simulates a real-world investment system with authentication, investment products, portfolio insights, and containerized deployment.

Tech Stack:
Backend

Node.js
Express.js
MySQL (Docker)
Sequelize ORM
JWT Authentication

Frontend
React.js
Bootstrap
Axios

DevOps
Docker
Docker Compose

Investment Products

Fetch predefined investment products
Display in frontend dashboard

Investments (Demo)
Simulated investment API
Portfolio insights (AI-mocked)

AI Integrations (Mocked)
Portfolio risk summary
Password strength suggestions (simulated)

Dashboard
React UI with live backend data

gripinvest_winter_internship_backend/
 ├── app/                # Backend logic
 ├── frontend/           # React frontend
 ├── docker-compose.yml  # MySQL container
 ├── server.js           # Backend entry
 └── README.md

How to Run the Project
Start MySQL (Docker)
docker compose up -d

Start Backend
npm start

Backend runs at:
http://localhost:8080

Start Frontend
cd frontend
npm start

Frontend runs at:
http://localhost:8081

Endpoint	Method	Description
/api/auth/signup	POST	Register user
/api/auth/signin	POST	Login
/api/products	GET	Fetch investment products
/api/invest	POST	Simulate investment
/api/ai/portfolio	GET	AI portfolio insight
 
