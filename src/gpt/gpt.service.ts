/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase } from './use-cases';
import { OrtographyDto } from './dtos/ortography.dto';

@Injectable()
export class GptService {

    //Solo para llamar casos de Uso
    async ortographyCheck(ortographyDto: OrtographyDto){
        // return {hola: 'Hi World from ortographyCheck'};
        return await ortographyCheckUseCase({
            prompt: ortographyDto.prompt
        });
    }
}
