import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_primary_key, coluna_quem_responde_id, coluna_questionario_id, if_table_not_exist } from "../../utils/migrationConstantes";

const NOME_TABELA = 'alternativa';

export class createRespostas1660860341638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_quem_responde_id,
        coluna_questionario_id,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
