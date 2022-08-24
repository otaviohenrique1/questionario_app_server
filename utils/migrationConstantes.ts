import { TableColumnOptions } from "typeorm";

export const if_table_not_exist = true;

export function CriaColunaTabela(data: TableColumnOptions) {
  return { ...data };
}

export const coluna_primary_key = CriaColunaTabela({
  name: 'id',
  type: 'integer',
  unsigned: true,
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'increment'
});

export const coluna_nome = CriaColunaTabela({
  name: 'nome',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_email = CriaColunaTabela({
  name: 'email',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_senha = CriaColunaTabela({
  name: 'senha',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_tipo = CriaColunaTabela({
  name: 'tipo',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_conteudo = CriaColunaTabela({
  name: 'conteudo',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_avaliacao = CriaColunaTabela({
  name: 'avaliacao',
  type: 'varchar',
  isNullable: false,
  length: '255'
});

export const coluna_data_cadastro = CriaColunaTabela({
  name: 'data_cadastro',
  type: 'datetime'
});

export const coluna_data_modificacao_cadastro = CriaColunaTabela({
  name: 'data_modificacao_cadastro',
  type: 'datetime'
});

export const coluna_texto = CriaColunaTabela({
  name: 'texto',
  type: 'varchar',
  isNullable: false,
});

export const coluna_status = CriaColunaTabela({
  name: 'status',
  type: 'varchar',
  isNullable: false,
});

export const coluna_descricao = CriaColunaTabela({
  name: 'descricao',
  type: 'text',
  isNullable: false,
});

export const coluna_titulo = CriaColunaTabela({
  name: 'titulo',
  type: 'varchar',
  isNullable: false,
});

export const coluna_usuario = CriaColunaTabela({
  name: 'usuario',
  type: 'varchar',
  isNullable: false,
});

export const coluna_telefone = CriaColunaTabela({
  name: 'telefone',
  type: 'varchar',
  isNullable: false,
});

export const coluna_cpf = CriaColunaTabela({
  name: 'cpf',
  type: 'varchar',
  isNullable: false,
});

export const coluna_data_nascimento = CriaColunaTabela({
  name: 'data_nascimento',
  type: 'datetime',
  isNullable: false,
});

export const coluna_codigo = CriaColunaTabela({
  name: 'codigo',
  type: 'varchar',
  isGenerated: true,
  generationStrategy: 'uuid'
});

export const coluna_resposta = CriaColunaTabela({
  name: 'resposta',
  type: 'varchar',
  isNullable: false,
});

export const coluna_questionario_id = CriaColunaTabela({
  name: 'questionario_id',
  type: 'integer',
  unsigned: true,
});

export const coluna_pergunta_id = CriaColunaTabela({
  name: 'pergunta_id',
  type: 'integer',
  unsigned: true,
});

export const coluna_quem_pergunta_id = CriaColunaTabela({
  name: 'quem_pergunta_id',
  type: 'integer',
  unsigned: true,
});

export const coluna_quem_responde_id = CriaColunaTabela({
  name: 'quem_pergunta_id',
  type: 'integer',
  unsigned: true,
});
