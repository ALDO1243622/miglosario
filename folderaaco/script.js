// Definiciones del glosario
const glosario = {
    "Blockchain": "Una tecnología de registro descentralizado que permite almacenar información de manera segura y transparente, distribuida a través de una red de computadoras. Se utiliza principalmente para transacciones criptográficas, pero también en otras áreas que requieren trazabilidad y seguridad de datos.",
    "Experiencia de usuario": "Se refiere a cómo un usuario interactúa con un producto o servicio, especialmente en el ámbito digital. Incluye aspectos como la facilidad de uso, la funcionalidad, el diseño y la satisfacción del usuario.",
    "JSON": "Un formato de intercambio de datos basado en texto que es fácil de leer y escribir para los humanos y fácil de interpretar para las máquinas.",
    "API RESTful": "Un estilo de arquitectura de interfaces de programación de aplicaciones (API) que sigue los principios de REST (Representational State Transfer), donde los recursos se acceden a través de métodos HTTP como GET, POST, PUT y DELETE.",
    "Página Web 2.0 y 3.0": "Página Web 2.0: Se caracteriza por la interacción del usuario y la generación de contenido colaborativo, como redes sociales o blogs. Ejemplo: Facebook. Página Web 3.0: Introduce tecnologías como la inteligencia artificial y el blockchain, con un enfoque en la personalización y la descentralización. Ejemplo: Steemit.",
    "SPA": "Una aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido a medida que el usuario interactúa con la aplicación. Ejemplo: Gmail.",
    "PWA": "Una aplicación web que utiliza tecnologías modernas para ofrecer una experiencia similar a una aplicación nativa, incluida la capacidad de trabajar sin conexión. Ejemplo: Twitter Lite.",
    "Dirección IP": "Un número único que identifica a cada dispositivo en una red que utiliza el Protocolo de Internet para comunicarse.",
    "¿Responsiva o adaptativa?": "Responsiva: Un diseño web que se ajusta automáticamente a diferentes tamaños de pantalla y dispositivos. Adaptativa: Un diseño que utiliza diseños predeterminados que se cargan dependiendo del dispositivo detectado.",
    "Transferencia de datos": "El proceso de mover o copiar datos de un lugar a otro, ya sea en una red o entre dispositivos de almacenamiento.",
    "Versión BETA": "Una versión preliminar de un software que se lanza para pruebas antes de su lanzamiento oficial. Puede contener errores que se solucionarán basados en el feedback de los usuarios.",
    "Hospedaje web": "El servicio que proporciona el espacio y los recursos necesarios para que un sitio web sea accesible en Internet.",
    "Dominio": "La dirección única de un sitio web, como 'www.ejemplo.com', que los usuarios ingresan en un navegador para acceder a una página web.",
    "Subdominio": "Una división de un dominio principal. Por ejemplo, en 'blog.ejemplo.com', 'blog' es el subdominio.",
    "SSH": "Un protocolo de red que permite una comunicación segura entre un cliente y un servidor, generalmente para la administración remota de sistemas.",
    "FTP": "Un protocolo estándar para transferir archivos a través de una red, comúnmente utilizado para subir o descargar archivos a servidores web.",
    "Base de datos relacional": "Un tipo de base de datos que organiza los datos en tablas relacionadas entre sí mediante claves primarias y extranjeras. Ejemplo: MySQL.",
    "Base de datos no relacional": "Un tipo de base de datos que no utiliza tablas con relaciones, sino otros esquemas como documentos, gráficos o claves-valor. Ejemplo: MongoDB.",
    "Token": "En criptografía, es una unidad digital que representa activos o derechos dentro de una blockchain.",
    "Disponibilidad": "La capacidad de un sistema o servicio para estar operativo y accesible cuando se necesita.",
    "Integridad": "La garantía de que los datos no han sido alterados o modificados de manera no autorizada.",
    "Confidencialidad": "El principio que asegura que la información solo es accesible por las personas autorizadas.",
    "Control de versiones": "Un sistema que registra los cambios en los archivos a lo largo del tiempo para que puedas revertir a versiones anteriores. Ejemplo: Git.",
    "Accesibilidad": "El diseño de productos, dispositivos o entornos para que puedan ser utilizados por personas con discapacidades.",
    "Documentación": "Los manuales, guías o recursos que explican cómo funciona un sistema o una aplicación, dirigidos tanto a usuarios como a desarrolladores.",
    "CSS": "Un lenguaje utilizado para describir el aspecto y formato de un documento escrito en HTML o XML. Se usa para definir estilos como colores, tamaños y disposición de los elementos en una página web.",
    "HTML": "El lenguaje de marcado estándar para crear páginas web. Define la estructura básica de un sitio, incluyendo elementos como encabezados, párrafos, enlaces e imágenes.",
    "JavaScript": "Un lenguaje de programación que permite crear contenido dinámico e interactivo en páginas web.",
    "Documento web": "Un archivo HTML que contiene el contenido y estructura de una página web, accesible a través de un navegador.",
    "Elementos básicos de documentos web": "Los componentes esenciales en una página web, como encabezados (h1-h6), párrafos, listas, enlaces, imágenes y tablas.",
    "Formularios": "Una interfaz en una página web que permite a los usuarios enviar datos, como texto, opciones de selección, o archivos, hacia un servidor.",
    "Método GET y POST": "GET: Solicita datos del servidor y los muestra en la URL. POST: Envía datos al servidor para que se procesen, manteniéndolos ocultos en la URL.",
    "Selectores": "Patrones utilizados para seleccionar y aplicar estilos a elementos HTML específicos."
};

// Función de búsqueda
function buscar() {
    const query = document.getElementById("buscar").value.toLowerCase();
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    let encontrado = false;

    // Búsqueda en el glosario
    for (let termino in glosario) {
        if (termino.toLowerCase().includes(query)) {
            const definicion = glosario[termino];
            const resultadoHTML = `
                <div class="definicion">
                    <span class="termino">${termino}</span>: ${definicion}
                </div>`;
            resultadosDiv.innerHTML += resultadoHTML;
            encontrado = true;
        }
    }

    // Si no se encuentra el término
    if (!encontrado) {
        resultadosDiv.innerHTML = "<p>No se encontró el término.</p>";
    }
}