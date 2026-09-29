# Contact Management System

A RESTful Contact Management System developed using Node.js, Express.js, MongoDB Atlas, and Mongoose.

The application provides APIs to create, retrieve, update, and delete contact records. It also includes input validation, unique field constraints, and error handling.



## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- REST API
- cURL for API testing



## Features

- Create a new contact
- Retrieve all contacts
- Retrieve a contact by ID
- Update contact information
- Delete a contact
- Validate phone numbers
- Validate email addresses
- Ensure unique contact IDs
- Ensure unique email addresses
- Handle invalid requests and database errors
- Store contact data in MongoDB Atlas



## Contact Data

Each contact contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| contactId | String | Unique ID of the contact |
| name | String | Name of the contact |
| phone | String | 10-digit phone number |
| email | String | Valid email address |

### Example Contact

```json
{
  "contactId": "C001",
  "name": "Dhivya Asaithambi",
  "phone": "9123456780",
  "email": "dhivya@gmail.com"
}


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contacts` | Create a new contact |
| GET | `/contacts` | Retrieve all contacts |
| GET | `/contacts/:id` | Retrieve a contact by ID |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |

## Validation

- `contactId` is required and must be unique.
- `name` is required.
- `phone` must contain exactly 10 digits.
- `email` must have a valid format and must be unique.

## Database

- Database: `contact_management`
- Collection: `contacts`
- Database: MongoDB Atlas
- ODM: Mongoose

## How to Run

```bash
npm install
node src/app.js
