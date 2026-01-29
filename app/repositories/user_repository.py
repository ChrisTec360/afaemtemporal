from sqlalchemy.orm import Session
from app.models.user import User
from app.models.user_role import UserRole

def get_by_email(db: Session, email: str):
    return db.query(User).filter (User.email == email).first()

def create_user(db: Session, user: User, role_id:int):
    db.add(user)
    db.flush() #obtener el user.id
    
    user_role = UserRole(
        user_id = user.id,
        role_id = role_id
    )
    
    db.add(user_role)

    db.commit()
    db.refresh(user)

    return user

