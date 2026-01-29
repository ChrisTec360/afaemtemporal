from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user_schema import UserRegister
from app.services.auth_service import register_user
from app.database.session import get_db

router = APIRouter(prefix="/auth",tags=["Auth"])

@router.post("/registro")
def register(data: UserRegister, db:Session = Depends(get_db)):
    register_user(db, data)
    return {"message": "Usuario registrado correctamente"}

