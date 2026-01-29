from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(100),nullable=False)
    last_name = Column(String(100), nullable=False)
    second_last_name = Column(String(100))

    email = Column(String(100), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)

    phone_number = Column(String(20), nullable=True)
    curp = Column(String(18), nullable=True)
    birth_date = Column(Date, nullable=True)

    roles = relationship("UserRole", back_populates="user", cascade="all, delete-orphan")