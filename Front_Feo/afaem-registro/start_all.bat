@echo off
REM SCRIPT PARA INICIAR BACKEND Y FRONTEND JUNTOS
start cmd /k "cd backend && start_uvicorn.bat"
start cmd /k "cd .. && npm run dev"
