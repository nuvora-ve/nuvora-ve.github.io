# Política de Privacidad de Nuvora

**Última actualización: octubre de 2026 — versión 3.2.0**

Nuvora ("la aplicación") es una herramienta de finanzas personales y de negocio. Esta política explica qué datos utiliza, dónde se guardan, cuándo salen de tu dispositivo y qué derechos tienes.

## 1. Datos que recopila la aplicación

Nuvora funciona con los datos que tú introduces voluntariamente:

- **Datos financieros:** cuentas, saldos, gastos, ingresos, presupuestos, objetivos y fondos de ahorro, deudas, créditos a clientes, inventarios, arqueos de caja, recordatorios y suscripciones.
- **Datos de cuenta (opcionales):** si decides crear una cuenta en la nube, tu **correo electrónico** y un identificador de usuario generado por Firebase Authentication. Si entras con Google, Google nos confirma tu correo; Nuvora nunca recibe tu contraseña de Google.
- **Datos de compra:** si adquieres la suscripción Premium, la transacción la procesa Google Play; Nuvora solo recibe el estado de tu suscripción (activa o no), nunca tus datos de pago.
- **Fotos del catálogo (opcionales):** si usas el catálogo de WhatsApp del módulo Emprendedor, puedes elegir fotos de tu galería para tus productos. Las fotos se guardan únicamente en tu teléfono, no se suben a ningún servidor (tampoco a la nube de respaldo) y solo salen del dispositivo cuando tú decides compartirlas por WhatsApp.
- **Texto del comando inteligente:** la función "Escríbelo y Nuvora lo registra" interpreta lo que escribes directamente en tu dispositivo para crear el movimiento; ese texto no se envía a ningún servidor.

Nuvora **no** recopila ubicación, contactos ni datos de uso analítico. Las fotos del catálogo y los archivos que exportas permanecen en tu dispositivo y no se transmiten a nuestros servidores (ver sección 1). El **identificador de publicidad** solo lo gestiona Google AdMob para los anuncios de la versión gratuita (ver sección 4); Nuvora no lo lee ni lo almacena.

## 2. Dónde se guardan tus datos

- **En tu dispositivo:** toda tu información se guarda localmente y la app funciona sin conexión. Puedes protegerla con el bloqueo biométrico de tu teléfono.
- **En la nube (solo si creas una cuenta):** para respaldar y sincronizar entre tus dispositivos, tus datos financieros se copian cifrados (HTTPS/TLS) a **Cloud Firestore** (Google Cloud). Cada usuario solo puede leer y escribir sus propios datos, garantizado por reglas de seguridad del lado del servidor. Nadie más — ni otros usuarios ni el desarrollador en el uso normal — puede ver tu información.
- Si nunca creas una cuenta, **ningún dato financiero sale de tu teléfono**.

## 3. Servicios de terceros que utiliza Nuvora

- **Google Firebase Authentication** — Inicio de sesión opcional. Recibe: correo electrónico.
- **Google Cloud Firestore** — Respaldo y sincronización opcional. Recibe: tus datos financieros (solo con cuenta).
- **Google Play Billing** — Suscripción Premium. Recibe: gestión de la compra (la procesa Google).
- **Google AdMob** — Anuncios en la versión gratuita. Recibe: identificador de publicidad e interacción con anuncios.
- **APIs públicas de tasas (DolarApi, Binance P2P, ER-API)** — Tasas de cambio BCV, paralelo, USDT y divisas. No reciben ningún dato personal; solo consultas de tasas.
- **WhatsApp (solo si tú compartes)** — Enviar catálogo, cobros o recibos a tus contactos. Recibe: solo lo que tú eliges compartir manualmente; Nuvora no envía nada por su cuenta.

## 4. Anuncios (solo en la versión gratuita)

La versión gratuita de Nuvora muestra anuncios mediante **Google AdMob**. Para servirlos, AdMob puede usar el **identificador de publicidad** de tu dispositivo y datos de interacción con los anuncios, según la política de privacidad de Google (https://policies.google.com/privacy). Puedes desactivar la personalización de anuncios en los ajustes de Google de tu teléfono.

- **Premium no muestra anuncios**: al suscribirte, la publicidad desaparece por completo.
- Nuvora **no vende** tus datos financieros ni los comparte con anunciantes: tus cuentas, gastos y deudas jamás salen hacia redes publicitarias.
- Nuvora no incluye rastreadores analíticos propios.

## 5. Exportación y eliminación de datos

Desde **Herramientas → Ajustes** puedes:

- **Exportar** todos tus datos en formato JSON.
- **Eliminar los datos del dispositivo** permanentemente.
- **Eliminar tu cuenta y tus datos de la nube:** en la tarjeta de tu cuenta, toca **"Eliminar cuenta y datos"**. Esto borra tu usuario, tu respaldo en la nube y tus datos locales de forma permanente e irreversible. También puedes solicitar el borrado escribiendo al correo de contacto de la sección 9.

## 6. Naturaleza de las recomendaciones

Los cálculos y recomendaciones de Nuvora (dinero disponible, gasto diario sugerido, "¿Puedo permitírmelo?", proyecciones de flujo de caja, Modo Emergencia) son **orientativos** y se basan únicamente en la información que tú introduces. No constituyen asesoramiento financiero, contable ni legal profesional.

## 7. Menores de edad

La aplicación no está dirigida a menores de 13 años y no recopila datos de menores de forma intencional.

## 8. Cambios en esta política

Si una versión futura introduce nuevas funciones que cambien el tratamiento de datos (por ejemplo, asistente de IA), esta política se actualizará antes del lanzamiento de esa versión y se describirá exactamente qué datos se envían y con qué finalidad.

## 9. Contacto

Para preguntas sobre esta política o para solicitar la eliminación de tu cuenta y datos: **Nuvoraapk@gmail.com**
