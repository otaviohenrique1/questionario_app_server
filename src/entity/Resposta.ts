import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity("resposta")
export class Resposta {
  @PrimaryColumn()
  id: number;

  @Column()
  quem_responde_id: number;
  
  @Column()
  questionario_id: number;

  // @Column()
  // questionario_respostas: Resposta[];
  
  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;
}
