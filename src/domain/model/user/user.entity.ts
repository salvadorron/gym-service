import { Admin, Client, Municipality, NutritionalPlan, Parrish, State, Trainer, User } from '@prisma/client';

export class UserEntity {
  private id: number;
  private name: string;
  private lastName: string;
  private age: number;
  private username: string;
  private password: string;
  private roleId: string;
  private weight: number;
  private height: number;
  private gender: "MALE" | "FEMALE";
  private medical_conditions?: string;
  private state_id: number;
  private municipality_id: number;
  private parrish_id: number;
  private nutritional_plan_id: number;
  private city: string;
  private zip_code: string;
  private address: string;
  private state?: State;
  private nutritional_plan?: NutritionalPlan;
  private municipality?: Municipality;
  private parrish?: Parrish;
  private client?: Client;
  private trainer?: Trainer;
  private admin?: Admin;

  constructor(
    user: User & { client?: Client; trainer?: Trainer; admin?: Admin, parrish?: Parrish, municipality?: Municipality, state?: State, nutritional_plan?: NutritionalPlan },
  ) {
    this.id = user.id;
    this.name = user.name;
    this.lastName = user.last_name;
    this.age = user.age;
    this.username = user.username;
    this.password = user.password;
    this.roleId = user.role_id;
    this.weight = user.weight;
    this.height = user.height;
    this.gender = user.gender;
    this.medical_conditions = user.medical_conditions;
    this.state_id = user.state_id;
    this.municipality_id = user.municipality_id;
    this.parrish_id = user.parrish_id;
    this.nutritional_plan_id = user.nutritional_plan_id;
    this.city = user.city;
    this.zip_code = user.zip_code;
    this.address = user.address;
    this.state = user.state ? user.state : undefined;
    this.municipality = user.municipality ? user.municipality : undefined;
    this.parrish = user.parrish ? user.parrish : undefined;
    this.nutritional_plan = user.nutritional_plan ? user.nutritional_plan : undefined;
    this.client = user.client ? user.client : undefined;
    this.trainer = user.trainer ? user.trainer : undefined;
    this.admin = user.admin ? user.admin : undefined;
  }

  getId(): number {
    return this.id;
  }

  getHashedPassword(): string {
    return this.password;
  }

  toSnapshot(): UserEntityDto {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      username: this.username,
      roleId: this.roleId,
      weight: this.weight,
      height: this.height,
      gender: this.gender,
      medical_conditions: this.medical_conditions,
      state_id: this.state_id,
      municipality_id: this.municipality_id,
      parrish_id: this.parrish_id,
      nutritional_plan_id: this.nutritional_plan_id,
      city: this.city,
      zip_code: this.zip_code,
      address: this.address,
      state: this.state,
      municipality: this.municipality,
      parrish: this.parrish,
      nutritional_plan: this.nutritional_plan,
      client: this.client,
      trainer: this.trainer,
      admin: this.admin
    };
  }
}

type UserEntityDto = {
  id: number;
  name: string;
  lastName: string;
  age: number;
  username: string;
  roleId: string;
  weight: number
  height: number
  gender: "MALE" | "FEMALE"
  medical_conditions?: string
  state_id: number
  municipality_id: number
  parrish_id: number
  nutritional_plan_id: number,
  city: string
  zip_code: string
  address: string
  state?: State
  municipality?: Municipality
  parrish?: Parrish
  nutritional_plan?: NutritionalPlan;
  client?: Client;
  trainer?: Trainer;
  admin?: Admin;
};
