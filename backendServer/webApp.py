from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Service is up, Limitless!'

if __name__ == "__main__":
    app.run()
