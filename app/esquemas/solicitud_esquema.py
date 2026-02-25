from pydantic import BaseModel, EmailStr
from datetime import datetime, date
class SolicitudCrear(BaseModel):
    UsuarioId: int
    FechaSolicitud: datetime
    EstatusValidacion: int

    CURP: str
    RFC: str
    SexoId: int
    FechaNacimiento: date

class SolicitudesTodas(BaseModel):
    SolicitudId: int
    UsuarioId: int
    FechaSolicitud: datetime
    EstatusValidacion: int
    
    model_config = {
        "from_attributes": True
    }