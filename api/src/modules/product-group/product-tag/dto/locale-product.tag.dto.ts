import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { ID } from "src/internal";


export class LocaleProductTagDto {
    @IsOptional()
    @IsInt()
    id: ID;
    
    @IsString()
    name: string;
   
    @IsInt()
    localeId: ID;

}
