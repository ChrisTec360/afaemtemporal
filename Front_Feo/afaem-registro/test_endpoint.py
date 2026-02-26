#!/usr/bin/env python3
"""
Script simple para probar el endpoint /auth/registro
Ejecutar con: python test_endpoint.py
"""
import requests
import json
from datetime import date

# Cambiar esto si el backend está en otra URL
API_BASE = "http://localhost:8000"

data = {
    "Nombre": "Juan",
    "PrimerApellido": "Pérez",
    "SegundoApellido": "García",
    "Correo": "juan.test@example.com",
    "Telefono": "5512345678",
    "Contrasena": "Password123!",
    "FechaNacimiento": "2000-05-15",  # Formato YYYY-MM-DD
    "tipoSolicitud": "jugador_adulto",
    "Sexo": "varonil"
}

print("🧪 PROBANDO ENDPOINT /auth/registro")
print(f"📊 Datos a enviar: {json.dumps(data, indent=2)}")
print()

try:
    response = requests.post(
        f"{API_BASE}/auth/registro",
        json=data,
        headers={"Content-Type": "application/json"}
    )
    
    print(f"✅ Status Code: {response.status_code}")
    print(f"📨 Respuesta: {json.dumps(response.json(), indent=2)}")
    
except requests.exceptions.ConnectionError:
    print("❌ ERROR: No se puede conectar al backend. ¿Está corriendo en http://localhost:8000?")
except Exception as e:
    print(f"❌ ERROR: {str(e)}")
