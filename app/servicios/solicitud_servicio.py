from sqlalchemy.orm import Session
from app.modelos.solicitud_modelo import Solicitud
from app.repositorios.solicitud_repositorio import crear_solicitudrepo
from app.core.seguridad import obtener_usuario_actual

def crear_solicitud(db: Session, data, usuario):
    estatusDefecto =  2

    solicitud = Solicitud(
        UsuarioId=usuario.UsuarioId,
        FechaSolicitud=data.FechaSolicitud,
        EstatusValidacion=estatusDefecto
    )

    return crear_solicitudrepo(db, solicitud)