from fastapi import FastAPI
from app.database.connection import engine
from app.database.base import Base
from app.database.init_db import init_db
from app.routers import auth_router

app = FastAPI(
    title = "BackendAFAEM",
    version = "1.0.0"
)

init_db()
Base.metadata.create_all(bind=engine)

app.include_router(auth_router.router)

@app.get("/")
def health_check():
    return {"status":"ok"}