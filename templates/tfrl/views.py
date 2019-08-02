from flask import render_template, Blueprint

tfrl_blueprint = Blueprint('hello', __name__)

@tfrl_blueprint.route('/')
@tfrl_blueprint.route('/index')
def index():
    return render_template("index.html")