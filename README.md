![](https://img.shields.io/badge/Microverse-blueviolet)

> # React on Rails one App                                                                                             

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [React on Rails one App] <a name="about-project"></a>

 **[React on Rails one App]** This is a template project to showcase setting up React and Rails in on App.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <ul>
    <li>Ruby</li>
    <li>Rails</li>
    <li>PostgreSQL</li>
    <li>Webpack</li>
    <li>React</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Showcase Setting up React on Rails app in one Repo**
- **Provide Api endpoints**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
In order to run this project you need:
  * A basic understanding of Ruby, Rails, React, and Git
  * A Postgresql connection
### Usage
1. Install Ruby
2. Install Rails
3. Install Node

 ```
    ruby >= 3.2.2
    rails >= 7.1.1
    postgres >- 15.3
    node
```
  3. Clone this repo
```
git clone https://github.com/Elerqsousy/react-on-rails-one-app.git
```
```
  development = development
  test        = test
  production  = production
```
or you can use your own database and change the ```config/database.yml```

```yml
  default: &default
    adapter: postgresql
    encoding: unicode
    pool: 5
    username: [your_username]
    password: [your_password]
    host: localhost

  development:
    <<: *default
    database: [your_database_for_development]

  test:
    <<: *default
    database: [your_database_for_test]

  production:
    <<: *default
    database: [your_database_for_production]
```
### Install

Install this project with:

```bash
  cd react-on-rails-one-app
  bundle install
  npm install
  npm run build
```
To create your database and migrations in the application run the following commands

``````
rails db:create
rails db:migrate
rails db:seed
``````

it will install the required gemfile for running the project

To run the project, execute the following command:

```
  rails s
```

it will run the server on ```localhost:3000```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Mahmoud Rizk**

- GitHub: [@Elerqsousy](https://github.com/Elerqsousy)
- LinkedIn: [Mahmoud Rizk](https://www.linkedin.com/in/mahmoud-rizk/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Elerqsousy/react-on-rails-one-app/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, give it a ⭐.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
