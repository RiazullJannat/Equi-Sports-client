# EquiSports - Sports Equipment Store

**EquiSports** is a responsive online platform designed for sports enthusiasts to browse, purchase, and review a wide variety of sports accessories, including gear and apparel. It features user authentication, product management, and various other features to enhance the user experience.

### [Live Site](https://assignment-10-d1cd0.web.app)

---

## Features
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
- **User Authentication:** Supports login, registration, and third-party authentication methods (Google).
- **Add and Manage Products:** Users can add their own equipment, view their equipment list, and update or delete them.
- **Product Sorting:** Sort sports equipment by price in ascending or descending order.
- **Dark/Light Theme Toggle:** Implement dark/light theme for better user experience.
- **Interactive Components:** Includes Lottie animations, React Tooltip, and React Awesome Reveal for interactive UI elements.
- **Private Routes:** Certain routes are protected and only accessible by authenticated users.
- **Loading Spinner:** Display a loading spinner while fetching data from the server.
- **404 Page:** Custom error page for non-existing routes.

---

## Technologies Used
- **Frontend:** React, React Router, Tailwind CSS, DaisyUI, SweetAlert2
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** Firebase Authentication (Email, Google, GitHub)
- **Deployment:** Client-side hosted on Netlify, Server-side hosted on Vercel
- **Other Packages:** Lottie React, React Awesome Reveal, React Tooltip

---

## Pages

### 1. **Home Page**
- Contains Navbar, Banner/Slider, Product Section, Sports Categories, and Footer.
- Displays the latest products with a "View Details" button.

### 2. **Add Equipment (Private Route)**
- Form to add new equipment (image, name, category, price, etc.) to the database.
- Fields are auto-filled with the logged-in user's details.

### 3. **All Sports Equipment Page**
- Displays all available equipment in a table format.
- Each item has a "View Details" button to redirect to the item’s detailed page.

### 4. **View Details Page (Private Route)**
- Shows detailed information about a specific item in a card format.
  
### 5. **My Equipment List (Private Route)**
- Displays all equipment added by the logged-in user.
- Includes options to update and delete each item.
  
### 6. **Update Page (Private Route)**
- Allows users to update the details of an existing product they added.

### 7. **404 Page**
- Custom error page for undefined routes.
