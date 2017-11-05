import { Component } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FishService } from './shared/fish.service';
import { Fish } from './shared/fish.component';
import {Location} from '@angular/common';
@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image: any;
  fish: Fish;
  linktofish: SafeResourceUrl;
  currentFishId:number;

  constructor(private imageService: ImageService,
    private fishService: FishService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentFishId = this.route.snapshot.params['id'];
    this.goToFish(this.currentFishId);
  }
  goNext(){
    this.getNextFishId(1);
    this.goToFish(this.currentFishId);
  }
  goPrevious(){
    this.getNextFishId(-1)
    this.goToFish(this.currentFishId);
  }
  getNextFishId(dir: number){
    if(dir < 0){
      this.currentFishId--;
    }else{
      this.currentFishId++;
    }
    if(this.currentFishId>this.imageService.getNumberOfImages()){
      this.currentFishId = 1;
    }
    if(this.currentFishId<1){
      this.currentFishId = this.imageService.getNumberOfImages();
    }
    this.location.replaceState('gallery/image/' + this.currentFishId);
  }
  goToFish(id: number){
    this.image = this.imageService.getImage(id);
    this.fish = this.fishService.getFish(id);
  }
}
