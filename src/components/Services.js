import React from 'react';
import { Title } from './Title';
import { services } from '../Data';

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title={'our'} subtitle={'services'} />
      <div className="section-center services-center">
        {services.map((service) => {
          const { icon, text, title } = service;
          return (
            <article className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
