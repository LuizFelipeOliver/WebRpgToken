import React, { useState } from 'react';

function AttributeInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

function SkillItem({ name, bonus }) {
  return (
    <div>
      <span>{name}:</span>
      <span>{bonus}</span>
    </div>
  );
}

function RPGFicha() {
  const [attributes, setAttributes] = useState({
    For: 10,
    Des: 10,
    Cons: 10,
    Int: 10,
    Sab: 10,
    Car: 10,
  });

  const [skills, setSkills] = useState({
    stunts:{name: 'Acrobacia', attribute: 'Des', baseValue: 0},
    training: { name: 'Adestramento', attribute: 'Car', baseValue: 0 },
    athletics: { name: 'Atletismo', attribute: 'For', baseValue: 0 },
    acting: { name: 'Atuação', attribute: 'Car', baseValue: 0 },
    ride: { name: 'Cavalgar', attribute: 'Des', baseValue: 0 },
    knowledge: { name: 'Conhecimento', attribute: 'Int', baseValue: 0 },
    persuasion: { name: 'Persuasão', attribute: 'Car', baseValue: 0 },

    //adicionar mais pericias
  });

  const updateAttribute = (attribute, value) => {
    setAttributes(prevState => ({
      ...prevState,
      [attribute]: value
    }));
  };

  const calculateSkillBonus = (skill) => {
    const { attribute, baseValue } = skills[skill];
    return attributes[attribute] + baseValue;
  };

  return (
    <div className="rpg-ficha">
      <h1>Ficha de Personagem</h1>
      <div>
        <h2>Atributos</h2>
        {Object.entries(attributes).map(([attribute, value]) => (
          <AttributeInput
            key={attribute}
            label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
            value={value}
            onChange={(e) => updateAttribute(attribute, parseInt(e.target.value))}
          />
        ))}
      </div>
      <div>
        <h2>Perícias</h2>
        {Object.keys(skills).map((skill) => (
          <SkillItem
            key={skill}
            name={skills[skill].name}
            bonus={calculateSkillBonus(skill)}
          />
        ))}
      </div>
    </div>
  );
}

export default RPGFicha;
