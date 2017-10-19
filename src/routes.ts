import { Routes } from '@angular/router'
import { GalleryComponent } from './app/gallery/gallery.component'
import { ImageDetailComponent } from './app/image/image-detail.component'
import { WebtextComponent } from './app/webtext/webtext.component'


export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: 'sobre', component: WebtextComponent },
  { path: 'objectivos', component: WebtextComponent },
  { path: 'precisamos-de-si', component: WebtextComponent },
  { path: 'equipa', component: WebtextComponent },
  { path: 'contactos', component: WebtextComponent },

  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
]
