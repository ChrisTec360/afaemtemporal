from sqlalchemy.orm import Session
from app.models.user import User
from app.repositories.user_repository import create_user
from app.core.security import hash_password, verify_password

def register_user(db: Session, data):
    hashed_password = hash_password(data.password)
    
    user = User(
        first_name=data.first_name,
        last_name=data.last_name,
        second_last_name=data.second_last_name,
        email=data.email,
        password_hash=hashed_password,
        phone_number=data.phone_number,
        curp=data.curp,
        birth_date=data.birth_date
    )
    return create_user(db, user, data.role_id)

def login_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if user and verify_password(password, user.password_hash):
        return user
    return None