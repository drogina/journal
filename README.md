# Journal Entries

Display a collection of entries, sorted by newest first.

Click on VIEW to toggle the entry text inline.

Click on EDIT to edit a particular entry.

Click on DELETE to delete a particular entry.

Click on CREATE to create a new entry.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Running Locally
* [Python 3](https://www.python.org/downloads/release/python-364/)
* [pip 9](https://pip.pypa.io/en/stable/installing/)
* [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
* [Node 8](https://nodejs.org/en/download/)

### Installing

#### Run Locally

Clone the repository:
```
git clone https://github.com/drogina/journal.git
```

In terminal, navigate to your repo:
```
cd /path/to/your/journal
python3 -m venv ./venv
source ./venv/bin/activate
pip install -r ./requirements.txt
python3 manage.py runserver
```
Open a separate terminal window:
```
cd /path/to/your/journal/frontend
npm start
```

Access the frontend application via `http://localhost:3000`

## Built With

* [**Python 3**](https://www.python.org/)
* [**Django 2**](https://www.djangoproject.com/) + [**Django Rest Framework 3**](http://www.django-rest-framework.org/)
* [**SQLite**](https://www.sqlite.org/index.html)
* [**AngularJS**](https://angularjs.org/) + [**Angular Seed**](https://github.com/angular/angular-seed)
* [**Bootstrap 4**](https://getbootstrap.com/)

## Authors

**Debbie Rogina**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details