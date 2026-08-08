# ⚡ IGNITE'26

> A college fest website prototype featuring event discovery, multi-event registration, food-stall ordering, and a serverless data-handling system built with Google Apps Script and Google Sheets.

🌐 **Live Demo:** https://alphacore0038.github.io/Ignite-26/

---

## 📌 Overview

**IGNITE'26** is a college fest website prototype designed to provide an interactive platform for exploring events, registering for multiple events, and placing food-stall orders.

The project goes beyond a static frontend by connecting the website to **Google Apps Script** and **Google Sheets** for handling and storing user-submitted data.

The frontend is deployed using **GitHub Pages**, making the website publicly accessible through a single link.

---

## ✨ Features

### 🎪 Event Portal

- Browse available fest events
- Dedicated pages for individual events
- Event information and details
- Speaker profiles
- Gallery section

### 📝 Event Registration

Users can:

- Enter their personal details
- Select **multiple events** in a single registration
- Submit their registration directly through the website
- Receive a confirmation response after submission

Registration data is automatically recorded in Google Sheets along with a timestamp.

### 🍔 Food Stall Ordering

Users can:

- Browse available food items
- Select **multiple different food items** in a single order
- Specify quantities
- Calculate the order price
- Place the order
- Receive a generated receipt/confirmation

Food-order information is automatically sent to Google Sheets.

### 📊 Data Management

**Google Apps Script** is used as the backend layer to process requests from the website.

The system records registration and food-order information in Google Sheets, including automatically generated timestamps.

---

## 🏗️ System Architecture

<table>
<tr>
<td align="center">

👤<br>
<b>User</b>

</td>
</tr>
<tr>
<td align="center">↓</td>
</tr>
<tr>
<td align="center">

🌐<br>
<b>GitHub Pages</b><br>
HTML / CSS / JavaScript

</td>
</tr>
<tr>
<td align="center">↓<br>HTTP Request</td>
</tr>
<tr>
<td align="center">

⚙️<br>
<b>Google Apps Script</b><br>
Backend / API

</td>
</tr>
<tr>
<td align="center">↓</td>
</tr>
<tr>
<td align="center">

📊<br>
<b>Google Sheets</b><br>
Registrations • Food Orders

</td>
</tr>
</table>

### 📝 Registration Flow

<table>
<tr>
<td align="center"><b>📝 Registration Form</b></td>
<td align="center">→</td>
<td align="center"><b>⚡ JavaScript</b></td>
<td align="center">→</td>
<td align="center"><b>⚙️ Google Apps Script</b></td>
<td align="center">→</td>
<td align="center"><b>📊 Google Sheets</b></td>
</tr>
</table>

**Data stored:** Name • Email • Campus • Phone • Events • Timestamp

### 🍔 Food Order Flow

<table>
<tr>
<td align="center"><b>🍔 Food Selection</b></td>
<td align="center">→</td>
<td align="center"><b>🔢 Items + Quantity</b></td>
<td align="center">→</td>
<td align="center"><b>💰 Price Calculation</b></td>
<td align="center">→</td>
<td align="center"><b>🧾 Receipt</b></td>
</tr>
<tr>
<td colspan="7" align="center">↓</td>
</tr>
<tr>
<td colspan="7" align="center"><b>⚙️ Google Apps Script → 📊 Google Sheets</b></td>
</tr>
</table>

**Data stored:** Customer Name • Food Items • Quantity • Price • Timestamp

## 🛠️ Tech Stack

- **HTML** — Page structure
- **CSS** — Styling and responsive interface
- **JavaScript** — Interactions, form handling and client-side logic
- **Google Apps Script** — Backend request processing
- **Google Sheets** — Registration and order data storage
- **GitHub Pages** — Frontend deployment

---

## 📂 Project Structure

- HTML pages
- CSS stylesheets
- JavaScript files
- Event pages
- Registration system
- Food-stall ordering system
- Receipt generation
- Gallery
- Speaker profiles

---

## 🌐 Deployment

The frontend is deployed using **GitHub Pages**, allowing the website to be accessed publicly through a web browser without requiring users to install or run the project locally.

### Live Website

🌐 https://alphacore0038.github.io/Ignite-26/

### Source Code

📦 https://github.com/AlphaCore0038/Ignite-26

---

## 📸 Screenshots

### 🏠 Homepage

<img width="1917" height="910" alt="image" src="https://github.com/user-attachments/assets/8ad7bc02-2659-4881-a2b0-20b791eee464" />


### 🎪 Events

<img width="1917" height="910" alt="image" src="https://github.com/user-attachments/assets/5d01d32f-95ad-4df7-8e82-280b59cb1144" />


### 📝 Registration

<img width="1916" height="910" alt="image" src="https://github.com/user-attachments/assets/d44b70ff-31c6-4453-abcf-333b4ecffd98" />


### 🍔 Food Stalls

<img width="1917" height="902" alt="image" src="https://github.com/user-attachments/assets/23a23e20-7f77-4dd9-a029-843ea8311316" />


### 📊 Registration Data

<img width="1917" height="908" alt="image" src="https://github.com/user-attachments/assets/3f720b11-2998-4126-9e64-0da30410766c" />


### 🧾 Food Order Data

<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/e9dfe467-ad25-43e1-be7d-165e75c63445" />


---

## 💡 What This Project Demonstrates

IGNITE'26 was built to explore how a frontend application can interact with a backend service and persistent data storage without relying on a traditional hosted server.

The project demonstrates:

- Building a multi-page web application
- Handling user input and form submissions
- Sending data from JavaScript to a backend endpoint
- Using Google Apps Script as a lightweight serverless backend
- Persisting application data in Google Sheets
- Deploying a publicly accessible frontend with GitHub Pages
- Building complete user flows from input to processing to stored data

---

## 🚀 Future Improvements

Possible improvements for a production-ready version include:

- Administrator authentication
- Dedicated database instead of Google Sheets
- Admin dashboard for registrations and orders
- Registration and order validation
- Duplicate registration detection
- Improved backend security and access control
- Automated email confirmations
- Dedicated backend infrastructure

---

## 👨‍💻 Project

**IGNITE'26 — College Fest Website Prototype**

Built using:

**HTML • CSS • JavaScript • Google Apps Script • Google Sheets • GitHub Pages**
** https://github.com/AlphaCore0038/Ignite-26
