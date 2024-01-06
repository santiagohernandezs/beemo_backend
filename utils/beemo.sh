#!/bin/bash

createDirectory() {
  mkdir -p "$@"
}

createFile() {
  touch "$1"
}

moveToDirectory() {
  cd "$1" || exit 1
}

capitalizeFirstLetter() {
  local input="$1"
  local firstLetter="${input:0:1}"
  local restOfString="${input:1}"
  local capitalizedFirstLetter="$(tr '[:lower:]' '[:upper:]' <<<"$firstLetter")"
  echo "$capitalizedFirstLetter$restOfString"
}

buildController() {
  cat >"controllers.ts" <<EOL
import prisma from '@db/connection'
import { type Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

const new${ENTITY_NAME} = async (args: Prisma.${ENTITY_NAME}CreateArgs) =>
  await prisma.${MODEL_NAME}
    .create(args)
    .catch((err) => raise('${ENTITY_NAME}', 'Cannot create ${MODEL_NAME}', err))
    .finally(async () => await prisma.\$disconnect());

const ${MODEL_NAME}s = async (args: Prisma.${ENTITY_NAME}FindManyArgs) =>
  await prisma.${MODEL_NAME}
    .findMany(args)
    .catch((err) => raise('${ENTITY_NAME}', 'Cannot find ${MODEL_NAME}s', err))
    .finally(async () => await prisma.\$disconnect());

const ${MODEL_NAME} = async (args: Prisma.${ENTITY_NAME}FindUniqueArgs) =>
  await prisma.${MODEL_NAME}
    .findUnique(args)
    .catch((err) => raise('${ENTITY_NAME}', 'Cannot find ${MODEL_NAME}', err))
    .finally(async () => await prisma.\$disconnect());

const deleted${ENTITY_NAME} = async (args: Prisma.${ENTITY_NAME}DeleteArgs) =>
  await prisma.${MODEL_NAME}
    .delete(args)
    .catch(err => raise('${ENTITY_NAME}', 'Cannot delete ${MODEL_NAME}', err))
    .finally(async () => await prisma.$disconnect())

const updated${ENTITY_NAME} = async (args: Prisma.${ENTITY_NAME}UpdateArgs) =>
  await prisma.${MODEL_NAME}
    .update(args)
    .catch(err => raise('${ENTITY_NAME}', 'Cannot update ${MODEL_NAME}', err))
    .finally(async () => await prisma.$disconnect())

export { new${ENTITY_NAME}, ${MODEL_NAME}s, ${MODEL_NAME}, deleted${ENTITY_NAME}, updated${ENTITY_NAME} };
EOL
}

generateProjectStructure() {
  ENTITY_NAME=$1
  MODEL_NAME=$2

  BASE_DIR="C:\Users\santi\code\personal\projects\beemo_backend\src"
  MODEL_DIR="$BASE_DIR/$MODEL_NAME"

  # Crear el directorio base
  createDirectory "$MODEL_DIR"
  cd "$MODEL_DIR" || exit 1

  # # Crear subdirectorios
  createDirectory "application" "domain" "infrastructure" "types"

  # # Aplicaction
  moveToDirectory "application"
  createDirectory "useCases"
  moveToDirectory "useCases"
  createFile "useCases.ts"

  # # Domain
  moveToDirectory "$MODEL_DIR"
  moveToDirectory "domain"
  createDirectory "controllers"
  moveToDirectory "controllers"
  createFile "controllers.ts"
  buildController

  # # Infrastructure
  moveToDirectory "$MODEL_DIR/infrastructure"
  createDirectory "middlewares" "resolvers" "typedefs"

  # # Infraestructure - Middlewares
  moveToDirectory "middlewares"
  createFile "middlewares.ts"

  # # Infraestructure - Resolver
  moveToDirectory "$MODEL_DIR/infrastructure"
  moveToDirectory "resolvers"
  createDirectory "mutations" "queries"
  moveToDirectory "mutations" && createFile "mutations.ts"
  moveToDirectory "../queries" && createFile "queries.ts"
  moveToDirectory ".." && createFile "resolvers.ts"

  # # Infraestructure - Typedefs
  moveToDirectory "$MODEL_DIR/infrastructure"
  moveToDirectory "typedefs"
  createDirectory "inputs" "mutations" "queries"
  moveToDirectory "inputs" && createFile "inputs.ts"
  moveToDirectory "../mutations" && createFile "mutations.ts"
  moveToDirectory "../queries" && createFile "queries.ts"
  moveToDirectory ".." && createFile "typedefs.ts"
}

# Main

echo "
Hola soy Beemo, tu asistente personal para crear modelos en tu proyecto. ¿Qué quieres hacer?

1. Crear un Modulo
"

read -p "Opción: " OPTION

case $OPTION in
1)
  read -p "Nombre de la entidad: " MODEL_NAME

  ENTITY_NAME="$(capitalizeFirstLetter "$MODEL_NAME")"

  generateProjectStructure "$ENTITY_NAME" "$MODEL_NAME"
  ;;
*)
  echo "Opción no válida"
  ;;
esac
