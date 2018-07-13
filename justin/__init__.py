from flask import Flask


app = Flask(__name__)


from justin import routes
