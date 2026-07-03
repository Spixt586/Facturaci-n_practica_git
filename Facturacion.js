let baseDatosConceptos = {
    "iva": {
        titulo: "Impuesto al Valor Agregado (IVA)",
        contenido: "<p>El Impuesto al Valor Agregado grava el valor de las transferencias locales o importaciones de bienes muebles, en todas sus etapas de comercialización y al valor de los servicios prestados.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Quién asume este pago?</strong> El gravamen es asumido por el consumidor final de dicho bien o servicio.</li><li><strong>¿Quién debe declararlo?</strong> Todos los agentes que intervienen en la cadena de comercialización están obligados a declarar y pagar el IVA generado.</li><li><strong>¿Existen excepciones?</strong> Sí, existen bienes y servicios con tarifa 0% (como salud, educación o transporte público) según las regulaciones tributarias.</li></ul><h3 class='titulo-tarjeta'>Productos Gravados con IVA</h3><p>Los productos gravados con IVA, son todos aquellos bienes o servicios a los que se le suma un porcentaje extra a su valor original (15% en Ecuador).</p><h4>Producto Gravados (Si Pagan IVA)</h4><ul><li>Tecnología y Accesorios</li><li>Entretenimiento y servicios digitales</li><li>Ropa y productos procesados</li><li>Electrodomésticos y menaje de hogar</li></ul><h4>Productos con Tarifa 0% (No Pagan IVA)</h4><ul><li>Alimentos y bebidas no procesadas (productos frescos de la canasta básica).</li><li>Medicamentos de uso humano, equipos e instrumental médico.</li><li>Transporte público de personas.</li><li>Salud y educación</li></ul>"
    },
    "base": {
        titulo: "Base Imponible",
        contenido: "<p>Es el valor total de los bienes que se transfieren o de los servicios que se prestan, calculado a base de sus precios de venta o de prestación del servicio, que incluyen impuestos, tasas por servicios y demás gastos legalmente imputables al precio.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>En términos simples:</strong> Es el monto financiero neto sobre el cual se calculará el porcentaje del IVA (sea 15% o 0%).</li><li><strong>¿Incluye descuentos?</strong> La base imponible se calcula <em>después</em> de aplicar cualquier descuento comercial permitido por la ley.</li></ul><h3 class='titulo-tarjeta'>Subtotal</h3><p>El subtotal es el valor total de los bienes o servicios antes de aplicar cualquier descuento, impuesto o recargo.</p><h3 class='titulo-tarjeta'>Cálculo</h3><ul><li><strong>Fórmula:</strong> Base Imponible = Subtotal - Descuentos</li></ul> "
    },
    "agente": {
        titulo: "Agente de Retención",
        contenido: "<p>Persona natural o jurídica que, por mandato de la ley o reglamento, se encuentra obligada a retener el impuesto al momento en que se produzca el pago o crédito en cuenta.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Cuál es su función?</strong> Actúan como un brazo recaudador del Estado. Retienen un porcentaje del pago que le hacen a su proveedor y lo entregan directamente a la administración tributaria.</li><li><strong>¿Están obligados a entregar un comprobante?</strong> Sí, obligatoriamente deben emitir un Comprobante de Retención para que el proveedor pueda justificar ese monto restado de su pago.</li></ul>"
    },
    "comprobantes": {
        titulo: "Comprobantes de Pago",
        contenido: "<p>Son los documentos que acreditan la transferencia de bienes o la prestación de servicios, o la realización de otras transacciones gravadas con tributos.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Para qué sirven?</strong> Sirven para sustentar costos, gastos y crédito tributario en las declaraciones formales de impuestos.</li><li><strong>Tipos comunes:</strong> Facturas, Notas de Venta, Liquidaciones de compra de bienes y prestación de servicios, Tiquetes de máquinas registradoras y boletos emitidos por empresas de espectáculos.</li></ul>"
    },
    "fisica": {
        titulo: "Factura Física",
        contenido: "<p>Es un comprobante de pago que se emite en formato de papel mediante imprentas autorizadas. Debe cumplir con ciertos requisitos legales e institucionales para que sea válida.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Siguen siendo válidas?</strong> Sí, pero su uso está siendo gradualmente reemplazado. Actualmente se autorizan principalmente por contingencia (cuando fallan los sistemas electrónicos).</li><li><strong>Requisitos indispensables:</strong> Deben llevar el RUC, autorización de imprenta, fecha de caducidad y desglose claro de los montos imponibles.</li></ul>"
    },
    "electronica": {
        titulo: "Factura Electrónica",
        contenido: "<p>Es un documento digital legalmente válido que respalda las operaciones comerciales y se emite de acuerdo a los estándares establecidos por la administración tributaria.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Tiene la misma validez que la física?</strong> Tiene exactamente la misma validez tributaria y legal que una factura en papel.</li><li><strong>¿Cómo se garantiza su seguridad?</strong> Se valida mediante una firma electrónica encriptada y un código de autorización único generado por la entidad de control.</li><li><strong>Beneficios:</strong> Ahorro de papel, envío inmediato por correo, almacenamiento seguro y agilidad en las declaraciones.</li></ul>"
    }
};

let clienteActual = {
    nombre: "",
    correo: "",
    cedula: ""
}

const productos = [
    { id: 1, nombre: "Arroz", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 2, nombre: "Pan", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 3, nombre: "Leche", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 5, nombre: "Ibuprofeno", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 6, nombre: "Paracetamol", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 7, nombre: "Levotiroxina", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 8, nombre: "Servicios médicos", categoria: "Salud", icono: "·", iva: 0, descripcion: "Prestaciones médicas, odontológicas y de diagnóstico clínico están gravadas con tarifa 0% de IVA." },
    { id: 9, nombre: "Atún", categoria: "Alimento Procesado", icono: "·", iva: 0.15, descripcion: "Conservas de pescado para consumo humano." },
    { id: 10, nombre: "Sardina", categoria: "Alimento Procesado", icono: "·", iva: 0.15, descripcion: "Conservas de pescado para consumo humano." },
    { id: 11, nombre: "Zapatos", categoria: "Calzado", icono: "·", iva: 0.15, descripcion: "Calzado para uso formal." },
    { id: 12, nombre: "Zapatillas", categoria: "Calzado", icono: "·", iva: 0.15, descripcion: "Calzado para uso deportivo o semi formal." },
    { id: 13, nombre: "Camisa", categoria: "Ropa", icono: "·", iva: 0.15, descripcion: "Prenda de vestir para uso formal o informal." },
    { id: 14, nombre: "Camiseta", categoria: "Ropa", icono: "·", iva: 0.15, descripcion: "Prenda de ropa para uso casual." },
    { id: 15, nombre: "Lavadora", categoria: "Electrodomésticos", icono: "·", iva: 0.15, descripcion: "Electrodoméstico automatizado para lavar ropa." },
    { id: 16, nombre: "Refrigerador", categoria: "Electrodomésticos", icono: "·", iva: 0.15, descripcion: "Electrodoméstico que permite almacenar alimentos en un ambiente fresco." },
    { id: 17, nombre: "Agua con gas", categoria: "Bebidas", icono: "·", iva: 0.15, descripcion: "Bebida gaseosa para consumo humano." },
    { id: 18, nombre: "Cerveza", categoria: "Bebidas Alcohólicas", icono: "·", iva: 0.15, descripcion: "Bebida alcohólica para consumo humano." },
    { id: 19, nombre: "Aceite de cocina", categoria: "Alimentos básicos", icono: "·", iva: 0.15, descripcion: "Alimento de la canasta básica familiar." },
    { id: 20, nombre: "Mantequilla", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 21, nombre: "Alojamiento", categoria: "Hospedaje", icono: "·", iva: 0.08, descripcion: "Servicio Hotelero"}
];

