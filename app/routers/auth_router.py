from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user_schema import UserRegister
from app.services.auth_service import register_user, login_user
from app.database.session import get_db

router = APIRouter(prefix="/auth",tags=["Auth"])

@router.post("/registro")
def register(data: UserRegister, db:Session = Depends(get_db)):
    register_user(db, data)
    return {"message": "Usuario registrado correctamente"}

@router.post("/iniciar-sesion")
def login(email: str, password: str, db:Session = Depends(get_db)):
    user = login_user(db, email, password)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    return {"message": "Inicio de sesión exitoso"}
