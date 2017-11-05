import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id :  number){
        return IMAGES.slice(0).find(image => image.id == id);
    }
    getNumberOfImages(): number {
        return IMAGES.slice(0).length;
    }
}

const IMAGES =[
{'id' : 1, 'category' : 'fish', 'caption' : 'Tenca', 'url' : 'C1_R2_Tinca_tinca.png'},
{'id' : 2, 'category' : 'fish', 'caption' : 'Silurno', 'url' : 'C3_R5_Silurus_glanis.png'},
{'id' : 3, 'category' : 'fish', 'caption' : 'Gardon', 'url' : 'C4_R1_Rutilus_rutilus.png'},
{'id' : 4, 'category' : 'fish', 'caption' : 'Piscardo', 'url' : 'C4_R5_phoxinus_bigerri.png'},
{'id' : 5, 'category' : 'fish', 'caption' : 'Perca-europeia', 'url' : 'C4_R4_Perca_fluviatilis.png'},
{'id' : 6, 'category' : 'fish', 'caption' : 'Lucioperca', 'url' : 'C3_R2_Sander_lucioperca.png'},
{'id' : 7, 'category' : 'fish', 'caption' : 'Lúcio', 'url' : 'C2_R3_Esox_lucius.png'},
{'id' : 8, 'category' : 'fish', 'caption' : 'Peixe-gato-americano / Bagre', 'url' : 'C4_R3_I_punctatus.png'},
{'id' : 9, 'category' : 'fish', 'caption' : 'Chanchito', 'url' : 'C2_R2_Afacetus.png'},
{'id' : 10, 'category' : 'fish', 'caption' : 'Fundulo', 'url' : 'C2_R5_Fundulus_heteroclitus.png'},
{'id' : 11, 'category' : 'fish', 'caption' : 'Pimpão', 'url' : 'C1_R3_Carassius_auratus.png'},
{'id' : 12, 'category' : 'fish', 'caption' : 'Peixe-gato-negro', 'url' : 'C3_R3_Ameiurus_melas.png'},
{'id' : 13, 'category' : 'fish', 'caption' : 'Pimpão-cinzento', 'url' : 'C4_R2_Carassius-gibelius.png'},
{'id' : 14, 'category' : 'fish', 'caption' : 'Carpa', 'url' : 'C1_R1_Cyprinus_carpio.png'},
{'id' : 15, 'category' : 'fish', 'caption' : 'Gambúsia', 'url' : 'C2_R1_Gambusia.png'},
{'id' : 16, 'category' : 'fish', 'caption' : 'Góbio', 'url' : 'C1_R5_gobio_lozanoi.png'},
{'id' : 17, 'category' : 'fish', 'caption' : 'Perca-sol', 'url' : 'C3_R1_Lepomis-gibbosus.png'},
{'id' : 18, 'category' : 'fish', 'caption' : 'Achigã', 'url' : 'C2_R4_Micropterus_salmoides.png'},
{'id' : 19, 'category' : 'fish', 'caption' : 'Truta-arco-íris', 'url' : 'C1_R4_O_mykiss.png'},
{'id' : 20, 'category' : 'fish', 'caption' : 'Alburno', 'url' : 'C3_R4_Alburnus_alburnus.png'}
];