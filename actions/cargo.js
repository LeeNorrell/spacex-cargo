"use server";

import { create as createCargo } from "store/cargo";

export const create = async (formData) => {
  const weight = formData.get('weight')
  createCargo({ weight })

  return {
    success: true,
  };

  // const rawFormData = {
  //   id: formData.get("id"),
  //   weight: formData.get("weight"),
  // }

}