export const homeContent = {
  es: {
    about: {
      label: 'SOBRE SNOWARE',
      title: 'Tecnología que se adapta a tu negocio',
      description: 'Desarrollamos, conectamos y mejoramos sistemas para ayudar a las empresas a optimizar sus operaciones y crecer.',
      link: 'Conoce Snoware',
    },
    services: {
      titleLead: 'Nuestros',
      titleAccent: 'servicios',
      description: 'Impulsamos la evolución de tu negocio con soluciones tecnológicas que modernizan tus sistemas, digitalizan tus procesos e integran toda tu operación.',
      link: 'Conoce más',
      previous: 'Servicios anteriores',
      next: 'Servicios siguientes',
      range: (first, last, total) => `${first === last ? first : `${first}–${last}`} de ${total}`,
      showRange: (range) => `Mostrar ${range}`,
      items: [
        {
          title: 'Mejora y modernización de sistemas',
          description: 'Evolucionamos tus plataformas para que sean más seguras, eficientes, escalables y alineadas con las necesidades actuales de tu negocio.',
        },
        {
          title: 'Digitalización y automatización de procesos',
          description: 'Transformamos tus procesos en flujos digitales inteligentes, reduciendo tiempos, errores y costos, y aumentando la productividad de tu equipo.',
        },
        {
          title: 'Integración de sistemas',
          description: 'Conectamos tus aplicaciones, datos y plataformas para lograr una operación unificada, con información consistente y mayor visibilidad del negocio.',
        },
        {
          title: 'Desarrollo de software a la medida',
          description: 'Creamos soluciones personalizadas que se adaptan a tus procesos, objetivos y necesidades de negocio.',
        },
        {
          title: 'Soluciones en la nube',
          description: 'Llevamos tu operación a la nube para que sea más flexible, segura y escalable.',
        },
        {
          title: 'Inteligencia artificial aplicada',
          description: 'Implementamos IA en tus procesos para aumentar la eficiencia, agilizar decisiones y generar más valor.',
        },
        {
          title: 'Seguridad de la información y control de accesos',
          description: 'Protegemos tus datos y recursos con soluciones de seguridad robustas y gestión eficiente de accesos.',
        },
        {
          title: 'Mantenimiento y soporte',
          description: 'Aseguramos la continuidad de tus sistemas con soporte especializado, monitoreo proactivo y mantenimiento preventivo.',
        },
      ],
    },
  },
  en: {
    about: {
      label: 'ABOUT SNOWARE',
      title: 'Technology built around your business',
      description: 'We develop, connect and improve systems to help businesses streamline operations and grow.',
      link: 'Meet Snoware',
    },
    services: {
      titleLead: 'Our',
      titleAccent: 'services',
      description: 'Move your business forward with technology that modernizes your systems, digitizes your processes and connects your operations.',
      link: 'Learn more',
      previous: 'Previous services',
      next: 'Next services',
      range: (first, last, total) => `${first === last ? first : `${first}–${last}`} of ${total}`,
      showRange: (range) => `Show ${range}`,
      items: [
        {
          title: 'System improvement and modernization',
          description: 'We improve and modernize your platforms to make them more secure, efficient and scalable, in line with your business needs.',
        },
        {
          title: 'Process digitization and automation',
          description: 'We turn your processes into intelligent digital workflows that reduce time, errors and costs while improving team productivity.',
        },
        {
          title: 'System integration',
          description: 'We connect your applications, data and platforms to bring operations together, with consistent information and better business visibility.',
        },
        {
          title: 'Custom software development',
          description: 'We build tailored solutions around your processes, goals and business needs.',
        },
        {
          title: 'Cloud solutions',
          description: 'We move your operations to the cloud for greater flexibility, security and scalability.',
        },
        {
          title: 'Applied artificial intelligence',
          description: 'We integrate AI into your processes to improve efficiency, support faster decisions and create more value.',
        },
        {
          title: 'Information security and access control',
          description: 'We protect your data and resources with robust security solutions and effective access management.',
        },
        {
          title: 'Maintenance and support',
          description: 'We help keep your systems running with specialist support, proactive monitoring and preventive maintenance.',
        },
      ],
    },
  },
};
