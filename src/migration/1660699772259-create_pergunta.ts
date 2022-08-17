import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_primary_key, coluna_quem_pergunta_id, coluna_questionario_id, coluna_resposta, coluna_texto, coluna_tipo, if_table_not_exist } from "../../utils/migrationConstantes";

const NOME_TABELA = 'pergunta';

export class createPergunta1660699772259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_tipo,
        coluna_texto,
        coluna_resposta,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_questionario_id,
        coluna_quem_pergunta_id,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