let configuracionTema = [
    { variable: '--tm-fondo-body', oscuro: '#0b1121', claro: '#f1f5f9' },
    { variable: '--tm-fondo-punto', oscuro: 'rgba(0, 240, 255, 0.1)', claro: 'rgba(99, 102, 241, 0.06)' },
    { variable: '--tm-color-texto', oscuro: '#ffffff', claro: '#0f172a' },
    { variable: '--tm-color-gris', oscuro: '#94a3b8', claro: '#334155' },
    { variable: '--tm-tarjeta-fondo', oscuro: 'rgba(255, 255, 255, 0.03)', claro: '#ffffff' },
    { variable: '--tm-tarjeta-borde', oscuro: 'rgba(255, 255, 255, 0.08)', claro: 'rgba(0, 0, 0, 0.08)' },
    { variable: '--tm-entrada-fondo', oscuro: 'rgba(0, 0, 0, 0.4)', claro: '#ffffff' },
    { variable: '--tm-entrada-borde', oscuro: 'rgba(255, 255, 255, 0.1)', claro: '#cbd5e1' },
    { variable: '--tm-entrada-color', oscuro: '#ffffff', claro: '#0f172a' },
    { variable: '--tm-modal-fondo', oscuro: '#0f172a', claro: '#ffffff' },
    { variable: '--tm-nav-texto', oscuro: '#a0aec0', claro: '#475569' },
    { variable: '--tm-nav-activo', oscuro: '#ffffff', claro: '#0f172a' },
    { variable: '--tm-label-color', oscuro: '#cbd5e1', claro: '#334155' },
    { variable: '--tm-radio-bg', oscuro: 'rgba(0, 0, 0, 0.2)', claro: '#f8fafc' },
    { variable: '--tm-radio-borde', oscuro: 'rgba(255, 255, 255, 0.05)', claro: '#e2e8f0' },
    { variable: '--tm-radio-texto', oscuro: '#a0aec0', claro: '#1e293b' },
    { variable: '--tm-formula-bg', oscuro: 'rgba(0, 0, 0, 0.4)', claro: '#f8fafc' },
    { variable: '--tm-formula-texto', oscuro: '#cbd5e1', claro: '#1e293b' },
    { variable: '--tm-resumen-bg', oscuro: 'rgba(0, 0, 0, 0.3)', claro: '#f1f5f9' },
    { variable: '--tm-tabla-texto', oscuro: '#a0aec0', claro: '#334155' },
    { variable: '--tm-h1-color', oscuro: '#ffffff', claro: '#0f172a' },
    { variable: '--tm-subtitulo', oscuro: '#ffffff', claro: '#0f172a' },
    { variable: '--tm-alternador-bg', oscuro: 'rgba(0, 0, 0, 0.3)', claro: '#e2e8f0' },
    { variable: '--tm-modal-texto', oscuro: '#cbd5e1', claro: '#334155' },
    { variable: '--tm-panel-vacio-h', oscuro: '#475569', claro: '#64748b' },
    { variable: '--tm-panel-vacio-p', oscuro: '#334155', claro: '#94a3b8' },
];

let productoEditandoId = null;

let temaClaro = false;
let productoSeleccionado = null;
let carritoFactura = [];
let facturaActualPDF = null;

function toggleMenuColores() {
    let menu = document.getElementById("menuColores")
    menu.classList.toggle("oculto")
}

function aplicarColorPaleta(boton) {
    let acento = boton.getAttribute("data-acento");
    let brillo = boton.getAttribute("data-brillo");
    let oscuro = boton.getAttribute("data-oscuro");

    document.documentElement.style.setProperty("--tm-acento", acento);
    document.documentElement.style.setProperty("--tm-acento-brillo", brillo);
    document.documentElement.style.setProperty("--tm-acento-oscuro", oscuro);

    let botones = document.querySelectorAll(".btn-color");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("activo");
    }
    boton.classList.add("activo");

    localStorage.setItem("colorPaleta", JSON.stringify({
        acento: acento,
        brillo: brillo,
        oscuro: oscuro
    }));

    document.getElementById("menuColores").classList.add("oculto");
}

function recuperarPaleta() {
    let guardado = localStorage.getItem("colorPaleta");
    if (guardado) {
        let datos = JSON.parse(guardado);
        document.documentElement.style.setProperty("--tm-acento", datos.acento);
        document.documentElement.style.setProperty("--tm-acento-brillo", datos.brillo);
        document.documentElement.style.setProperty("--tm-acento-oscuro", datos.oscuro);
    }
}

function mostrarError(idElemento, mensaje) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = mensaje;
        elemento.style.display = "block";
    }
}

function ocultarError(idElemento) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.style.display = "none";
    }
}

function iniciarSesion() {
    ocultarError("errLogin");
    let nombre = document.getElementById("txtNombreLogin").value.trim();
    let validacionLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let nombreEmpresa = document.getElementById("txtNombreEmpresa").value.trim();
    let rucEmpresa = document.getElementById("txtRucEmpresa").value.trim();

    if (nombre === "" || !validacionLetras.test(nombre)) {
        mostrarError("errLogin", "Por favor, ingresa un nombre válido usando solo letras.");
        return;
    }

    localStorage.setItem("usuarioActual", nombre);
    localStorage.setItem("nombreEmpresa", nombreEmpresa);
    localStorage.setItem("rucEmpresa", rucEmpresa);
    document.getElementById("overlayLogin").classList.remove("visible");
    mostrarSeccion('sec-inicio', document.getElementById('btnInicio'));
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    document.getElementById("txtNombreLogin").value = "";
    document.getElementById("overlayLogin").classList.add("visible");
}

