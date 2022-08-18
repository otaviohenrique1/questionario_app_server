import * as Yup from "yup";

export const valida_id = Yup
  .number()
  .required('Campo vazio')
  .moreThan(1, "Não aceita numeros menores que 1")
  .min(0, "Não aceita numeros menores que 1")
  .positive("Não aceita numeros negativos")
  .integer("Aceita apenas numeros inteiros");

export const valida_quem_pergunta_id = Yup
  .number()
  .required('Campo vazio')
  .moreThan(1, "Não aceita numeros menores que 1")
  .min(0, "Não aceita numeros menores que 1")
  .positive("Não aceita numeros negativos")
  .integer("Aceita apenas numeros inteiros");

export const valida_titulo = Yup
  .string()
  .required('Campo titulo vazio');

export const valida_descricao = Yup
  .string()
  .required('Campo descricao vazio');

export const valida_nome = Yup
  .string()
  .required('Campo nome vazio');

export const valida_usuario = Yup
  .string()
  .required('Campo usuario vazio');

export const valida_email = Yup
  .string()
  .email("Email invalido")
  .required('Campo email vazio');

export const valida_senha = Yup
  .string()
  .min(8, "Minimo 8 carateres")
  .max(255, "Maximo 255 carateres")
  .required('Campo senha vazio');

export const valida_data_cadastro = Yup
  .date()
  .required('Campo data_cadastro vazio');

export const valida_data_modificacao_cadastro = Yup
  .date()
  .required('Campo data_modificacao_cadastro vazio');

export const valida_texto = Yup
  .string()
  .required('Campo texto vazio');

export const valida_tipo = Yup
  .string()
  .required('Campo tipo vazio');

export const valida_resposta = Yup
  .string()
  .required('Campo resposta vazio');

export const valida_codigo = Yup
  .string()
  .required('Campo codigo vazio');
