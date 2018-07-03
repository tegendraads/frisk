import { FishService } from './image/shared/fish.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from '../routes';
import { WebtextComponent } from './webtext/webtext.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    NavbarComponent,
      ImageDetailComponent,
      ImageFilterPipe,
      WebtextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe, FishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
