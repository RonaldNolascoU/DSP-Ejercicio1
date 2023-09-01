import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    course: '',
    months: 1,
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value < 0 ? 0 : value,
    });
  };

  const calculateDiscount = () => {
    let months = formData.months;
    let discountRate = 0;
    
    if (months === 1) discountRate = 0;
    else if (months >= 2 && months <= 3) discountRate = 0.10;
    else if (months >= 4 && months <= 5) discountRate = 0.20;
    else if (months >= 6 && months <= 7) discountRate = 0.27;
    else if (months >= 8 && months <= 9) discountRate = 0.37;
    else if (months >= 10) discountRate = 0.53;

    return discountRate;
  };

  const totalCost = () => {
    const discountRate = calculateDiscount();
    const total = formData.months * 25 * (1 - discountRate);
    return total.toFixed(2);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl mb-4">Formulario de Inscripción a Cursos</h1>
      <div className="mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="Nombre del cliente"
          value={formData.firstName}
          onChange={handleInputChange}
          className="p-2 border w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Apellido del cliente"
          value={formData.lastName}
          onChange={handleInputChange}
          className="p-2 border w-full"
        />
      </div>
      <div className="mb-4">
        <select name="course" onChange={handleInputChange} className="p-2 border w-full">
          <option value="">Seleccione el curso</option>
          <option value="inglés">Inglés</option>
          <option value="francés">Francés</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="months"
          placeholder="Cantidad de meses a pagar"
          min={0}
          value={formData.months}
          onChange={handleInputChange}
          className="p-2 border w-full"
        />
      </div>
      <div>
        <p>Nombre del cliente: {formData.firstName}</p>
        <p>Apellido del cliente: {formData.lastName}</p>
        <p>Tipo de curso: {formData.course}</p>
        <p>Meses a pagar: {formData.months}</p>
        <p>Descuento: ${((25 * calculateDiscount()) * formData.months).toFixed(2)}</p>
        <p>Porcentaje de descuento: {(calculateDiscount() * 100).toFixed(0)}%</p>
        <p>Total a pagar: ${totalCost()}</p>
      </div>
    </div>
  );
}

export default Form;
