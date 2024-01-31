import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  return await prisma.user.create({
    data,
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getAll = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const update = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: { id },
  });
  return;
};
