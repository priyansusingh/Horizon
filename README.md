# Horizon

Horizon is a payment application built using **Turborepo** and **Next.js** that enables seamless money transfers and bank transactions. It includes essential features such as user signup/signin, peer-to-peer (P2P) money transfer, and bank transfers through HDFC and Axis Bank. The app also provides a clear transaction history for users to track their payments.

## Features

- **User Signup/Signin**: Secure authentication system for users to register and log in.
- **P2P Money Transfer**: Send money instantly to other Horizon users.
- **Bank Transfers**: Transfer money to and from major banks like HDFC and Axis Bank.
- **Transaction History**: View a list of your recent transactions, including transfers and payments.

## Tech Stack

- **Turborepo**: Monorepo structure for managing multiple packages.
- **Next.js**: Server-side rendering and React framework for building the web app.
- **TypeScript**: Static typing to ensure code quality and scalability.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database for secure storage of user and transaction data.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Zod**: Schema validation for data inputs.
- **Axios**: For handling HTTP requests and API calls.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [Turborepo](https://turborepo.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository**:

```bash
   git clone https://github.com/yourusername/horizon.git
   cd horizon
   ```

2. **Install dependencies**:
```bash
    npm install
    ```

3. **Set up the environment variables**:

   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/horizon
   NEXTAUTH_SECRET=your-secret-key  
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run database migrations**:
```bash
   npx prisma migrate dev
```

5. **Start the development server**:
```bash
   npm run dev
```
