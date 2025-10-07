Taller 02 - TypeScript: Sistema de Empleados

Este proyecto simula un sistema de gestión de empleados utilizando TypeScript, clases, interfaces, inyección de dependencias y validaciones. Fue desarrollado como parte del Taller 02 del programa Mujeres Digitales 2025.

¿Qué hace este sistema?

- Carga usuarios desde una API simulada (ApiService)
- - Calcula salarios según rol, equipo o lenguajes
- Muestra detalles y salarios en consola
- Integra empleados manuales creados por la autora
- Documenta errores reales como parte del aprendizaje

📁 Estructura del proyecto

src/
├── classes/
│   ├── BaseEmployee.ts
│   ├── Developer.ts
│   ├── Manager.ts
│   interfaces/
│   ├── types.ts
├── services/
│   ├── ApiService.ts
│   └── EmployeeService.ts
├── main.ts
tsconfig.json
package.json
README.md

Instalación

1. Clona el repositorio:
   git clone https://github.com/SIMONYAN85/Taller-2-TypeScript-Fundamentals.git
   cd taller02-typescript

2. Instala dependencias:
   npm install

▶️ Ejecución

Para correr el sistema:
   npm run dev

Verás en la terminal los detalles de cada empleado y su salario calculado.


Fallos reales y decisiones técnicas

Durante el desarrollo se presentaron errores que fueron documentados como parte del aprendizaje:

- Property 'getDepartment' does not exist on type 'BaseEmployee': se intentó acceder a una propiedad protegida desde main.ts. Se propuso agregar un método público, pero no fue viable por restricciones del taller.
- Cannot find module './classes/Item': se detectó una importación innecesaria que fue eliminada.
- Persistencia incompleta: aunque se logró mapear los empleados, no se pudo guardar el departamento sin romper la encapsulación. Se documentó el intento y se mostró evidencia visual del error.
- Se mantuvo la estructura original del taller sin crear carpetas nuevas como utils/, integrando las validaciones directamente en EmployeeService.ts.

Aprendizaje y transferencia

Cada error fue transformado en una rutina didáctica. 

📸 Evidencia

- Capturas de pantalla del sistema funcionando (screenshots/)
- Terminal mostrando empleados válidos y salarios
- Código compilando sin errores
- Documentación de errores reales y decisiones técnicas

Autora

DAYAN  
Este proyecto fue desarrollado con enfoque didáctico para transferir conocimiento.


Licencia

Este proyecto es parte de un taller educativo y no tiene licencia comercial. Puedes usarlo como referencia, aprendizaje o inspiración para tus propios proyectos.