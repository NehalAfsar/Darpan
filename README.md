# **Darpan Website**

## **Project Overview**

Darpan is a comprehensive web platform designed to provide educational resources and psychometric assessments related to sexual health. The website supports both English and Nepali languages, offering a user-friendly experience with dynamic content loading and interactive elements.

## **Features**

* **Multi-Language Support**: Content and UI elements are available in both English and Nepali, allowing users to switch between languages seamlessly.  
* **Psychometric Tests**: Offers psychometric assessments with questions tailored for general users and a specific test for females. Test results provide risk levels and explanations.  
* **Educational Topics**: Provides detailed information on various sexual health topics, including Sexually Transmitted Infections (STIs), safe sex practices, and more.  
* **Myths vs. Facts**: A dedicated section to debunk common myths and present facts about sexual health.  
* **Data Visualization**: Displays statistical data through interactive charts (pie, area, line, doughnut, etc.) using Chart.js, covering different datasets like "Porn" and "Escorts."  
* **Responsive Design**: Ensures optimal viewing and interaction across various devices (desktops, tablets, and mobile phones).  
* **Dynamic Content Loading**: Questions for tests and detailed topic content are loaded dynamically from JSON and JavaScript files.  
* **Backend Integration**: Interacts with a backend API (e.g., https://phycometric-test.onrender.com/api/quiz/submit) for quiz submission and user data management.

## **Technologies Used**

* **HTML5**: For structuring the web content.  
* **CSS3**: For styling and layout, with dedicated stylesheets for different sections (navbar, footer, graphs, info pages, etc.).  
* **JavaScript (ES6+)**: For interactive functionality, dynamic content loading, form handling, and API interactions.  
* **Chart.js**: A JavaScript library used for creating interactive and customizable charts for data visualization.  
* **Google Fonts**: For typography (Google Sans, Inter, Roboto).  
* **Material Icons**: For various UI icons.

## **File Structure**

The project is structured with HTML files for pages, JSON files for data, JavaScript files for logic, and CSS files for styling:

.  
├── index.html                  \# Main landing page  
├── phycometric.html            \# Psychometric test entry page  
├── all\_form.html               \# General psychometric test form  
├── Female\_From.html            \# Female-specific psychometric test form  
├── info.html                   \# Template for displaying detailed topics  
├── M\&F.html                    \# Myths vs. Facts page  
├── css/  
│   ├── style.css               \# General website styling  
│   ├── navbar.css              \# Navigation bar specific styles  
│   ├── footer.css              \# Footer specific styles  
│   ├── graph.css               \# Styling for graph section  
│   ├── upgraph.css             \# Additional graph-related styling  
│   ├── info.css                \# Styling for info pages  
│   ├── M\&F.css                 \# Styling for Myths & Facts page  
│   └── porn.css                \# Styling for pornography-related content  
├── js/  
│   ├── script.js               \# Core navigation functions  
│   ├── navbar.js               \# Navbar toggle logic  
│   ├── data.js                 \# English content for educational topics  
│   ├── data-ne.js              \# Nepali content for educational topics  
│   ├── graph.js                \# Logic for data visualization and chart rendering  
│   └── demo\_chart.js           \# Sample datasets and chart rendering functions  
├── data/  
│   ├── all.json                \# Questions for general psychometric test (EN/NE)  
│   └── female.json             \# Questions for female-specific psychometric test (EN/NE)  
└── images/                     \# Directory for various images used on the site  
└── videos/		         \# Directory for various videos used on the site

## **Setup and Usage**

To run this project locally, you can follow these steps:

1. **Clone the repository** (if applicable, otherwise download the files):  
   git clone \<repository-url\>  
   cd darpan-website

2. **Open index.html**: Simply open the index.html file in your web browser. Since this is primarily a front-end application, it does not require a local server for basic functionality.  
3. **API Interaction**: The psychometric test submission (all\_form.html and Female\_From.html) interacts with an external API (https://phycometric-test.onrender.com/api/quiz/submit). Ensure you have an active internet connection for this functionality to work.

## **Contributing**

Contributions are welcome\! If you'd like to contribute, please follow these steps:

1. Fork the repository.  
2. Create a new branch (git checkout \-b feature/your-feature-name).  
3. Make your changes.  
4. Commit your changes (git commit \-m 'Add new feature').  
5. Push to the branch (git push origin feature/your-feature-name).  
6. Create a Pull Request.

## **License**

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
