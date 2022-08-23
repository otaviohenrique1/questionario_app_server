import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import { Pergunta } from "./Pergunta";
import { QuemPergunta } from "./QuemPergunta";
import { Resposta } from "./Resposta";

@Entity("questionario")
export class Questionario {
  @PrimaryColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @OneToMany(() => Pergunta, (pergunta) => pergunta.questionario)
  perguntas: Pergunta[];

  @ManyToOne(() => QuemPergunta, (quemPergunta) => quemPergunta.questionarios)
  @JoinColumn({ name: "quem_pergunta_id" })
  quemPergunta: QuemPergunta;
  @Column()
  quem_pergunta_id: number;

  @OneToOne(() => Resposta, (resposta) => resposta.questionario)
  resposta: Resposta;
}
