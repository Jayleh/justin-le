from flask import render_template
from justin import app


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/resume")
def resume():
    return render_template("resume.html")
