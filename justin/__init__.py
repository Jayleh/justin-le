from flask import Flask


app = Flask(__name__)
# app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['SECRET_KEY'] = "bd33c3da6377211b875896c31fb2ae0f"


from justin import routes
