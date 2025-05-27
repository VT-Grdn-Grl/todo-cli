from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

# Add debug prints
print("Current working directory:", os.getcwd())
print("Env file exists:", os.path.exists('.env'))

load_dotenv()

# Add more debug prints
print("Environment variables:", dict(os.environ))
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
print("Database URL:", SQLALCHEMY_DATABASE_URL)

if SQLALCHEMY_DATABASE_URL is None:
    raise ValueError("DATABASE_URL environment variable is not set. Please check your .env file.")

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
