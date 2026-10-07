---
permalink: /privacidad
---

# Política de Privacidad de Nuvora

**Última actualización: 7 de octubre de 2026 — versión 5.7.0**

Nuvora ("la aplicación") es una herramienta de finanzas personales y de gestión para emprendimientos. Esta política explica qué datos utiliza Nuvora, dónde se almacenan, cuándo pueden salir de tu dispositivo, qué servicios de terceros intervienen y qué opciones tienes para controlar o eliminar tu información.

> **Principio de privacidad de Nuvora:** la aplicación está diseñada con un enfoque local primero. Tus registros personales y financieros se guardan en tu dispositivo. La sincronización en la nube es opcional. Algunas funciones que tú decides utilizar —como publicar un catálogo web, iniciar sesión, usar reconocimiento de voz, escanear códigos de barras, tomar o seleccionar fotografías, ver anuncios o compartir por WhatsApp— requieren permisos o servicios externos y se describen expresamente en esta política.

## 1. Datos que puedes introducir en Nuvora

Nuvora puede tratar la información que tú introduces voluntariamente, incluyendo:

- **Finanzas personales:** cuentas, saldos, gastos, ingresos, presupuestos, metas, fondos, deudas, suscripciones, recordatorios, pagos y planificación financiera.
- **Inventario del hogar y lista de compras:** productos, cantidades actuales y objetivo, unidades, categorías, movimientos de inventario, conteos físicos, historial de compras, precios, códigos de barras, fotografías de productos, notas y datos necesarios para calcular cuánto falta comprar o sugerir reposición.
- **Modo Emprendimiento:** negocios, ventas, compras, clientes, proveedores, cuentas por cobrar o fiados, inventario, costos, precios, stock, movimientos de inventario, arqueos y cierres de caja, ganancias, márgenes, recibos y demás información operativa del negocio.
- **Datos del negocio para el catálogo:** nombre del negocio, descripción, número de WhatsApp, moneda, logo, productos, precios, descripciones, disponibilidad o stock y fotografías de productos.
- **Preferencias de experiencia:** país seleccionado, idioma de la aplicación, moneda principal, modo Personal/Emprendedor/Ambos y otras preferencias de configuración. Estas preferencias sirven para adaptar la experiencia y no modifican por sí solas tus registros financieros.
- **Datos de cuenta opcionales:** correo electrónico e identificador de usuario generado por Firebase Authentication. Si utilizas Inicio de sesión con Google, Google autentica tu cuenta y comunica a Nuvora los datos necesarios para iniciar sesión. Nuvora no recibe tu contraseña de Google.
- **Datos de compra:** si compras Premium u otro producto gestionado mediante Google Play, Google procesa el pago. Nuvora recibe la información necesaria para reconocer el estado de la compra o suscripción, pero no recibe los datos completos de tu tarjeta u otro medio de pago.
- **Texto de registro inteligente:** cuando escribes una instrucción para registrar un movimiento, Nuvora la interpreta dentro de la aplicación para crear el registro correspondiente.
- **Voz opcional:** si utilizas el dictado, el audio es procesado por el servicio de reconocimiento de voz disponible en Android. Nuvora no mantiene una grabación propia del audio; utiliza el texto resultante para completar la acción solicitada.

Nuvora no solicita acceso a tus contactos ni utiliza tu ubicación para las funciones financieras descritas actualmente. El micrófono se utiliza únicamente cuando activas voluntariamente una función de dictado. La cámara se utiliza únicamente cuando activas una función que la necesita, como escanear un código de barras o tomar una fotografía.

## 2. Almacenamiento local y sincronización opcional

- **En tu dispositivo:** los datos principales de la aplicación, incluido el inventario del hogar y sus movimientos, se almacenan localmente y muchas funciones pueden utilizarse sin conexión.
- **Sincronización opcional:** si creas o utilizas una cuenta, Nuvora puede sincronizar información compatible con **Google Cloud Firestore** para permitir respaldo y recuperación entre dispositivos.
- **Transmisión:** cuando se utilizan servicios en la nube, la comunicación se realiza mediante conexiones cifradas HTTPS/TLS.
- **Sin cuenta:** los registros financieros principales permanecen en el dispositivo, salvo cuando activas voluntariamente una función que necesita transmitir información, como publicar un catálogo, utilizar reconocimiento de voz, efectuar una compra, mostrar anuncios o compartir contenido mediante otra aplicación.

## 3. Inventario del hogar, lista de compras y códigos de barras

Nuvora 5.7 puede utilizar la información del inventario del hogar para mantener una lista de compras dinámica. Por ejemplo, puede comparar la cantidad que deseas mantener con la cantidad registrada actualmente y calcular cuánto falta comprar. Al registrar consumo, reposición, conteos físicos o compras, esos valores pueden actualizarse localmente.

La aplicación también puede guardar un código de barras asociado a un producto y utilizar la cámara para leerlo. El acceso a la cámara se solicita para esta función y para tomar fotografías cuando corresponda. Nuvora no utiliza la cámara de forma continua en segundo plano ni la activa sin una acción del usuario.

