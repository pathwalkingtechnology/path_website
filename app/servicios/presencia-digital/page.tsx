import Image from 'next/image';

const PresenciaDigital = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Presencia Digital</h1>
      <Image src="/presencia-digital.jpg" alt="Presencia Digital" width={800} height={600} />
      <p>Desarrollamos sitios web personalizados y responsivos.</p>
      {/* Agrega más contenido y secciones según sea necesario */}
    </div>
  );
};

export default PresenciaDigital;
