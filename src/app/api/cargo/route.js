import { create } from 'store/cargo';

export const POST = async (request) => {
  const {
    weight,
  } = await request.json();

  create({ weight });

  return Response.json({ weight });
};
