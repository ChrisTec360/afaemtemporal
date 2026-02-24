from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.seguridad import crear_token, verificar_token, obtener_usuario_actual
from app.db.sesion import get_db
from app.esquemas.solicitud_esquema import Solicitud
from app.servicios.solicitud_servicio import crear_solicitud
from app.modelos.usuario_modelo import Usuario

router = APIRouter(prefix="/solicitud",tags=["Auth"])

@router.post("/enviar-solicitud")
def solicitud(data: Solicitud, db:Session = Depends(get_db),
              usuario: Usuario = Depends(obtener_usuario_actual)):
    
    crear_solicitud(db, data, usuario)
    
    if not data:
        raise HTTPException(status_code=400, detail="Datos de solicitud inválidos")
    
    return {"message": "Solicitud enviada correctamente"}
