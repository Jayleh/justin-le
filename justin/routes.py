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
    select_options = [
        ("", "Choose your option."),
        ("Personal Referral", "Personal Referral"),
        ("Linkedin", "Linkedin"),
        ("Indeed", "Indeed"),
        ("AngelList", "AngelList"),
        ("Other", "Other")
    ]
    form.connection.choices = select_options

    if form.validate_on_submit():
        output = {
            "Name": form.name.data,
            "Email": form.email.data,
            "Message": form.message.data,
            "Connection": form.connection.data
        }
        print(output)
        flash(f"Message was succesfully sent!", "teal lighten-1")
        return redirect(url_for("contact"))

    return render_template("contact.html", form=form)
