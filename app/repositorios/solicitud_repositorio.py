from sqlalchemy.orm import Session
from app.modelos import Solicitud

def crear_solicitudrepo(db: Session, solicitud: Solicitud):
    db.add(solicitud)
    db.commit()
    db.refresh(solicitud)
    return solicitud