function ocultarSecciones() {
    document.getElementById("sec-inicio").classList.remove("activa");
    document.getElementById("sec-simulador").classList.remove("activa");
    document.getElementById("sec-tabla").classList.remove("activa");
    document.getElementById("sec-fundamentos").classList.remove("activa");
    document.getElementById("sec-evaluacion").classList.remove("activa");
}

function mostrarSeccion(idSeccion, elementoBoton) {
    ocultarSecciones();
    document.getElementById(idSeccion).classList.add("activa");

    let enlaces = document.querySelectorAll(".barra-navegacion ul li a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].classList.remove("active");
    }

    if (elementoBoton) {
        elementoBoton.classList.add("active");
        let indicador = document.getElementById("indicadorNeon");
        indicador.style.width = elementoBoton.offsetWidth + "px";
        indicador.style.height = elementoBoton.offsetHeight + "px";
        indicador.style.left = elementoBoton.offsetLeft + "px";
        indicador.style.top = elementoBoton.offsetTop + "px";
    }
}

function abrirModalInformacion(llaveConcepto) {
    let datos = baseDatosConceptos[llaveConcepto];
    if (datos) {
        document.getElementById("tituloModal").textContent = datos.titulo;
        document.getElementById("contenidoModal").innerHTML = datos.contenido;
        document.getElementById("modalInformacion").classList.add("visible");
    }
}

function cerrarModalInformacion() {
    document.getElementById("modalInformacion").classList.remove("visible");
}

function ocultarModulosSimulador() {
    document.getElementById("formDesglose").classList.remove("activa-modulo");
    document.getElementById("formRetencion").classList.remove("activa-modulo");
    document.getElementById("formNota").classList.remove("activa-modulo");
    document.getElementById("formIntereses").classList.remove("activa-modulo");

    document.getElementById("btnModDesglose").classList.remove("activo");
    document.getElementById("btnModRetencion").classList.remove("activo");
    document.getElementById("btnModNota").classList.remove("activo");
    document.getElementById("btnPagoIntereses").classList.remove("activo");
}

function mostrarModuloSimulador(idModulo, elementoBoton) {
    ocultarModulosSimulador();
    document.getElementById(idModulo).classList.add("activa-modulo");
    elementoBoton.classList.add("activo");
}

window.onload = function () {
    let usuario = localStorage.getItem("usuarioActual");
    if (!usuario) {
        document.getElementById("overlayLogin").classList.add("visible");
    } else {
        document.getElementById("overlayLogin").classList.remove("visible");
    }

    let botonInicio = document.getElementById("btnInicio");
    mostrarSeccion("sec-inicio", botonInicio);

    pintarHistorial();
    renderizarProductos(productos);
    renderizarFactura();
    pintarEvaluaciones();
    temaSeleccionado();
    recuperarPaleta();
    pintarClientes();
}

function recuperarTxtAFloat(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = parseFloat(componente.value);
    return valor;
}

function mostrarEnSpan(idSpan, valorTexto) {
    document.getElementById(idSpan).textContent = valorTexto;
}

function guardarHistorial(tipo, base, impuesto, total) {
    let historialTexto = localStorage.getItem("datosFacturacion");
    let lista = [];
    if (historialTexto) {
        lista = JSON.parse(historialTexto);
    }

    let nuevoRegistro = {
        tipoCalculo: tipo,
        valorBase: base,
        valorImpuesto: impuesto,
        valorTotal: total
    };

    lista.push(nuevoRegistro);
    localStorage.setItem("datosFacturacion", JSON.stringify(lista));
    pintarHistorial();
}

function pintarHistorial() {
    let historialTexto = localStorage.getItem("datosFacturacion");
    let lista = [];
    if (historialTexto) {
        lista = JSON.parse(historialTexto);
    }

    let cuerpoTabla = document.getElementById("cuerpoHistorial");
    let filasHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let registro = lista[i];
        filasHTML += "<tr>";
        filasHTML += "<td>" + registro.tipoCalculo + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorBase).toFixed(2) + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorImpuesto).toFixed(2) + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorTotal).toFixed(2) + "</td>";
        filasHTML += "</tr>";
    }

    cuerpoTabla.innerHTML = filasHTML;
}

function limpiarHistorial() {
    localStorage.removeItem("datosFacturacion");
    pintarHistorial();
}

function calcularDesglose() {
    ocultarError("errDesglose");
    let total = recuperarTxtAFloat("txtTotalDesglose");
    let tasaIva = recuperarTxtAFloat("selIvaDesglose");

    if (isNaN(total) || total <= 0 || total > 100000) {
        mostrarError("errDesglose", "Por favor, ingresa un total válido mayor a 0 y hasta 100,000.");
        return;
    }

    let subtotal = total / (1 + tasaIva);
    let ivaExtraido = total - subtotal;

    mostrarEnSpan("lblDesgloseSubtotal", subtotal.toFixed(2));
    mostrarEnSpan("lblDesgloseIva", ivaExtraido.toFixed(2));
    mostrarEnSpan("lblDesgloseTotal", total.toFixed(2));

    document.getElementById("resultadoDesglose").style.display = "block";
    guardarHistorial("Desglose IVA", subtotal.toFixed(2), ivaExtraido.toFixed(2), total.toFixed(2));
}

function calcularRetencion() {
    ocultarError("errRetencion");
    let montoBase = recuperarTxtAFloat("txtMontoBase");
    let tasaRenta = recuperarTxtAFloat("selRenta");
    let tasaIvaRet = recuperarTxtAFloat("selIvaRet");

    if (isNaN(montoBase) || montoBase <= 0 || montoBase > 100000) {
        mostrarError("errRetencion", "Por favor, ingresa un monto base válido mayor a 0 y hasta 100,000.");
        return;
    }

    let retencionRenta = montoBase * tasaRenta;
    let ivaBaseFactura = montoBase * 0.15;
    let retencionIva = ivaBaseFactura * tasaIvaRet;
    let totalRetenido = retencionRenta + retencionIva;
    let netoAPagar = (montoBase + ivaBaseFactura) - totalRetenido;

    mostrarEnSpan("lblRetencionRenta", retencionRenta.toFixed(2));
    mostrarEnSpan("lblRetencionIva", retencionIva.toFixed(2));
    mostrarEnSpan("lblRetencionTotal", totalRetenido.toFixed(2));
    mostrarEnSpan("lblRetencionNeto", netoAPagar.toFixed(2));

    document.getElementById("resultadoRetencion").style.display = "block";
    guardarHistorial("Retenciones", montoBase.toFixed(2), totalRetenido.toFixed(2), netoAPagar.toFixed(2));
}

