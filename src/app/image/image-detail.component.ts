import { Component } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image: any;
  linktofish: SafeResourceUrl;

  constructor(private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
    this.updateUrl(this.image.link);
  }
  updateUrl(id: string) {
    console.log(id);
    const linkedUrl: string = 'http://portugal.inaturalist.org/taxa/' + id;
  }
}
