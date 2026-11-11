# Adebolu Babatunde — Portfolio

A personal portfolio for Adebolu Babatunde, a full-stack developer and geospatial engineer. The site presents selected projects, experience, technical skills, and a contact form.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- Express and Nodemailer for the contact API

## Repository layout

```text
client/   Portfolio frontend
server/   Email contact API
```

## Run the frontend

```bash
cd client
npm install
npm run dev
```

Vite prints the local URL when the development server starts. To create a production build:

```bash
npm run build
```

The build output is written to `client/dist`.

## Run the contact API

```bash
cd server
npm install
npm start
```

The API listens on port `3001` by default, or the port provided through `PORT`. It exposes `POST /send-email` and requires `name`, `email`, `subject`, and `message` in the JSON request body. An optional `phone` field is also accepted.

Configure the mail service in the server environment:

```text
MAIL_HOST=
MAIL_PORT=587
MAIL_USER=
MAIL_PASS=
```

Keep credentials in a local `.env` file or deployment environment settings. Do not commit secrets. The portfolio contact form currently posts to the hosted API endpoint configured in `client/src/components/Contact.tsx`.

## Deployment

The frontend and API each have a Vercel configuration. Deploy `client` and `server` as separate projects, and provide the mail environment variables to the server deployment.

## Project images and documents

Portfolio images and the downloadable CV are stored in `client/public` and referenced by the frontend using root-relative paths.
