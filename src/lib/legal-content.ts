import type { Locale } from "@/lib/site-data";

export type LegalPageKind = "privacy" | "data-deletion";
type LegalDocument = {
  title: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

export const legalContent: Record<Locale, Record<LegalPageKind, LegalDocument>> = {
  en: {
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
