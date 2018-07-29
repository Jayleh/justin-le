from flask import render_template, redirect, url_for, flash
from flask_mail import Message
from justin import app, mail
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
        msg = Message(form.subject.data, recipients=['jaylehyun@gmail.com'])
        msg.body = f"You received a message from {form.name.data.strip()} <{form.email.data.strip()}> with a connection from [{form.connection.data}].\n\n{form.message.data}"
        mail.send(msg)

        flash(f"Message was succesfully sent!", "teal lighten-1")

        return redirect(url_for("contact"))

    return render_template("contact.html", form=form)
