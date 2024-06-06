/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BloodBankWhereUniqueInput } from "./BloodBankWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BloodBankUpdateInput } from "./BloodBankUpdateInput";

@ArgsType()
class UpdateBloodBankArgs {
  @ApiProperty({
    required: true,
    type: () => BloodBankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BloodBankWhereUniqueInput)
  @Field(() => BloodBankWhereUniqueInput, { nullable: false })
  where!: BloodBankWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BloodBankUpdateInput,
  })
  @ValidateNested()
  @Type(() => BloodBankUpdateInput)
  @Field(() => BloodBankUpdateInput, { nullable: false })
  data!: BloodBankUpdateInput;
}

export { UpdateBloodBankArgs as UpdateBloodBankArgs };
