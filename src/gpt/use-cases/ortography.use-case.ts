/* eslint-disable prettier/prettier */

interface Options {
    prompt: string;
}

export const ortographyCheckUseCase = async( options: Options) => {
    
    const { prompt } = options;
    return {
        prompt: prompt,
    }
}