Las fotografías tomadas o seleccionadas para productos del inventario pueden permanecer almacenadas en el dispositivo. Una fotografía solo necesita salir del dispositivo cuando el usuario utiliza una función que expresamente la publica o comparte, por ejemplo un catálogo web de negocio.

Los cálculos de reposición, faltantes, historial de movimientos o predicciones son herramientas informativas basadas en los datos registrados por el usuario y no requieren por sí mismos publicar el inventario doméstico en Internet.

## 4. Catálogo web del Modo Emprendimiento

Cuando decides **publicar o compartir un catálogo web**, determinados datos dejan de ser exclusivamente locales porque deben estar disponibles para que tus clientes puedan ver el catálogo.

El catálogo puede incluir:

- nombre, descripción y logo del negocio;
- número de WhatsApp del negocio;
- nombres y descripciones de productos;
- precios, moneda y disponibilidad o stock;
- fotografías de productos;
- fecha de actualización del catálogo.

Dependiendo de tu sesión y de la disponibilidad de los servicios, Nuvora puede utilizar uno de estos mecanismos:

1. **Firebase Storage:** si existe una sesión compatible, Nuvora puede publicar el archivo del catálogo, el logo y las fotografías de productos en infraestructura de Google Firebase Storage.
2. **Cloudflare:** Nuvora puede utilizar Cloudflare Workers y almacenamiento asociado para procesar o alojar información e imágenes necesarias para el catálogo público.
3. **Enlace codificado:** cuando corresponde, parte de la información del catálogo puede viajar codificada dentro del propio enlace compartido para que la página pueda representarla.

**Un catálogo publicado está destinado a ser visible para terceros.** Cualquier persona que reciba o consiga el enlace puede ver la información pública contenida en ese catálogo. No publiques datos que no quieras mostrar a tus clientes.

Las fotografías seleccionadas siguen guardándose también en el dispositivo mientras permanezcan allí, pero al publicar el catálogo una copia puede enviarse a infraestructura de Firebase o Cloudflare para que pueda mostrarse en Internet.

## 5. Carrito y pedidos enviados por WhatsApp

El catálogo web puede permitir que un cliente seleccione productos, cantidades, escriba su nombre y agregue una nota antes de preparar un pedido.

- La selección del carrito se gestiona en la página del catálogo.
- Navegar por el catálogo, agregar productos al carrito o preparar un pedido no equivale por sí mismo a confirmar una venta dentro de Nuvora ni debe descontar automáticamente el inventario del negocio.
- Cuando el cliente elige **Enviar pedido por WhatsApp**, se prepara un mensaje con los productos, cantidades, total y los datos escritos por el cliente, y se abre WhatsApp para que el usuario continúe el envío.
- WhatsApp recibe el contenido únicamente cuando el usuario continúa con esa acción conforme al funcionamiento de su servicio.

La información tratada posteriormente dentro de WhatsApp queda sujeta también a las condiciones y política de privacidad de WhatsApp/Meta.

## 6. Diagnósticos, analítica y publicidad

Nuvora utiliza servicios de Google para mejorar estabilidad, entender el funcionamiento general de la aplicación y monetizar la versión gratuita.

- **Firebase Crashlytics:** puede recibir información técnica sobre fallos, versión de la app, sistema operativo, modelo o características técnicas del dispositivo y otros identificadores técnicos necesarios para diagnosticar errores.
- **Firebase Analytics:** puede recibir eventos técnicos o de uso de la aplicación e identificadores técnicos asociados al funcionamiento del servicio. Nuvora procura no enviar deliberadamente contenido financiero, montos, nombres de clientes, inventarios domésticos ni descripciones privadas como parámetros analíticos.
- **Google AdMob:** la versión gratuita puede mostrar anuncios. Google puede tratar el identificador de publicidad, información técnica del dispositivo e interacción con anuncios de acuerdo con sus propias políticas y la configuración del usuario.
- **Premium:** cuando la modalidad Premium esté activa y corresponda según la configuración del producto, la publicidad puede dejar de mostrarse.

Nuvora **no vende tus registros financieros ni tu inventario doméstico a anunciantes**.

## 7. Servicios de terceros utilizados

Según las funciones que utilices, Nuvora puede interactuar con:

- **Google Firebase Authentication / Google Sign-In:** autenticación opcional.
- **Google Cloud Firestore:** sincronización y respaldo opcional.
- **Google Firebase Storage:** publicación de catálogos, logos y fotografías cuando corresponde.
- **Firebase Crashlytics:** diagnóstico de fallos.
- **Firebase Analytics:** métricas técnicas y de uso.
- **Google Play Billing:** compras y suscripciones.
- **Google AdMob:** publicidad en la versión gratuita.
- **Reconocimiento de voz de Android / Google:** conversión de voz a texto cuando activas el dictado.
- **Cloudflare Workers y almacenamiento asociado:** procesamiento y alojamiento de información o imágenes publicadas en catálogos cuando corresponde.
- **GitHub Pages:** alojamiento de la página web de Nuvora, esta política y la interfaz pública del catálogo. GitHub puede generar registros técnicos estándar de acceso web.
- **WhatsApp / Meta:** envío voluntario de catálogos, pedidos, cobros, recibos u otros mensajes que decidas compartir.
- **Servicios públicos de tasas y divisas:** consultas necesarias para mostrar tasas de cambio. Estas consultas no necesitan incluir tus movimientos financieros personales.

