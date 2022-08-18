import * as Yup from "yup";

export const valida_id = Yup
  .number()
  .required('Campo vazio');

export const valida_nome = Yup
  .string()
  .required('Campo nome vazio');

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
