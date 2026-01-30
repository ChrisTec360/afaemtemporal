from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://192.168.0.172:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

app.include_router(auth_router.router)

@app.get("/")
def health_check():
    return {"status":"ok"}