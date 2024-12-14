# Project Exam 2 at Noroff - Holidaze

![image](/src/assets/msedge_7lfoNBJ15v.png)

> [_Live site_](https://musical-bunny-eabfac.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1c3c2e03-7621-45cf-a37c-1ebb3e45bae0/deploy-status)](https://app.netlify.com/sites/musical-bunny-eabfac/deploys)

## Description

Holidaze is a venue booking application that allows users to browse, book, manage, and host vacation properties. Users can create and manage venues, view bookings, and manage their profile details. This application is built with React, leveraging a backend API for data management and user authentication.

## Assignment brief

A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

## Project's goal

To take the skills learned over the last two/four(part-time) years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.

## API

> [_Noroff API documentaion_](https://docs.noroff.dev/docs/v2/holidaze/bookings)

### Recources

> [_API Documentaion_](https://docs.noroff.dev/)

> [_API Swagger_](https://v2.api.noroff.dev/docs)

### User stories

1. A user may view a list of Venues
2. A user may search for a specific Venue
3. A user may view a specific Venue page by id
4. A user may view a calendar with available dates for a Venue
5. A user with a stud.noroff.no email may register as a customer
6. A registered customer may create a booking at a Venue
7. A registered customer may view their upcoming bookings
8. A user with a stud.noroff.no email may register as a Venue manager
9. A registered Venue manager may create a Venue
10. A registered Venue manager may update a Venue they manage
11. A registered Venue manager may delete a Venue they manage
12. A registered Venue manager may view bookings for a Venue they manage
13. A registered user may login
14. A registered user may update their avatar
15. A registered user may logout

## Overview

**Holidaze** is a modern web application designed to make booking venues easy and efficient for users and venue managers. The app offers features like venue listings, booking management, and profile updates for customers and venue managers alike. Built using modern front-end technologies, Holidaze provides a responsive and interactive user experience.

## Features

- **Venue Management**: Venue managers can add, edit, and delete venues with rich media support.
- **Booking System**: Users can make bookings and manage them through their profiles.
- **Profile Management**: Users can update their profile information, including their avatar, bio, and more.
- **Responsive Design**: The app works seamlessly across devices of various screen sizes, such as mobile, tablet, laptop, and desktop.

## Technologies Used

- **React.js**: For building the UI components and managing application state.
- **Tailwind CSS**: For styling and a consistent design system.
- **Axios**: For handling API requests.
- **React Router**: For managing page navigation.
- **React Hook Form**: For handling forms with ease.
- **Yup**: For schema validation of forms.

## Design System

The design of Holidaze follows a clean, modern aesthetic that prioritizes usability. This is accomplished using **Tailwind CSS** along with a custom configuration for fonts, colors, and breakpoints.

### Tailwind Custom Configuration

- **Font Family**:
  - Primary Fonts: `Lato`, `Roboto`.
- **Font Sizes**:
  - `h1` to `h6` provide consistent and readable hierarchy across the app.
- **Colors**:
  - Primary: `#2d9cdb` (Soft blue)
  - Secondary: `#50e3c2` (Minty green)
  - Accent: `#E0910E` (Warm orange)
  - Additional states: info, success, warning, and error with their respective colors.
- **Shadows**:
  - Custom box shadow `rgba(30, 30, 30, 0.5)` for card elements and modal styling.
- **Breakpoints**:
  - `mobile`: `450px`
  - `tablet`: `640px`
  - `laptop`: `1024px`
  - `desktop`: `1280px`

### Responsive Design

The app supports multiple screen sizes:

- **Mobile** (`450px`): Optimized for smaller screens with full-width elements.
- **Tablet** (`640px`): Grid-based layout to utilize larger screens effectively.
- **Laptop & Desktop** (`1024px` and above): Multi-column layouts and expanded forms.

## Installation and Setup

To run Holidaze locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/christerolsen/project-exam-2-holidaze.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint for code quality checks.

## Deployment

This project can be easily deployed using services like **Netlify**, **Vercel**, or **GitHub Pages**.

## Contribution

Feel free to fork the repository and submit pull requests. Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a pull request.
