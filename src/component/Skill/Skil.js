import React, { useState } from 'react';

function SkillItem({ name, bonus }) {
    return (
      <div>
        <span>{name}:</span>
        <span>{bonus}</span>
      </div>
    );
  }
  