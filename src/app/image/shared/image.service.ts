import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id :  number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}
const IMAGES =[
{'id' : 1, 'category' : 'fish', 'caption' : 'Tinca tinca', 'url' : 'C1_R1_Tinca_tinca.png', 'link' : '114177-Tinca-tinca'},
{'id' : 2, 'category' : 'fish', 'caption' : 'Cyprinus carpio', 'url' : 'C1_R2_Cyprinus_carpio.png'},
{'id' : 3, 'category' : 'fish', 'caption' : 'Carassius_auratus', 'url' : 'C1_R3_Carassius_auratus.png'},
{'id' : 4, 'category' : 'fish', 'caption' : 'Unknown', 'url' : 'C1_R4_O_mykiss.png'},
{'id' : 5, 'category' : 'fish', 'caption' : 'Gobio lozanoi', 'url' : 'C1_R5_gobio_lozanoi.png'},
{'id' : 6, 'category' : 'fish', 'caption' : 'Gambusia', 'url' : 'C2_R1_Gambusia.png'},
{'id' : 7, 'category' : 'fish', 'caption' : 'Afacetus', 'url' : 'C2_R2_Afacetus.png'},
{'id' : 8, 'category' : 'fish', 'caption' : 'Esox lucius', 'url' : 'C2_R3_Esox_lucius.png'},
{'id' : 9, 'category' : 'fish', 'caption' : 'Micropterus salmoides', 'url' : 'C2_R4_Micropterus_salmoides.png'},
{'id' : 10, 'category' : 'fish', 'caption' : 'Fundulus heteroclitus macho', 'url' : 'C2_R5_fundulus_heteroclitus_macho.png'},
{'id' : 11, 'category' : 'fish', 'caption' : 'Lepomis gibbosus', 'url' : 'C3_R1_Lepomis-gibbosus.png'},
{'id' : 12, 'category' : 'fish', 'caption' : 'Sander lucioperca', 'url' : 'C3_R2_Sander_lucioperca.png'},
{'id' : 13, 'category' : 'fish', 'caption' : 'Ameiurus melas', 'url' : 'C3_R3_Ameiurus_melas.png'},
{'id' : 14, 'category' : 'fish', 'caption' : 'Alburnus alburnus', 'url' : 'C3_R4_Alburnus_alburnus.png'},
{'id' : 15, 'category' : 'fish', 'caption' : 'Silurus glanis', 'url' : 'C4_R1_Silurus_glanis.png'},
{'id' : 16, 'category' : 'fish', 'caption' : 'Rutilus rutilus', 'url' : 'C4_R2_Rutilus_rutilus.png'},
{'id' : 17, 'category' : 'fish', 'caption' : 'Carassius gibelius', 'url' : 'C4_R3_Carassius-gibelius.png'},
{'id' : 18, 'category' : 'fish', 'caption' : 'I punctatus', 'url' : 'C4_R4_I_punctatus.png'},
{'id' : 19, 'category' : 'fish', 'caption' : 'Perca fluviatili', 'url' : 'C4_R5_Perca_fluviatilis.png'}
];
