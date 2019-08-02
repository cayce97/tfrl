from flask import Flask

app = Flask(__name__,
    static_folder = './public',
    template_folder = './static')

from templates.tfrl.views import tfrl_blueprint

# register the blueprints
app.register_blueprint(tfrl_blueprint)  
