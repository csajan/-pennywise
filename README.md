PennyWise is a quick weekend project (pushed for functionality to be completed in the weekend), inspired by the famous clown Pennywise. It is a quick, easy to use finance tracker to help to budget wisely.

## Tech stack

    - next.js
    - tailwind CSS


    - clerk auth
    - shadcn/ui
    - drizzle

## Getting Started

First, install dependencies

```bash
npm i
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard

```

Connect database by following [link](https://console.neon.tech/realms/prod-realm/protocol/openid-connect/registrations?client_id=neon-console&redirect_uri=https%3A%2F%2Fconsole.neon.tech%2Fauth%2Fkeycloak%2Fcallback&response_type=code&scope=openid+profile+email&state=e_DibcDODLzM2SsJZ_UfFQ%3D%3D%2C%2C%2C)

Connect Clerk by following [docs](https://clerk.com/docs/quickstarts/nextjs)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Note:**

This app was built as a quick weekend project with Halloween in mind, so expect some bugs and incomplete features. There's plenty of room for improvement, including fixing existing bugs, implementing new features like income tax calculations, and improving the user experience. Unit tests and end-to-end tests are yet to be written
