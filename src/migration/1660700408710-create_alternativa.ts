import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { coluna_avaliacao, coluna_codigo, coluna_conteudo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_email, coluna_nome, coluna_pergunta_id, coluna_primary_key, coluna_quem_pergunta_id, coluna_senha, coluna_status, coluna_tipo, if_table_not_exist } from "../../utils/migrationConstantes";

const NOME_TABELA = 'alternativa';

export class createAlternativa1660700408710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_tipo,
        coluna_conteudo,
        coluna_avaliacao,
        coluna_codigo,
        coluna_status,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_pergunta_id,
        coluna_quem_pergunta_id,
      ],
    }), if_table_not_exist);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
