import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { Alternativa } from "./Alternativa";
import { QuemPergunta } from "./QuemPergunta";
import { Questionario } from "./Questionario";

@Entity("pergunta")
export class Pergunta {
  @PrimaryColumn()
  id: number;

  @Column()
  texto: string;

  @Column()
  tipo: string; /* Exemplo => multipla escolha, escrita */

  @Column()
  resposta: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @ManyToOne(() => Questionario, (questionario) => questionario.perguntas)
  @JoinColumn({ name: "questionario_id" })
  questionario: Questionario;
  @Column()
  questionario_id: number;

  @OneToMany(() => Alternativa, (alternativa) => alternativa.pergunta)
  alternativas: Alternativa[];

  @ManyToOne(() => QuemPergunta, (quemPergunta) => quemPergunta.perguntas)
  @JoinColumn({ name: "quem_pergunta_id" })
  quemPergunta: QuemPergunta;
  @Column()
  quem_pergunta_id: number;
}
