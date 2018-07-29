from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, SubmitField
from wtforms.validators import InputRequired, Email, Length


class MessageForm(FlaskForm):
    name = StringField("Name", validators=[InputRequired(), Length(min=2, max=50)])
    email = StringField("Email", validators=[InputRequired(), Email()])
    message = TextAreaField("Message", validators=[InputRequired(), Length(min=2)])
    connection = SelectField("How did you find me?")
    submit = SubmitField("Send")
