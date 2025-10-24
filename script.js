
/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

/* Navbar */
.navbar {
  background-color: #00274d;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar .nav-links li {
  cursor: pointer;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #004080, #0066cc);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero a {
  display: inline-block;
  background-color: #ffffff;
  color: #004080;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

/* Services Section */
.services {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

.services h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.card {
  background-color: #f0f0f0;
  padding: 2rem;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Footer */
footer {
  background-color: #00274d;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
