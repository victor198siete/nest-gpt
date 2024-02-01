/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class OrtographyDto {

    @IsString()
    readonly prompt: string;
    readonly maxTokens?: number;
}