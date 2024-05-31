"use client"
export default function TermsPage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(ellipse_90%_65%_at_left,_var(--tw-gradient-stops))] from-primary/40 from-10% via-[#0f041a] via-60% to-black to-90%">
      {/* Encabezado */}
      <div className="w-screen h-32 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Términos y Condiciones
        </h1>
      </div>

      <div className="h-8"></div>

      <div className="max-w-2xl mx-auto p-8 bg-gray-950 rounded-xl mb-16">
        {/* Sección de Términos de Uso */}

        <div className="h-4"></div>

        <div
          className="textTerm text-lg leading-relaxed"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {/* Ajuste de tamaño y espacio del texto */}
          <p className="text-white text-left italic">
            Fecha de vigencia: 31 de Mayo de 2024
          </p>
          <div className="h-6"></div>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              1. Aceptación de los Términos:
            </span>{" "}
            Al utilizar los servicios de Asisteser, aceptas los presentes Términos
            en su totalidad. Si no estás de acuerdo con alguno de los términos,
            te instamos a que no utilices nuestros servicios.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              2. Modificaciones de los Términos:
            </span>{" "}
            Asisteser se reserva el derecho de modificar estos Términos en
            cualquier momento. Las modificaciones entrarán en vigencia
            inmediatamente después de su publicación. Es responsabilidad del
            usuario revisar periódicamente estos Términos para estar informado
            de cualquier cambio. El uso continuado de nuestros servicios después
            de la publicación de cambios constituye la aceptación de dichos
            cambios.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              3. Leyes y Regulaciones Aplicables:
            </span>{" "}
            El uso de Asisteser debe cumplir con todas las leyes y regulaciones
            aplicables en Perú. Asisteser se reserva el derecho de modificar,
            restringir o poner fin a tus servicios si se determina que tu
            conducta viola las leyes peruanas.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">4. Privacidad:</span> La
            privacidad de los usuarios es una prioridad para Asisteser. Nuestra
            Política de Privacidad describe cómo recopilamos, utilizamos y
            protegemos la información personal. Al utilizar nuestros servicios,
            aceptas las prácticas descritas en dicha política.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              5. Protección de la Privacidad Infantil:
            </span>{" "}
            Asisteser cumple con la Ley de Protección de la Privacidad Infantil en
            Línea (COPPA). Los usuarios menores de 16 años no están autorizados
            a utilizar los servicios de Asisteser.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              6. Seguridad y Responsabilidad del Usuario:
            </span>{" "}
            Asisteser implementa medidas de seguridad razonables, pero no se hace
            responsable de filtraciones o alteraciones de seguridad que resulten
            de la negligencia del usuario. Es responsabilidad del usuario
            proteger sus credenciales de acceso.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              7. Conexión entre Clientes y Personal de Salud:
            </span>{" "}
            Asisteser actúa como facilitador en la conexión entre clientes y
            personal de salud. No garantizamos la calidad de los servicios
            proporcionados por el personal de salud. Asisteser no es parte de acuerdos
            externos entre clientes y el personal de salud.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              8. Ley Aplicable y Jurisdicción:
            </span>{" "}
            Estos Términos se rigen por las leyes de la República del Perú.
            Cualquier disputa que surja de estos Términos estará sujeta a la
            jurisdicción exclusiva de los tribunales peruanos.
          </p>

          <p className="text-white text-left mb-3">
            <span className="text-yellow-400 font-bold">
              9. Rescisión del Servicio:
            </span>{" "}
            Asisteser se reserva el derecho de rescindir o suspender tu acceso a
            los servicios en cualquier momento, por cualquier motivo, sin previo
            aviso.
          </p>

          <p className="text-white text-left mb-3">
            Al utilizar los servicios de Asisteser, aceptas estos Términos y
            condiciones. Te instamos a revisarlos regularmente para estar al
            tanto de cualquier actualización. Si tienes alguna pregunta,
            contáctanos a{" "}
            <a href="mailto:soporte@asisteser.pe" className="text-primary">soporte@asisteser.pe</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
