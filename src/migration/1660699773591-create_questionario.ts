import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_descricao, coluna_primary_key, coluna_quem_pergunta_id, coluna_titulo, if_table_not_exist } from "../../utils/migrationConstantes";

const NOME_TABELA = 'questionario';

export class createQuestionario1660699773591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_titulo,
        coluna_descricao,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_quem_pergunta_id,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
