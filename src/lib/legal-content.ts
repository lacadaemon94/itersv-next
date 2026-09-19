import type { Locale } from "@/lib/site-data";

export type LegalPageKind = "privacy" | "data-deletion" | "terms";
type LegalDocument = {
  title: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

export const legalContent: Record<Locale, Record<LegalPageKind, LegalDocument>> = {
  en: {
    terms: {
      title: "Terms of service",
      intro: "These terms describe use of the Iter website and Iter business integrations, including the Iter Meta app. Please read them before using the services.",
      sections: [
        { title: "Operator and scope", paragraphs: [
          "The service is operated by Javier Alejandro Flores, operating as Iter / Itersv in El Salvador. Contact: hola@itersv.com.",
          "These terms apply to the website and integrations made available by Iter. A separate written project agreement may define the services, deliverables, fees, support, and other terms for a particular engagement. Connecting an account does not by itself create a paid subscription."
        ] },
        { title: "Authorized business access", paragraphs: [
          "Only connect accounts and business assets that you own or are authorized to manage. If you act for a business, you must have authority to use the service on its behalf and give instructions for its data and content.",
          "Keep credentials private and tell us if access may have been compromised. Do not use the service to bypass permissions, access another person’s information without authority, send spam, mislead people, or violate applicable law or platform rules."
        ] },
        { title: "Instructions and review", paragraphs: [
          "Integrations perform the functions enabled for your project and authorized accounts. Review the destination, audience, content, and intended action before approving publication, messaging, deletion, or other changes.",
          "AI-generated classifications, suggested replies, and reconciliation reports can contain errors or omit information. A responsible person must review them before relying on them for customer commitments or business records. API results may not include all historical activity.",
          "The RopaChiva pilot prepares evidence for human review and does not automatically change inventory or accounting. Its Ads access is read-only."
        ] },
        { title: "Content and rights", paragraphs: [
          "You retain your rights in content you provide. You must have the rights and permissions needed for Iter to process it and carry out your authorized instructions.",
          "You permit Iter and the providers involved in the requested workflow to process that content only as needed to deliver the service, subject to the applicable project agreement and privacy notice. These terms do not transfer ownership of your content to Iter."
        ] },
        { title: "Third-party services and availability", paragraphs: [
          "Connected services, including Meta, apply their own terms, permissions, and technical limits. Access can change or expire, and features may be unavailable because of platform restrictions, outages, or review decisions.",
          "Iter does not guarantee platform approval, access to unavailable history, uninterrupted service, or a particular business outcome. Project-specific service commitments, if any, are set out in the applicable written agreement."
        ] },
        { title: "Privacy and ending access", paragraphs: [
          "Our privacy policy explains processing and retention. Our data-deletion page explains how to request removal of information held by Iter. Both are linked below, and requests can be sent to hola@itersv.com without creating an account.",
          "You can revoke an integration’s access in the connected platform or ask Iter to disconnect it. Revoking access does not automatically delete copies already held by Iter or remove content from the original platform.",
          "Iter may restrict or suspend an integration when needed to address compromised access, misuse, or a platform requirement. Contact us to discuss restoring authorized access."
        ] },
        { title: "Changes and questions", paragraphs: [
          "Updates to these terms will be published here with the updated date. Material changes affecting an ongoing project will be addressed with the client before they apply to that project.",
          "Nothing in these terms limits rights or obligations that cannot be excluded under applicable law. For questions, contact Javier Alejandro Flores at hola@itersv.com."
        ] }
      ]
    },
    privacy: {
      title: "Privacy policy",
      intro: "This notice covers itersv.com and the Iter Meta app, including services provided to authorized business clients such as RopaChiva.",
      sections: [
        { title: "Who is responsible", paragraphs: [
          "Javier Alejandro Flores, operating as Iter / Itersv in El Salvador, is responsible for this website and the Iter app. Contact: hola@itersv.com.",
          "When Iter processes a client’s customer information on that client’s instructions, the client determines the business purpose. You may contact Iter to identify the relevant business and route a privacy request."
        ] },
        { title: "Information we process", paragraphs: [
          "Website inquiries include the contact and project details you choose to provide. Technical information may include request logs and preferences needed to operate the website.",
          "For an authorized Meta integration, information can include account and business identifiers, Page and Instagram profiles, posts, media, comments, conversation participants, messages, timestamps, and engagement information. Where a client enables a relevant service, it can also include WhatsApp messages, leads, catalog information, and advertising account and performance data.",
          "The information actually retrieved depends on the client’s instructions, enabled functionality, asset access, and Meta permissions. An app permission alone does not mean every category is collected."
        ] },
        { title: "How information is used", paragraphs: [
          "We use information to respond to inquiries, connect authorized business accounts, support customer-service and content workflows, prepare requested reports, and maintain and troubleshoot the service.",
          "For RopaChiva, the planned workflow reviews available comments and messages, prepares reservation and sales reconciliation evidence for human review, and performs separately authorized organic publishing. It does not automatically change inventory or accounting records; Ads access in this connector is read-only."
        ] },
        { title: "Access and service providers", paragraphs: [
          "Information is available to authorized operators and providers needed to deliver the requested service. Depending on the workflow, these include Vultr for hosting, the self-hosted n8n instance at n8n.itersv.com for automation, OpenAI / ChatGPT for AI-assisted processing, and Supabase for storage and application services.",
          "Relevant information is shared with these services when needed for the authorized workflow. Their involvement varies by project; a provider listed here does not necessarily receive every category of data. Services may process information outside El Salvador. Contact us for the processing arrangements applicable to your service.",
          "Business integrations use the access granted by the business and remain subject to Meta’s permissions."
        ] },
        { title: "Retention", paragraphs: [
          "Raw Meta test snapshots are retained for up to 30 days, unless deleted sooner. Reconciliation reports are retained only while needed for the agreed business task.",
          "Retention for ongoing client services is determined by the agreed purpose and applicable recordkeeping requirements. When information is no longer needed, it is deleted or anonymized. If a legal obligation prevents deletion of a specific record, we explain the restriction where permitted."
        ] },
        { title: "Your choices and requests", paragraphs: [
          "You can request access, correction, or deletion, or ask about processing, by emailing hola@itersv.com. We may request limited information to confirm that you are authorized to make the request.",
          "You can remove the Iter integration in the relevant Meta account settings. Removing access stops future access under that authorization; it does not by itself delete copies already held by Iter. Follow our data-deletion instructions to request their removal.",
          "Deleting Iter’s copy does not delete the original post, message, or account on Meta or a business’s separate records. Those records must be addressed with the relevant service or business."
        ] },
        { title: "Updates", paragraphs: [
          "We will publish updates to this notice here. Contact hola@itersv.com with questions about this notice or the handling of your information."
        ] }
      ]
    },
    "data-deletion": {
      title: "Data deletion",
      intro: "Request deletion of personal information held by Iter / Itersv, including information received through the Iter Meta app.",
      sections: [
        { title: "1. Send your request", paragraphs: [
          "Email hola@itersv.com with the subject “Iter data deletion”. Identify the connected business or service and the Facebook, Instagram, or WhatsApp account concerned. Include an account handle or relevant identifier and describe which information you want deleted.",
          "Do not send passwords, access tokens, payment details, identity documents, or an entire private conversation in the initial request."
        ] },
        { title: "2. Verification and scope", paragraphs: [
          "We will acknowledge the request and, when necessary, ask for limited information to verify your authority over the affected information. We will identify the records and services within Iter’s control and coordinate with the relevant business when it controls the processing.",
          "You do not need to create an Iter account to make a request."
        ] },
        { title: "3. Deletion and confirmation", paragraphs: [
          "We will delete or anonymize the applicable information within Iter’s control and confirm the outcome by email. If an applicable legal obligation prevents deletion of a specific record, we will explain the restriction where permitted. You can request a status update by replying to the same email thread.",
          "This process covers Iter’s copies, including applicable test snapshots and reports. It does not remove content from Facebook, Instagram, WhatsApp, or a client’s separate records."
        ] },
        { title: "Disconnect the integration", paragraphs: [
          "To stop future access, remove Iter from the connected apps or business integrations in your Meta account settings, or ask the business administrator to revoke its access. Disconnecting and deleting stored copies are separate actions; email us to request deletion as well."
        ] }
      ]
    }
  },
  es: {
    terms: {
      title: "Términos del servicio",
      intro: "Estos términos describen el uso del sitio de Iter y sus integraciones para negocios, incluida la app Iter de Meta. Léelos antes de utilizar los servicios.",
      sections: [
        { title: "Operador y alcance", paragraphs: [
          "El servicio es operado por Javier Alejandro Flores, quien opera como Iter / Itersv en El Salvador. Contacto: hola@itersv.com.",
          "Estos términos se aplican al sitio y las integraciones ofrecidas por Iter. Un acuerdo de proyecto por escrito puede definir servicios, entregables, precios, soporte y otras condiciones de una contratación específica. Conectar una cuenta no crea por sí solo una suscripción de pago."
        ] },
        { title: "Acceso autorizado", paragraphs: [
          "Conecta únicamente cuentas y activos que te pertenezcan o que tengas autorización para administrar. Si actúas por un negocio, debes tener autoridad para usar el servicio en su nombre y dar instrucciones sobre sus datos y contenido.",
          "Protege tus credenciales y avísanos si el acceso puede estar comprometido. No uses el servicio para evadir permisos, acceder sin autorización a información ajena, enviar spam, engañar a personas ni incumplir la ley o las reglas de las plataformas."
        ] },
        { title: "Instrucciones y revisión", paragraphs: [
          "Las integraciones realizan las funciones habilitadas para tu proyecto y cuentas autorizadas. Revisa el destino, la audiencia, el contenido y la acción prevista antes de aprobar publicaciones, mensajes, eliminaciones u otros cambios.",
          "Las clasificaciones, respuestas sugeridas e informes generados con IA pueden tener errores u omisiones. Una persona responsable debe revisarlos antes de usarlos para compromisos con clientes o registros del negocio. Los resultados de las API pueden no incluir toda la actividad histórica.",
          "El piloto de RopaChiva prepara evidencia para revisión humana y no modifica automáticamente inventario ni contabilidad. Su acceso a anuncios es solo de lectura."
        ] },
        { title: "Contenido y derechos", paragraphs: [
          "Conservas tus derechos sobre el contenido que proporcionas. Debes contar con los derechos y permisos necesarios para que Iter lo procese y ejecute tus instrucciones autorizadas.",
          "Permites que Iter y los proveedores del flujo solicitado procesen ese contenido únicamente en la medida necesaria para prestar el servicio, sujeto al acuerdo de proyecto y al aviso de privacidad aplicables. Estos términos no transfieren a Iter la propiedad de tu contenido."
        ] },
        { title: "Servicios externos y disponibilidad", paragraphs: [
          "Los servicios conectados, incluido Meta, aplican sus propios términos, permisos y límites técnicos. El acceso puede cambiar o vencer, y algunas funciones pueden no estar disponibles por restricciones, interrupciones o decisiones de revisión de las plataformas.",
          "Iter no garantiza aprobaciones de las plataformas, acceso a historial no disponible, servicio ininterrumpido ni un resultado comercial específico. Los compromisos de servicio de cada proyecto, si existen, se establecen en el acuerdo por escrito correspondiente."
        ] },
        { title: "Privacidad y finalización del acceso", paragraphs: [
          "Nuestra política de privacidad explica el procesamiento y la conservación. La página de eliminación de datos explica cómo solicitar que se retire información conservada por Iter. Ambas están enlazadas abajo; puedes enviar solicitudes a hola@itersv.com sin crear una cuenta.",
          "Puedes revocar el acceso de una integración en la plataforma conectada o pedir a Iter que la desconecte. Revocar el acceso no elimina automáticamente las copias conservadas por Iter ni el contenido de la plataforma original.",
          "Iter puede restringir o suspender una integración para atender accesos comprometidos, usos indebidos o requisitos de una plataforma. Contáctanos para conversar sobre la restauración del acceso autorizado."
        ] },
        { title: "Cambios y consultas", paragraphs: [
          "Las actualizaciones se publicarán aquí con su fecha. Los cambios importantes que afecten un proyecto en curso se tratarán con el cliente antes de aplicarse a ese proyecto.",
          "Nada en estos términos limita derechos u obligaciones que no puedan excluirse conforme a la ley aplicable. Para consultas, contacta a Javier Alejandro Flores en hola@itersv.com."
        ] }
      ]
    },
    privacy: {
      title: "Política de privacidad",
      intro: "Este aviso cubre itersv.com y la app Iter de Meta, incluidos los servicios para negocios autorizados como RopaChiva.",
      sections: [
        { title: "Responsable", paragraphs: [
          "Javier Alejandro Flores, quien opera como Iter / Itersv en El Salvador, es responsable de este sitio y de la app Iter. Contacto: hola@itersv.com.",
          "Cuando Iter procesa información de clientes por instrucciones de un negocio, ese negocio determina la finalidad. Puedes contactar a Iter para identificar al negocio correspondiente y dirigir una solicitud de privacidad."
        ] },
        { title: "Información que procesamos", paragraphs: [
          "Las consultas del sitio incluyen los datos de contacto y del proyecto que decides proporcionar. La información técnica puede incluir registros de solicitudes y preferencias necesarios para operar el sitio.",
          "Una integración autorizada con Meta puede incluir identificadores de cuentas y negocios, perfiles de páginas e Instagram, publicaciones, contenido multimedia, comentarios, participantes de conversaciones, mensajes, fechas e información de interacción. Si el negocio habilita el servicio correspondiente, también puede incluir mensajes de WhatsApp, clientes potenciales, catálogos y datos de cuentas y rendimiento publicitario.",
          "La información obtenida depende de las instrucciones del negocio, las funciones habilitadas, el acceso a los activos y los permisos de Meta. Tener un permiso no significa que se recopilen todas las categorías."
        ] },
        { title: "Uso de la información", paragraphs: [
          "Usamos la información para responder consultas, conectar cuentas autorizadas, apoyar atención al cliente y gestión de contenido, preparar informes solicitados y mantener y solucionar problemas del servicio.",
          "Para RopaChiva, el flujo previsto revisa comentarios y mensajes disponibles, prepara evidencia de reservas y ventas para revisión humana y realiza publicaciones orgánicas autorizadas por separado. No cambia automáticamente el inventario ni la contabilidad; el acceso a anuncios de este conector es solo de lectura."
        ] },
        { title: "Acceso y proveedores", paragraphs: [
          "La información está disponible para operadores autorizados y proveedores necesarios para prestar el servicio. Según el flujo, incluyen Vultr para alojamiento, la instancia propia de n8n en n8n.itersv.com para automatización, OpenAI / ChatGPT para procesamiento asistido por IA y Supabase para almacenamiento y servicios de aplicaciones.",
          "Se comparte información pertinente con estos servicios cuando es necesaria para el flujo autorizado. Su participación depende del proyecto; aparecer aquí no significa que un proveedor reciba todas las categorías de datos. Los servicios pueden procesar información fuera de El Salvador. Contáctanos para conocer las condiciones aplicables a tu servicio.",
          "Las integraciones utilizan el acceso concedido por el negocio y están sujetas a los permisos de Meta."
        ] },
        { title: "Conservación", paragraphs: [
          "Las capturas de datos sin procesar de pruebas de Meta se conservan hasta 30 días, salvo que se eliminen antes. Los informes de conciliación se conservan únicamente mientras sean necesarios para la tarea acordada.",
          "La conservación en servicios continuos depende de la finalidad acordada y las obligaciones aplicables. Cuando la información deja de ser necesaria, se elimina o anonimiza. Si una obligación legal impide eliminar un registro específico, explicamos la restricción cuando esté permitido."
        ] },
        { title: "Opciones y solicitudes", paragraphs: [
          "Puedes solicitar acceso, corrección o eliminación, o consultar sobre el procesamiento, escribiendo a hola@itersv.com. Podemos pedir información limitada para verificar que tienes autorización para hacer la solicitud.",
          "Puedes quitar la integración Iter en la configuración de Meta. Esto detiene el acceso futuro mediante esa autorización, pero no elimina las copias que Iter ya conserva. Usa nuestras instrucciones de eliminación para solicitarlo.",
          "Eliminar la copia de Iter no elimina publicaciones, mensajes o cuentas originales en Meta ni los registros independientes de un negocio. Debes gestionar esos registros con el servicio o negocio correspondiente."
        ] },
        { title: "Actualizaciones", paragraphs: [
          "Publicaremos aquí las actualizaciones de este aviso. Escribe a hola@itersv.com si tienes preguntas sobre el aviso o el manejo de tu información."
        ] }
      ]
    },
    "data-deletion": {
      title: "Eliminación de datos",
      intro: "Solicita la eliminación de información personal que conserva Iter / Itersv, incluida la recibida mediante la app Iter de Meta.",
      sections: [
        { title: "1. Envía tu solicitud", paragraphs: [
          "Escribe a hola@itersv.com con el asunto “Eliminación de datos de Iter”. Identifica el negocio o servicio conectado y la cuenta de Facebook, Instagram o WhatsApp correspondiente. Incluye el nombre de usuario o identificador pertinente e indica qué información deseas eliminar.",
          "No envíes contraseñas, tokens de acceso, datos de pago, documentos de identidad ni conversaciones privadas completas en la solicitud inicial."
        ] },
        { title: "2. Verificación y alcance", paragraphs: [
          "Confirmaremos la recepción y, si es necesario, solicitaremos información limitada para verificar tu autorización. Identificaremos los registros y servicios bajo control de Iter y coordinaremos con el negocio correspondiente cuando este determine el procesamiento.",
          "No necesitas crear una cuenta de Iter para presentar una solicitud."
        ] },
        { title: "3. Eliminación y confirmación", paragraphs: [
          "Eliminaremos o anonimizaremos la información correspondiente bajo control de Iter y confirmaremos el resultado por correo. Si una obligación legal impide eliminar un registro específico, explicaremos la restricción cuando esté permitido. Puedes consultar el estado respondiendo al mismo correo.",
          "Este proceso cubre las copias de Iter, incluidas las capturas de pruebas y los informes correspondientes. No elimina contenido de Facebook, Instagram, WhatsApp ni registros independientes de un negocio."
        ] },
        { title: "Desconecta la integración", paragraphs: [
          "Para detener el acceso futuro, quita Iter de las apps conectadas o integraciones comerciales en la configuración de Meta, o solicita al administrador del negocio que revoque el acceso. Desconectar y eliminar copias guardadas son acciones distintas; solicita también la eliminación por correo."
        ] }
      ]
    }
  }
};
