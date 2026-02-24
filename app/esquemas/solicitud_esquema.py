from pydantic import BaseModel, EmailStr
from datetime import datetime

class Solicitud(BaseModel):
    UsuarioId: int
    FechaSolicitud: datetime
    EstatusValidacion: int