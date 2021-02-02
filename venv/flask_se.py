from flask import Flask
from flask import render_template
from flask_frozen import Freezer
import sys, os

app = Flask(__name__, static_url_path='', static_folder='static', template_folder='templates')
freezer = Freezer(app)

URL_PREFIX = "/new"

@app.route(URL_PREFIX + '/')
def index():
    return render_template('index.html')

@app.route(URL_PREFIX + '/index.html')
def indexhtml():
    return render_template('index.html')

@app.route(URL_PREFIX + '/404.html')
def status_404():
    return render_template('404.html')

@app.route(URL_PREFIX + '/contacts.html')
def contacts():
    return render_template('contacts.html')

@app.route(URL_PREFIX + '/students.html')
def students():
    return render_template('students.html')

@app.route(URL_PREFIX + '/bachelor/application.html')
def bachelor_application():
    return render_template('bachelor_application.html')

@app.route(URL_PREFIX + '/bachelor/programming-technology.html')
def bachelor_programming_technology():
    return render_template('bachelor_programming-technology.html')

@app.route(URL_PREFIX + '/bachelor/software-engineering.html')
def bachelor_software_engineering():
    return render_template('bachelor_software-engineering.html')

@app.route(URL_PREFIX + '/master/information-systems-administration.html')
def master_information_systems_administration():
    return render_template('master_information-systems-administration.html')

@app.route(URL_PREFIX + '/master/software-engineering.html')
def master_software_engineering():
    return render_template('master_software-engineering.html')

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(port=5000)