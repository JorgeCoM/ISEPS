import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

export const BreadCrumbComponent = () => {
  const location = useLocation();

  const labelMap = {
    "": 'Inicio',
    course: 'Cursos',
    about: 'Acerca de',
    calendar: 'Calendario',
    contact: 'Contacto',
    settings: 'Configuración',
    news: 'Noticias',
    mision: 'Misión',
    values: 'Valores',
    vision: 'Visión'
  };

  const breadCumbItemTemplate = (item, options) => {
    if (item.label === items[items.length - 1].label) {
      return <span className={options.className}>{item.label}</span>;
    }

    return (
      <a href={item.url} className={options.className}>
        {item.label}
      </a>
    );
  };

  const [courseTitle, setCourseTitle] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    setCourseTitle(title ? title : '');
  }, [location.search]);

  const pathnames = location.pathname === '/' ? [''] : location.pathname.split('/').filter(x => x);

  const items = pathnames.map((value, index) => {
    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
    let label = labelMap[value] || 'Inicio';

    if (value === 'info') {
      label = `${courseTitle}`;
    }

    return {
      label,
      url: url,
      template: breadCumbItemTemplate
    };
  });

  const home = { url: '/' };

  return (
    <BreadCrumb
      style={{
        backgroundColor: 'rgb(229 231 235 / 1',
        height: '50px',
        display: 'flex',
      }}
      model={items}
      home={home}
    />
  );
};
