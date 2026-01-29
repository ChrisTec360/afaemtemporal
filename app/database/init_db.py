from app.database.base import Base
from app.database.connection import engine

# IMPORTA TODOS LOS MODELOS
from app.models.user import User
from app.models.role import Role
from app.models.user_role import UserRole

def init_db():
    Base.metadata.create_all(bind=engine)