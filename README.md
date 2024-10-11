# Roomzy - A Roommate Finding Platform

## Overview

**Roomzy** is a platform designed to simplify the process of finding compatible roommates, specifically for students and working professionals in Mumbai. By leveraging the power of **Next.js**, **MongoDB**, and **ShadCN UI**, Roomzy connects users with potential roommates and shared living spaces, fostering community-driven solutions that promote affordability, trust, and sustainability.

## Why Roomzy?

The challenge of finding affordable accommodations and trustworthy roommates is common, particularly in a city like Mumbai. Roomzy aims to address this by:

- Simplifying the roommate search process
- Reducing costs for users
- Building trust through a feedback mechanism
- Offering a centralized, low-maintenance platform
- Encouraging sustainable urban development through shared living spaces

## Features

- **Affordable Solutions:** Find shared accommodations that suit your budget.
- **Trustworthy Matches:** A feedback system ensures you can trust your potential roommates.
- **Community Driven:** Promotes a sense of shared responsibility among roommates.
- **Environmentally Friendly:** Encourages sustainable living through shared resources.

## Tech Stack

- **Frontend:** Next.js
- **UI:** ShadCN UI
- **Database:** MongoDB

## Impact

Roomzy not only provides a practical solution to finding roommates but also has broader social, economic, and environmental benefits:

- **Economic:** Alleviates the financial burden of high living costs in Mumbai.
- **Social:** Builds a sense of community and shared responsibility among users.
- **Environmental:** Supports sustainable living practices through shared spaces.

---

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/insanelyai/roomzy.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd roomzy
   ```

3. **Install the dependencies:**
   
   If you are using npm:
   ```bash
   npm install
   ```
   
   Or if you are using yarn:
   ```bash
   yarn install
   ```

4. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the following variables:
   ```
   JWT_SECRET=<your_jwt_secret>
   FALLBACK_MONGODB_URL="your_mongodb_connection_string"
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```

5. **Run the application:**

   For development mode:
   ```bash
   npm run dev
   ```
   
   Or if using yarn:
   ```bash
   yarn dev
   ```