function calcularNota() {
    ocultarError("errNota");
    let valorOriginal = recuperarTxtAFloat("txtValorOriginal");
    let valorModificar = recuperarTxtAFloat("txtValorModificar");

    if (isNaN(valorOriginal) || valorOriginal <= 0 || valorOriginal > 100000 || isNaN(valorModificar) || valorModificar <= 0 || valorModificar > 100000) {
        mostrarError("errNota", "Por favor, ingresa valores válidos mayores a 0 y hasta 100,000.");
        return;
    }

    if (valorModificar > valorOriginal) {
        mostrarError("errNota", "El monto a modificar no puede ser mayor al valor original.");
        return;
    }

    let nuevoTotal = valorOriginal - valorModificar;

    mostrarEnSpan("lblNotaAjuste", valorModificar.toFixed(2));
    mostrarEnSpan("lblNotaNuevoTotal", nuevoTotal.toFixed(2));

    document.getElementById("resultadoNota").style.display = "block";
    guardarHistorial("Nota Crédito", valorOriginal.toFixed(2), valorModificar.toFixed(2), nuevoTotal.toFixed(2));
}

function calcularIntereses() {
    ocultarError("errIntereses");
    let impuesto = recuperarTxtAFloat("txtImpuestoVencido");
    let meses = recuperarTxtAFloat("txtMesesAtraso");
    let tasaInteres = recuperarTxtAFloat("txtTasaInteres");
    let tasaMulta = recuperarTxtAFloat("txtTasaMulta");

    if (isNaN(impuesto) || impuesto <= 0 || impuesto > 100000) {
        mostrarError("errIntereses", "Por favor, ingresa un impuesto vencido válido mayor a 0 y hasta 100,000.");
        return;
    }
    if (isNaN(meses) || meses <= 0 || meses > 100000) {
        mostrarError("errIntereses", "Por favor, ingresa meses de atraso válidos mayores a 0 y hasta 100,000.");
        return;
    }

    if (isNaN(tasaInteres) || tasaInteres < 0 || tasaInteres > 100) tasaInteres = 0;
    if (isNaN(tasaMulta) || tasaMulta < 0 || tasaMulta > 100) tasaMulta = 0;

    let totalInteres = impuesto * (tasaInteres / 100) * meses;
    let totalMulta = impuesto * (tasaMulta / 100) * meses;
    let totalPagar = impuesto + totalInteres + totalMulta;

    mostrarEnSpan("lblInteresGenerado", totalInteres.toFixed(2));
    mostrarEnSpan("lblMultaGenerada", totalMulta.toFixed(2));
    mostrarEnSpan("lblInteresesTotal", totalPagar.toFixed(2));

    document.getElementById("resultadoIntereses").style.display = "block";
    guardarHistorial("Intereses Mora", impuesto.toFixed(2), (totalInteres + totalMulta).toFixed(2), totalPagar.toFixed(2));
}

function renderizarProductos(productosRender) {
    let lista = document.getElementById("listaProductos");
    lista.innerHTML = "";
    for (let i = 0; i < productosRender.length; i++) {
        let producto = productosRender[i];
        let li = document.createElement("li");
        li.className = "item-producto";
        li.onclick = function () {
            seleccionarProducto(producto);
        }
        li.innerHTML = `<span class="producto-icono">${producto.icono}</span>
                <div class="producto-info">
                    <div class="producto-nombre">${producto.nombre}</div>
                    <div class="producto-categoria">${producto.categoria}</div>
                </div>
                <div style="display:flex; gap:6px; flex-shrink:0;">
                    <button type="button"
                        style="background:transparent; border:1px solid var(--tm-acento);
                               color:var(--tm-acento); border-radius:6px; padding:4px 10px;
                               font-size:0.75rem; cursor:pointer; flex-shrink:0;"
                        onclick="event.stopPropagation(); prepararEdicionProducto(${producto.id})">
                        Editar
                    </button>
                    <button type="button"
                        style="background:transparent; border:1px solid #ef4444;
                               color:#ef4444; border-radius:6px; padding:4px 10px;
                               font-size:0.75rem; cursor:pointer; flex-shrink:0;"
                        onclick="event.stopPropagation(); eliminarProducto(${producto.id})">
                        Eliminar
                    </button>
                </div>`;
        lista.appendChild(li);
    }
}

function buscarProducto() {
    let buscar = document.getElementById("txtBusquedaProducto").value.toLowerCase();
    let encontrados = [];

    for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].nombre.toLowerCase();
        let categoria = productos[i].categoria.toLowerCase();
        if (nombre.includes(buscar) || categoria.includes(buscar)) {
            encontrados.push(productos[i]);
        }
    }
    renderizarProductos(encontrados);
}

function seleccionarProducto(producto) {
    productoSeleccionado = producto;
    renderizarProductos(productos);

    document.getElementById("panelVacio").style.display = "none";
    document.getElementById("panelDetalle").style.display = "flex";

    document.getElementById("detalleNombre").textContent = producto.nombre;
    document.getElementById("detalleCategoria").textContent = producto.categoria;
    document.getElementById("detalleDescripcion").textContent = producto.descripcion;

    let impuestoAplicado = document.getElementById("detalleBadge");
    if (producto.iva === 0) {
        impuestoAplicado.textContent = "IVA = 0% - Exento";
        impuestoAplicado.className = "badge-iva badge-0";
        document.getElementById("detalleTarifa").textContent = "0%";
        document.getElementById("simLabelIva").textContent = "IVA (0%)";
    }else if(producto.iva === 0.05){
        impuestoAplicado.textContent = "IVA = 5% - Tarifa Diferenciada";
        impuestoAplicado.className = "badge-iva badge-5";
        document.getElementById("detalleTarifa").textContent = "5%";
        document.getElementById("simLabelIva").textContent = "IVA (5%)";
    }else if(producto.iva === 0.08){
        impuestoAplicado.textContent = "IVA = 8% - Tarifa Diferenciada";
        impuestoAplicado.className = "badge-iva badge-8";
        document.getElementById("detalleTarifa").textContent = "8%";
        document.getElementById("simLabelIva").textContent = "IVA (8%)";
    } else {
        impuestoAplicado.textContent = "IVA = 15% - Tarifa General";
        impuestoAplicado.className = "badge-iva badge-15";
        document.getElementById("detalleTarifa").textContent = "15%";
        document.getElementById("simLabelIva").textContent = "IVA (15%)";
    }

    document.getElementById("detallePrecio").value = "";
    document.getElementById("detalleCantidad").value = "1";

    actualizarSimulacion(0, 1, producto.iva);
    ocultarError("errDetalleProducto");
}

