import Products from '../../../../products/infra/typeorm/entities/Products';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('categories')
class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @OneToMany(type => Products, categories => Categories)
  products: Products[];

  @Exclude()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Categories;
