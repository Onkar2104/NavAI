# NavAI Backend

## Overview

The NavAI Backend is a robust Django application designed to support the NavAI platform. Leveraging the Django REST Framework (DRF), it provides a scalable and secure API for handling various functionalities such as user authentication, data processing, and integration with AI models.

## Features

- **User Authentication**: Secure user registration and login mechanisms.
- **AI Integration**: Endpoints to interact with AI models for data analysis and processing.
- **Data Management**: Efficient handling of data storage and retrieval.
- **Admin Interface**: A user-friendly admin panel for managing application data.

## Technologies Used

- **Backend Framework**: Django 4.x
- **API Framework**: Django REST Framework
- **Database**: SQLite (for development), PostgreSQL (for production)
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Custom AI modules

## Installation

### Prerequisites

- Python 3.8 or higher
- pip
- PostgreSQL (for production)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Onkar2104/NavAI.git && cd NavAI/NavAI_Backend
   ```

2. **Set Up Virtual Environment**:

    ```bash
    python3 -m venv venv
    venv/bin/activate  
    ```

3. **Install Dependencies**: 

    ```bash
    pip install -r requirements.txt
    ```

4. **Apply Migration**:

    ```bash
    python manage.py migrate
    ```

5. **Create a Superuser**:

    ```bash
    python manage.py createsuperuser
    ```

6. **Run the Development server**:

    ```bash
    python manage.py runserver 0.0.0.0:8000
    ```
    Your backend is now running and accessible at `http://127.0.0.1:8000/`.