function actualizarSimulacion(precio, cantidad, tasaIva) {
    let subtotal = precio * cantidad;
    let iva = subtotal * tasaIva;
    let total = subtotal + iva;

    document.getElementById("simSubtotal").textContent = '$' + subtotal.toFixed(2);
    document.getElementById("simIva").textContent = '$' + iva.toFixed(2);
    document.getElementById("simTotal").textContent = '$' + total.toFixed(2);
}

function simularDetallesDelProducto() {
    if (productoSeleccionado == null) {
        return;
    }
    let precio = parseFloat(document.getElementById("detallePrecio").value);
    let cantidad = parseFloat(document.getElementById("detalleCantidad").value);

    if (isNaN(precio) || precio < 0 || precio > 100000) { precio = 0; }
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 100000) { cantidad = 1; }

    actualizarSimulacion(precio, cantidad, productoSeleccionado.iva);
}

function agregarAFactura() {
    ocultarError("errDetalleProducto");

    if (productoSeleccionado == null) {
        mostrarError("errDetalleProducto", "Por favor selecciona un producto del catálogo primero.");
        return;
    }

    let precio = parseFloat(document.getElementById("detallePrecio").value);
    let cantidad = parseFloat(document.getElementById("detalleCantidad").value);

    if (isNaN(precio) || precio <= 0 || precio > 100000) {
        mostrarError("errDetalleProducto", "Por favor ingresa un precio válido mayor a 0 y hasta 100,000.");
        return;
    }
    if (isNaN(cantidad) || cantidad <= 0 || cantidad > 100000) {
        mostrarError("errDetalleProducto", "Por favor ingresa una cantidad válida mayor a 0 y hasta 100,000.");
        return;
    }

    let subtotal = precio * cantidad;

    let itemFactura = {
        id: new Date().getTime(),
        nombre: productoSeleccionado.nombre,
        cantidad: cantidad,
        precio: precio,
        subtotal: subtotal,
        tasaIva: productoSeleccionado.iva
    };

    carritoFactura.push(itemFactura);
    renderizarFactura();

    document.getElementById("detallePrecio").value = "";
    document.getElementById("detalleCantidad").value = "1";
    document.getElementById("simSubtotal").textContent = "$0.00";
    document.getElementById("simIva").textContent = "$0.00";
    document.getElementById("simTotal").textContent = "$0.00";
}

function eliminarDeFactura(idItem) {
    let nuevoCarrito = [];
    for (let i = 0; i < carritoFactura.length; i++) {
        if (carritoFactura[i].id !== idItem) {
            nuevoCarrito.push(carritoFactura[i]);
        }
    }
    carritoFactura = nuevoCarrito;
    renderizarFactura();
}

