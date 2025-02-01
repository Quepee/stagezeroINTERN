# stagezeroINTERN
HNG internship
# HNG12 Backend API

## Description
A simple public API that returns:
- Your registered email.
- The current datetime in ISO 8601 format (UTC).
- The GitHub repository URL.

## Tech Stack
- Node.js
- Express.js
- TypeScript
- Vercel for deployment

## API Endpoint

- **GET /**
- Response format:

```json
{
  "email": "flightgoals@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Quepee/stagezeroINTERN"
}
