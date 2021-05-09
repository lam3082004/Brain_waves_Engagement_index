class Config(object):
    DEBUG = False
    TESTING = False

class ProductionConfig(Config):
    pass

class DevelopmentConfig(Config):
    USER_LICENSE            = ""
    USER_CLIENT_ID          = "bVK63DlZM5Gv8IzQqUZCQU64524kgJk0U2wU7HtS"
    USER_CLIENT_SECRET      = "f2bO2qABtXTLGtxw2NUjyndAalvY4WnbfOABMEoDYlAmPWc14DpEE1VkhuitBmo0eRPX4kS58wE6Rn5J7kUQw0LJimdE5Waz8IktYY6AjX1Wowdf96TijlIS8uff2Csd"
    USER_DEBIT              = 100
    RECORD_EXPORT_FOLDER    = "C:/Users/Bui Tung Lam/OneDrive/Desktop/demo"
    WSS                     = "wss://localhost:6868"
    DEBUG                   = True

class TestingConfig(Config):
    TESTING = True