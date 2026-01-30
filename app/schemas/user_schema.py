from pydantic import BaseModel, EmailStr, Field
from datetime import date

class UserRegister(BaseModel):
    first_name: str
    last_name: str
    second_last_name: str | None
    email: EmailStr
    password: str = Field(min_length=8, max_length=64)
    phone_number: str | None
    curp: str | None
    birth_date: date | None
    role_id: int
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str