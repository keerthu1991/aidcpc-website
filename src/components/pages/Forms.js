import React from 'react';
import Hero from '../common/Hero';
import Download from '../common/Download';
import { downloadForm, heroForm } from '../../utilities/formstrings';

export default function Forms() {
  return (
    <div>
      <Hero name={heroForm} />
      {downloadForm.map((form, idx) => {
        return (
          <Download
            title={form.title}
            description={form.description}
            pdf={form.pdf}
            image={form.image}
            buttonname={form.buttonname}
          />
        );
      })}
    </div>
  );
}
