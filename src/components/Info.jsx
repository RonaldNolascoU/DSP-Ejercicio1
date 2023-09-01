import React from "react";

export function Info(props) {
  const { formData, calculateDiscount, totalCost } = props;

  return (
    <div className="mt-2 container flex flex-col ">
      <div className="flex justify-center  w-full bg-gray-200 rounded-t-md">
        <h1 className="text-3xl">Informacion de inscripcion al curso</h1>
      </div>
      <div className=" w-full pl-5 py-5 h-full bg-slate-100 rounded-b-md">
        <div className="grid gap-y-2">
          <p className="text-lg font-bold">
            Nombre del cliente:{" "}
            <span className="font-normal">{formData.firstName}</span>
          </p>
          <p className="text-lg font-bold">
            Apellido del cliente:{" "}
            <span className="font-normal">{formData.lastName}</span>
          </p>
          <p className="text-lg font-bold">
            Tipo de curso:{" "}
            <span className="font-normal">{formData.course}</span>
          </p>
          <p className="text-lg font-bold">
            Meses a pagar:{" "}
            <span className="font-normal">{formData.months}</span>
          </p>
          <p className="text-lg font-bold">
            Descuento:
            <span className="font-normal">
              ${(25 * calculateDiscount() * formData.months).toFixed(2)}
            </span>
          </p>
          <p className="text-lg font-bold">
            Porcentaje de descuento:{" "}
            <span className="font-normal">
              {(calculateDiscount() * 100).toFixed(0)}%
            </span>
          </p>
          <p className="text-lg font-bold">
            Total a pagar: <span className="font-normal">${totalCost()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
