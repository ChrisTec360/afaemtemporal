#!/usr/bin/env python3
"""
Script para probar el endpoint GET /solicitud/solicitudes-usuarios
"""
import requests
import json

API_BASE = "http://localhost:8000"
TOKEN = "tu_token_aqui"  # Cambiar por un token válido

print("🧪 PROBANDO ENDPOINT /solicitud/solicitudes-usuarios")
print("=" * 80)

url = f"{API_BASE}/solicitud/solicitudes-usuarios"
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

print(f"📍 URL: {url}")
print(f"🔐 Header: Authorization: Bearer {TOKEN}")
print()

try:
    response = requests.get(url, headers=headers)
    
    print(f"✅ Status Code: {response.status_code}")
    print()
    print(f"📨 Respuesta:")
    print(json.dumps(response.json(), indent=2, ensure_ascii=False))
    
except requests.exceptions.ConnectionError:
    print("❌ ERROR: No se puede conectar al backend.")
    print("   ¿Está corriendo en http://localhost:8000?")
    print()
    print("   Para iniciar el backend, ejecuta:")
    print("   python backend/main.py")
except Exception as e:
    print(f"❌ ERROR: {str(e)}")
