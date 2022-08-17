import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Pergunta } from "./Pergunta";
import { QuemPergunta } from "./QuemPergunta";

@Entity("alternativa")
export class Alternativa {
  @PrimaryColumn()
  id: number;

  @Column()
  tipo: string; /* Exemplo => radio, checkbox */

  @Column()
  conteudo: string; /* texto da alternativa */

  @Column()
  avaliacao: string; /* Exemplo => certo ou errado */
  
  @Column()
  status: string; /* Exemplo => Ativo ou inativo */

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.alternativas)
  @JoinColumn({ name: "pergunta_id" })
  pergunta: Pergunta;
  @Column()
  pergunta_id: number;

  @ManyToOne(() => QuemPergunta, (quemPergunta) => quemPergunta.alternativas)
  @JoinColumn({ name: "quem_pergunta_id" })
  quemPergunta: QuemPergunta;
  @Column()
  quem_pergunta_id: number;
}
