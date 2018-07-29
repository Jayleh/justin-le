from flask import render_template, redirect, url_for, flash
from justin import app
from justin.forms import MessageForm


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    form = MessageForm()

    if form.validate_on_submit():
        flash(f"Message was succesfully sent!", "teal lighten-1")
        return redirect(url_for("contact"))

    return render_template("contact.html", form=form)
