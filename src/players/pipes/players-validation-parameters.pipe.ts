import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class PlayersValidationParametersPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException(`${metadata.data} must not be empty!`);
        }
        return value;
    }
}