Cada proveedor puede tratar determinados datos conforme a sus propias políticas de privacidad y condiciones de servicio.

## 8. Permisos del dispositivo

Nuvora puede solicitar permisos únicamente cuando una función los necesita, entre ellos:

- **Cámara:** para escanear códigos de barras y, cuando el usuario lo solicita, tomar fotografías relacionadas con productos o funciones compatibles.
- **Micrófono:** para dictado por voz.
- **Fotos o galería:** para elegir logos o fotografías de productos cuando utilizas funciones compatibles, incluido el catálogo.
- **Notificaciones:** para recordatorios, pagos u otras alertas financieras configuradas por el usuario.
- **Biometría:** para permitir bloqueo o acceso protegido utilizando las capacidades de seguridad del dispositivo.

Puedes negar o revocar permisos desde los ajustes de Android, aunque la función relacionada puede dejar de estar disponible.

## 9. Exportación, conservación y eliminación

Nuvora permite administrar datos desde la propia aplicación según las funciones disponibles:

- puedes exportar información compatible en formatos ofrecidos por la app;
- puedes eliminar datos locales desde las opciones correspondientes;
- puedes solicitar la eliminación de tu cuenta de autenticación desde la aplicación cuando la función esté disponible;
- los datos sincronizados se conservan mientras exista la cuenta o sean necesarios para prestar la sincronización, salvo eliminación o requisitos legales aplicables.

**Catálogos publicados:** los archivos públicos del catálogo, sus imágenes o copias alojadas en Firebase o Cloudflare pueden permanecer accesibles mientras sigan publicados o mientras exista su URL. Si necesitas retirar datos o imágenes de un catálogo ya publicado y la aplicación no ofrece en ese momento un control suficiente para eliminarlos, puedes solicitar su eliminación escribiendo a **Nuvoraapk@gmail.com** e indicando la información necesaria para identificar el catálogo.

Los proveedores externos también pueden conservar registros técnicos durante los periodos establecidos en sus propias políticas o por obligaciones legales.

## 10. Seguridad

Nuvora utiliza medidas razonables orientadas a proteger la información, entre ellas almacenamiento local, reglas de acceso de Firebase cuando se utiliza sincronización y conexiones HTTPS/TLS para comunicaciones remotas.

Ningún sistema puede garantizar seguridad absoluta. Por ello, protege tu dispositivo, no compartas credenciales y recuerda que un enlace de catálogo público puede ser reenviado por terceros.

## 11. Menores de edad

Nuvora no está dirigida intencionalmente a menores de 13 años y no busca recopilar deliberadamente información personal de menores de esa edad. Si detectamos que se ha proporcionado información de un menor de forma indebida, puede solicitarse su eliminación mediante el correo de contacto.

## 12. Decisiones y recomendaciones financieras

Los análisis, proyecciones, presupuestos, estimaciones, recomendaciones, indicadores de dinero disponible, simulaciones, sugerencias de reposición y demás resultados mostrados por Nuvora son herramientas informativas basadas en los datos introducidos por el usuario.

No constituyen asesoramiento financiero, contable, fiscal ni legal profesional, ni garantizan resultados futuros.

## 13. Idioma, país y personalización

Nuvora puede guardar el idioma elegido (por ejemplo, español, inglés o portugués), el país seleccionado y el modo de experiencia elegido para presentar la interfaz, monedas y accesos de forma adecuada. Estas preferencias pueden mantenerse entre sesiones en el dispositivo y, cuando una función de sincronización compatible esté activa, podrán formar parte de la configuración asociada a la experiencia del usuario.

Cambiar el idioma de la interfaz no traduce ni altera automáticamente textos, notas, nombres de productos o registros introducidos previamente por el usuario.

## 14. Cambios en esta política

Esta política puede actualizarse cuando cambien las funciones de Nuvora, los proveedores utilizados o la forma en que se tratan los datos. La fecha de actualización publicada al inicio de esta página indicará la versión vigente.

Cuando una actualización implique cambios relevantes en el tratamiento de información, Nuvora procurará reflejarlos en esta política antes o junto con el lanzamiento correspondiente.

## 15. Contacto y solicitudes de privacidad

Para preguntas, solicitudes de acceso, corrección o eliminación de datos, o para pedir la retirada de un catálogo o de imágenes publicadas:

**Correo:** Nuvoraapk@gmail.com

**Política oficial:** https://nuvora-ve.github.io/privacidad
