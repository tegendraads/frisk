import { Injectable } from '@angular/core'

@Injectable()
export class Fish{
    id: number = 0;
    name: string = '';
    description: string = '';
    data_de_chegada: string = '';
    origem: string = '';
    usos: string = '';
}
