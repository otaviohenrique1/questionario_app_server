import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { coluna_codigo, coluna_cpf, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_data_nascimento, coluna_email, coluna_nome, coluna_primary_key, coluna_senha, coluna_telefone, coluna_usuario, if_table_not_exist } from "../../utils/migrationConstantes";

const NOME_TABELA = 'quem_pergunta';

export class createQuemPergunta1660699774943 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_usuario,
        coluna_telefone,
        coluna_cpf,
        coluna_data_nascimento,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