function renderizarFactura() {
    let cuerpoFactura = document.getElementById("cuerpoFactura");
    cuerpoFactura.innerHTML = "";

    let subtotal15 = 0;
    let subtotal8 = 0;
    let subtotal0 = 0;
    let subtotal5 = 0

    for (let i = 0; i < carritoFactura.length; i++) {
        let item = carritoFactura[i];
        if(item.tasaIva === 0.05){
            subtotal5 += item.subtotal
        }else if(item.tasaIva === 0.08){
            subtotal8 += item.subtotal
        }else if (item.tasaIva > 0) {
            subtotal15 += item.subtotal;
        } else {
            subtotal0 += item.subtotal;
        }

        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.cantidad}</td>
            <td style="max-width: 130px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${item.nombre}">${item.nombre}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>$${item.subtotal.toFixed(2)}</td>
            <td><button type="button" class="btn-eliminar-item" onclick="eliminarDeFactura(${item.id})">X</button></td>
        `;
        cuerpoFactura.appendChild(fila);
    }

    let ivaCalculado = (subtotal15 * 0.15) + (subtotal8 * 0.08) + (subtotal5 * 0.05);
    let totalGeneral = subtotal15 + subtotal8 + subtotal5 + subtotal0 + ivaCalculado;

    document.getElementById("facSubtotal15").textContent = "$" + subtotal15.toFixed(2);
    document.getElementById("facSubtotal0").textContent = "$" + subtotal0.toFixed(2);
    document.getElementById("facIva").textContent = "$" + ivaCalculado.toFixed(2);
    document.getElementById("facTotal").textContent = "$" + totalGeneral.toFixed(2);
}

function calificarEvaluacion() {
    ocultarError("errEvaluacion");

    let p1 = document.querySelector('input[name="preg1"]:checked');
    let p2 = document.querySelector('input[name="preg2"]:checked');
    let p3 = document.querySelector('input[name="preg3"]:checked');
    let p4 = document.querySelector('input[name="preg4"]:checked');
    let p5 = document.querySelector('input[name="preg5"]:checked');

    if (!p1 || !p2 || !p3 || !p4 || !p5) {
        mostrarError("errEvaluacion", "Por favor, responde las 5 preguntas obligatorias para procesar la evaluación.");
        return;
    }

    let nota = 0;
    if (p1.value === "15") nota += 20;
    if (p2.value === "base") nota += 20;
    if (p3.value === "electronica") nota += 20;
    if (p4.value === "agente") nota += 20;
    if (p5.value === "0") nota += 20;

    let resena = document.getElementById("txtResena").value.trim();
    if (resena === "") {
        resena = "Sin comentarios registrados.";
    }

    let usuario = localStorage.getItem("usuarioActual");
    if (!usuario || usuario === "") {
        mostrarError("errEvaluacion", "Error de sesión. Debes identificarte al inicio para realizar la prueba.");
        return;
    }

    mostrarEnSpan("lblNotaFinal", nota + " / 100");
    document.getElementById("resultadoEvaluacion").style.display = "block";

    guardarEvaluacion(usuario, nota, resena);
}

function guardarEvaluacion(usuario, nota, resena) {
    let evaluaciones = localStorage.getItem("datosEvaluaciones");
    let lista = [];
    if (evaluaciones) {
        lista = JSON.parse(evaluaciones);
    }

    let nuevoRegistro = {
        usuario: usuario,
        nota: nota,
        resena: resena
    };

    lista.push(nuevoRegistro);
    localStorage.setItem("datosEvaluaciones", JSON.stringify(lista));
    pintarEvaluaciones();
}

function pintarEvaluaciones() {
    let evaluaciones = localStorage.getItem("datosEvaluaciones");
    let lista = [];
    if (evaluaciones) {
        lista = JSON.parse(evaluaciones);
    }

    let cuerpoTabla = document.getElementById("cuerpoEvaluaciones");
    if (cuerpoTabla) {
        let filasHTML = "";
        for (let i = 0; i < lista.length; i++) {
            let registro = lista[i];
            filasHTML += "<tr>";
            filasHTML += "<td>" + registro.usuario + "</td>";
            filasHTML += "<td><span class='texto-brillante'>" + registro.nota + " / 100</span></td>";
            filasHTML += "<td>" + registro.resena + "</td>";
            filasHTML += "</tr>";
        }
        cuerpoTabla.innerHTML = filasHTML;
    }
}

function cambiarTema() {
    temaClaro = !temaClaro

    for (let i = 0; i < configuracionTema.length; i++) {
        let entrada = configuracionTema[i];

        let valorElegido;
        if (temaClaro) {
            valorElegido = entrada.claro
        } else {
            valorElegido = entrada.oscuro
        }
        document.documentElement.style.setProperty(entrada.variable, valorElegido);
    }
    let boton = document.getElementById("btnTema");
    if (temaClaro) {
        boton.innerHTML = '&#9728;';
    } else {
        boton.innerHTML = '&#9790;';
    }
    if (temaClaro) {
        localStorage.setItem('temaPreferido', 'claro');
    } else {
        localStorage.setItem('temaPreferido', 'oscuro');
    }
}

function temaSeleccionado() {
    let temaEscogido = localStorage.getItem('temaPreferido');
    if (temaEscogido === 'claro') {
        cambiarTema();
    }
}

function guardarProducto() {
    ocultarError("errProducto");

    let nombre = document.getElementById("txtNombreProducto").value.trim();
    let iva = parseFloat(document.getElementById("selIvaProducto").value);

    if (nombre === "") {
        mostrarError("errProducto", "Por favor, ingrese el nombre del producto.");
        return;
    }

    // Validación de nombre duplicado
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            // Si estamos editando ese mismo producto, no es duplicado
            if (productos[i].id !== productoEditandoId) {
                mostrarError("errProducto", "Ya existe un producto con ese nombre.");
                return;
            }
        }
    }

    if (productoEditandoId !== null) {
        // MODO EDITAR: solo cambia el IVA
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === productoEditandoId) {
                productos[i].iva = iva;
            }
        }
        productoEditandoId = null;
    } else {
        // MODO AGREGAR: buscar el id más alto
        let maxId = 0;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id > maxId) {
                maxId = productos[i].id;
            }
        }
        let nuevoProducto = {
            id: maxId + 1,
            nombre: nombre,
            categoria: "Personalizado",
            icono: "·",
            iva: iva,
            descripcion: "Producto agregado manualmente al catálogo."
        };
        productos.push(nuevoProducto);
    }

    document.getElementById("txtNombreProducto").value = "";
    document.getElementById("selIvaProducto").value = "0";

    renderizarProductos(productos);
}

function prepararEdicionProducto(id) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            document.getElementById("txtNombreProducto").value = productos[i].nombre;
            document.getElementById("selIvaProducto").value = productos[i].iva;
            productoEditandoId = id;
        }
    }
}

function eliminarProducto(id) {
    let confirmar = confirm("¿Seguro que deseas eliminar este producto del catálogo?");
    if (!confirmar) {
        return;
    }

    let nuevaLista = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id !== id) {
            nuevaLista.push(productos[i]);
        }
    }
    productos.length = 0;
    for (let i = 0; i < nuevaLista.length; i++) {
        productos.push(nuevaLista[i]);
    }

    if (productoEditandoId === id) {
        productoEditandoId = null;
        document.getElementById("txtNombreProducto").value = "";
        document.getElementById("selIvaProducto").value = "0";
    }

    if (productoSeleccionado !== null && productoSeleccionado.id === id) {
        productoSeleccionado = null;
        document.getElementById("panelDetalle").style.display = "none";
        document.getElementById("panelVacio").style.display = "flex";
    }

    let buscar = document.getElementById("txtBusquedaProducto").value.toLowerCase();
    if (buscar !== "") {
        buscarProducto();
    } else {
        renderizarProductos(productos);
    }
}

function actualizarClienteEnFactura() {
    let nombre = document.getElementById("txtClienteNombreDetalle").value.trim();
    let correo = document.getElementById("txtClienteCorreoDetalle").value.trim();
    let cedula = document.getElementById("txtClienteCedulaDetalle").value.trim();

    let spanNombre = document.getElementById("facClienteNombre");
    let spanCorreo = document.getElementById("facClienteCorreo");
    let spanCedula = document.getElementById("facClienteCedula");

    if (spanNombre === "") {
        spanNombre.textContent = "—";
    } else {
        spanNombre.textContent = nombre;
    }

    if (spanCorreo === "") {
        spanCorreo.textContent = "—";
    } else {
        spanCorreo.textContent = correo;
    }

    if (spanCedula === "") {
        spanCedula.textContent = "—";
    } else {
        spanCedula.textContent = cedula
    }

    if (nombre !== "" && cedula !== "") {
        clienteActual = {
            nombre: nombre,
            correo: correo,
            cedula: cedula
        };
    } else {
        clienteActual = null
    }
}

function generarFacturaCliente() {
    ocultarError("errGuardarFactura");

    if (clienteActual === null) {
        mostrarError("errGuardarFactura", "Ingresa el nombre y cédula del cliente antes de guardar");
        return;
    }
    if (carritoFactura.length === 0) {
        mostrarError("errGuardarFactura", "La factura está vacía. Agregar productos primero");
        return;
    }

    let texto = localStorage.getItem("datosClientes");
    let lista = [];

    if (texto) {
        lista = JSON.parse(texto);
    }

    let indiceCliente = -1;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula === clienteActual.cedula) {
            indiceCliente = i;
        }
    }

    let sub15 = 0;
    let sub0 = 0;

    for (let j = 0; j < carritoFactura.length; j++) {
        if (carritoFactura[j].tasaIva > 0) {
            sub15 += carritoFactura[j].subtotal;
        } else {
            sub0 += carritoFactura[j].subtotal;
        }
    }
    let ivaCalc = parseFloat((sub15 * 0.15).toFixed(2));
    let totalCalc = parseFloat((sub15 + sub0 + ivaCalc).toFixed(2));

    if (indiceCliente === -1) {
        let maxId = 0;
        for (let k = 0; k < lista.length; k++) {
            if (lista[k].idCliente > maxId) {
                maxId = lista[k].idCliente;
            }
        }
        let nuevoCliente = {
            idCliente: maxId + 1,
            nombre: clienteActual.nombre,
            correo: clienteActual.correo,
            cedula: clienteActual.cedula,
            facturas: []
        };
        lista.push(nuevoCliente);
        indiceCliente = lista.length - 1;
    }
    let maxIdFac = 0;
    //validación defensiva para evitar posible error
    if (!lista[indiceCliente].facturas) {
        lista[indiceCliente].facturas = [];
    }

    for (let m = 0; m < lista[indiceCliente].facturas.length; m++) {
        if (lista[indiceCliente].facturas[m].idFactura > maxIdFac) {
            maxIdFac = lista[indiceCliente].facturas[m].idFactura;
        }
    }
    let nuevaFactura = {
        idFactura: maxIdFac + 1,
        items: [...carritoFactura],
        subtotal15: sub15,
        subtotal0: sub0,
        iva: ivaCalc,
        total: totalCalc
    };

    facturaActualPDF = nuevaFactura;

    lista[indiceCliente].facturas.push(nuevaFactura);
    localStorage.setItem("datosClientes", JSON.stringify(lista));

    carritoFactura = [];
    clienteActual = null;
    renderizarFactura();

    document.getElementById("txtClienteNombreDetalle").value = "";
    document.getElementById("txtClienteCorreoDetalle").value = "";
    document.getElementById("txtClienteCedulaDetalle").value = "";
    document.getElementById('facClienteNombre').textContent = '—';
    document.getElementById('facClienteCorreo').textContent = '—';
    document.getElementById('facClienteCedula').textContent = '—';

    pintarClientes();
    abrirModalDescargarFactura();
}

function pintarClientes() {
    let texto = localStorage.getItem("datosClientes");
    let lista = [];
    if (texto) {
        lista = JSON.parse(texto);
    }
    let cuerpo = document.getElementById("cuerpoClientes");
    if (!cuerpo) {
        return;
    }

    let filasHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let c = lista[i];
        filasHTML += '<tr>';
        filasHTML += '<td>' + c.idCliente + '</td>';
        filasHTML += '<td>' + c.cedula + '</td>';
        filasHTML += '<td>' + c.nombre + '</td>';
        filasHTML += '<td>';
        filasHTML += '<button type="button" class="boton-primario"';
        filasHTML += ' style="padding:6px 18px;font-size:0.82rem;width:auto;"';
        filasHTML += ' onclick="verFacturasCliente(' + c.idCliente + ')">';
        filasHTML += 'Ver Detalles</button>';
        filasHTML += ' <button type="button"';
        filasHTML += ' style="background:transparent; border:1px solid #ef4444; color:#ef4444;';
        filasHTML += ' border-radius:8px; padding:6px 14px; font-size:0.8rem; cursor:pointer; margin-left:8px;"';
        filasHTML += ' onclick="eliminarCliente(' + c.idCliente + ')">';
        filasHTML += 'Eliminar</button>';
        filasHTML += '</td>';
        filasHTML += '</tr>';
    }
    cuerpo.innerHTML = filasHTML;
}

function eliminarCliente(idCliente) {
    let confirmar = confirm("¿Seguro que deseas eliminar este cliente y todas sus facturas?");
    if (!confirmar) {
        return;
    }

    let texto = localStorage.getItem("datosClientes");
    let lista = [];
    if (texto) {
        lista = JSON.parse(texto);
    }

    let nuevaLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].idCliente !== idCliente) {
            nuevaLista.push(lista[i]);
        }
    }

    localStorage.setItem("datosClientes", JSON.stringify(nuevaLista));
    pintarClientes();
}

function verFacturasCliente(idCliente) {
    let texto = localStorage.getItem("datosClientes");
    let lista = [];
    if (texto) {
        lista = JSON.parse(texto);
    }

    let cliente = null;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].idCliente === idCliente) {
            cliente = lista[i]
        }
    }
    if (!cliente) {
        return;
    }
    let html = '<p><strong>Nombre:</strong> ' + cliente.nombre + '</p>';
    html += '<p><strong>Cédula:</strong> ' + cliente.cedula + '</p>';
    html += '<hr style="margin:15px 0; border-color:rgba(0,200,215,0.3);">';

    if (cliente.facturas.length === 0) {
        html += '<p>Este cliente no tiene facturas guardadas.</p>';
    } else {
        html += '<table style="width:100%; border-collapse:collapse;">';
        html += '<tr>';
        html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">Num. Factura</th>';
        html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">Acciones</th>';
        html += '</tr>';
        for (let i = 0; i < cliente.facturas.length; i++) {
            let f = cliente.facturas[i];
            html += '<tr>';
            html += '<td style="padding:8px;">' + f.idFactura + '</td>';
            html += '<td style="padding:8px;">';
            html += '<button type="button" class="boton-primario"';
            html += ' style="padding:6px 14px; font-size:0.8rem; width:auto;"';
            html += ' onclick="abrirDetalleFactura(' + idCliente + ',' + i + ')">';
            html += 'Ver Detalles</button>';
            html += ' <button type="button"';
            html += ' style="background:transparent; border:1px solid #ef4444; color:#ef4444;';
            html += ' border-radius:8px; padding:6px 14px; font-size:0.8rem; cursor:pointer; margin-left:8px;"';
            html += ' onclick="eliminarFacturaCliente(' + idCliente + ',' + i + ')">';
            html += 'Eliminar</button>';
            html += '</td>';
            html += '</tr>';
        }
        html += '</table>';
    }
    document.getElementById("contenidoModalFacturas").innerHTML = html;
    document.getElementById("modalFacturasCliente").classList.add("visible")
}

function cerrarModalFacturasCliente() {
    document.getElementById("modalFacturasCliente").classList.remove("visible");
}

function abrirDetalleFactura(idCliente, indice) {
    let texto = localStorage.getItem("datosClientes");
    let lista = [];
    if (texto) {
        lista = JSON.parse(texto);
    }

    let cliente = null;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].idCliente === idCliente) {
            cliente = lista[i];
        }
    }
    if (!cliente) {
        return;
    }
    let factura = cliente.facturas[indice];

    if (!factura) {
        return;
    }

    facturaActualPDF = factura;
    document.getElementById("tituloModalDetalle").textContent = "Factura " + factura.idFactura;

    let html = '<table style="width:100%; border-collapse:collapse; font-size:0.9rem;">';
    html += '<tr>';
    html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">Cant.</th>';
    html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">Detalle</th>';
    html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">V. Unit</th>';
    html += '<th style="text-align:left; padding:8px; color:var(--tm-acento);">V. Total</th>';
    html += '</tr>';

    for (let i = 0; i < factura.items.length; i++) {
        let item = factura.items[i];
        html += '<tr>';
        html += '<td style="padding:8px;">' + item.cantidad + '</td>';
        html += '<td style="padding:8px;">' + item.nombre + '</td>';
        html += '<td style="padding:8px;">$' + item.precio.toFixed(2) + '</td>';
        html += '<td style="padding:8px;">$' + item.subtotal.toFixed(2) + '</td>';
        html += '</tr>';
    }
    html += '</table>';
    html += '<hr style="margin:12px 0; border-color:rgba(0,200,215,0.3);">';
    html += '<p style="text-align:right;">Subtotal Gravado (15%): $' + factura.subtotal15.toFixed(2) + '</p>';
    html += '<p style="text-align:right;">Subtotal Exento (0%): $' + factura.subtotal8.toFixed(2) + '</p>';
    html += '<p style="text-align:right;">Subtotal Exento (0%): $' + factura.subtotal5.toFixed(2) + '</p>';
    html += '<p style="text-align:right;">Subtotal Exento (0%): $' + factura.subtotal0.toFixed(2) + '</p>';
    html += '<p style="text-align:right;">IVA Calculado (15%): $' + factura.iva.toFixed(2) + '</p>';
    html += '<p style="text-align:right; font-weight:700; color:var(--tm-acento);" > TOTAL GENERAL: $' + factura.total.toFixed(2) + '</p > ';
    html += '<button class="boton-primario" onclick="exportarFacturaPDF()">Exportar</button>'

    document.getElementById("contenidoModalDetalle").innerHTML = html;
    document.getElementById("modalDetalleFactura").classList.add("visible");
}

function cerrarModalDetalleFactura() {
    document.getElementById("modalDetalleFactura").classList.remove("visible")
}

function eliminarFacturaCliente(idCliente, indice) {
    let confirmar = confirm("¿Seguro que quiere eliminar esta factura?");
    if (!confirmar) {
        return;
    }

    let texto = localStorage.getItem("datosClientes");
    let lista = [];

    if (texto) {
        lista = JSON.parse(texto)
    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].idCliente === idCliente) {
            lista[i].facturas.splice(indice, 1);
            break;
        }
    }

    localStorage.setItem("datosClientes", JSON.stringify(lista));
    verFacturasCliente(idCliente)
}

function exportarFacturaPDF() {

    if (facturaActualPDF == null) {
        alert("No existe una factura para exportar.");
        return;
    }

    document.getElementById("facFecha").textContent = new Date().toLocaleDateString();

    document.getElementById("cuerpoFactura").innerHTML = "";

    for (let i = 0; i < facturaActualPDF.items.length; i++) {

        let item = facturaActualPDF.items[i];

        document.getElementById("cuerpoFactura").innerHTML += `
            <tr>
                <td>${item.cantidad}</td>
                <td>${item.nombre}</td>
                <td>$${item.precio.toFixed(2)}</td>
                <td>$${item.subtotal.toFixed(2)}</td>
                <td></td>
            </tr>
        `;
    }

    document.getElementById("facSubtotal15").textContent =
        "$" + facturaActualPDF.subtotal15.toFixed(2);

    document.getElementById("facSubtotal0").textContent =
        "$" + facturaActualPDF.subtotal0.toFixed(2);

    document.getElementById("facIva").textContent =
        "$" + facturaActualPDF.iva.toFixed(2);

    document.getElementById("facTotal").textContent =
        "$" + facturaActualPDF.total.toFixed(2);

    const element = document.querySelector(".tarjeta-factura");

    const opt = {
        margin: 10,
        filename: "Factura_SRI.pdf",
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf().set(opt).from(element).save();
}

// Para personalizar el nombre de la empresa al iniciar
function setearDatosEmpresa(nombre, ruc) {
    document.getElementById("facEmpresa").textContent = nombre;
    document.getElementById("facRuc").textContent = ruc;
}

function cerrarModalDescargarFactura() {
    document.getElementById("modalDescargarFactura").classList.remove("visible")
}

function abrirModalDescargarFactura() {
    document.getElementById("modalDescargarFactura").classList.add("visible")
}

function toggleSectionEmpresaLogin() {
    let checkEmpresa = document.getElementById("esEmpresa");
    let sectionEmpresa = document.getElementById("sectionEmpresaLogin");

    if (checkEmpresa.checked) {
        sectionEmpresa.style.display = "block";
    } else {
        sectionEmpresa.style.display = "none";
    }
}

function buscarCedula() {
    let buscar = document.getElementById("txtBusquedaCliente").value.toLowerCase();

    let texto = localStorage.getItem("datosClientes");
    let lista = [];
    if (texto) {
        lista = JSON.parse(texto);
    }

    let encontrados = [];
    for (let i = 0; i < lista.length; i++) {
        let cedula = lista[i].cedula.toLowerCase();
        if (cedula.includes(buscar)) {
            encontrados.push(lista[i]);
        }
    }

    let cuerpo = document.getElementById("cuerpoClientes");
    if (!cuerpo) { return; }

    let filasHTML = "";
    for (let i = 0; i < encontrados.length; i++) {
        let c = encontrados[i];
        filasHTML += '<tr>';
        filasHTML += '<td>' + c.idCliente + '</td>';
        filasHTML += '<td>' + c.cedula + '</td>';
        filasHTML += '<td>' + c.nombre + '</td>';
        filasHTML += '<td>';
        filasHTML += '<button type="button" class="boton-primario"';
        filasHTML += ' style="padding:6px 18px;font-size:0.82rem;width:auto;"';
        filasHTML += ' onclick="verFacturasCliente(' + c.idCliente + ')">';
        filasHTML += 'Ver Detalles</button>';
        filasHTML += ' <button type="button"';
        filasHTML += ' style="background:transparent; border:1px solid #ef4444; color:#ef4444;';
        filasHTML += ' border-radius:8px; padding:6px 14px; font-size:0.8rem; cursor:pointer; margin-left:8px;"';
        filasHTML += ' onclick="eliminarCliente(' + c.idCliente + ')">';
        filasHTML += 'Eliminar</button>';
        filasHTML += '</td>';
        filasHTML += '</tr>';
    }
    cuerpo.innerHTML = filasHTML;
}