XpenseXpert is a full-stack expense tracking application designed to help users manage their personal finances efficiently. The primary goal is to provide a seamless and intuitive platform where users can log daily expenses, monitor spending habits, and gain insights into their financial health. The app promotes smarter budgeting and financial awareness through real-time tracking and data visualization.
Features:
-User Authentication: Secure signup and login using JWT-based authentication.
-Expense Management: Add, edit, and delete expenses with fields like amount, category, date, and description.
-Dashboard & Analytics: Visual representations of spending patterns via graphs.
-Mobile-Responsive UI: Built with React for a clean, responsive experience across devices.
-Backend API: Robust Express.js API integrated with MongoDB for data storage and retrieval.


 API Documentation
The User Signup functionality in XpenseXpert is implemented through the endpoint POST /auth/signup, which is used to register a new user into the system. When a user initiates the signup process, the client sends a JSON request body containing the user's name, email, and password. For example, a valid request might include the name "Antareep Dey", the email address "antareep@gmail.com", and a chosen password such as "abcd". The name field represents the user's full name, email is the login identifier, and the password is the secret credential the user wants to set.
Upon successful registration, the server responds with an HTTP status code 201 (Created), indicating that a new user account has been created. The response body contains a JSON object with a message confirming "Signup successfully" and a success flag set to true, signifying the operation was completed without any issues. This endpoint plays a crucial role in onboarding users and establishing secure credentials within the XpenseXpert application.
 

The User Login functionality in XpenseXpert is handled via the POST /auth/login endpoint. This endpoint is responsible for authenticating existing users by validating their credentials and issuing a JWT token for secure session management. When a user attempts to log in, they must provide their registered email address and corresponding password in the request body. For instance, a login request may include the email "pinakesh.chatto2016@gmail.com" and password "abcd". These credentials are then verified against the database records to ensure their validity.
If the login is successful, the server responds with an HTTP status code 200 OK, along with a JSON response containing several key elements. The response includes a message stating "Login Success" and a success field set to true, confirming the operation was successful. Additionally, a jwtToken is returned, which is a JSON Web Token that the client must store and attach to future requests to access protected routes within the application. The response also includes the user's email and full name, such as "Pinakesh Chattopadhyay", which can be used on the frontend to personalize the user experience. This endpoint forms a crucial part of the authentication mechanism in XpenseXpert, ensuring that only authorized users can access and manage their expense data securely.

