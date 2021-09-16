import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CVComponent } from './views/cv/cv.component';
import { JagComponent } from './views/jag/jag.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { StartComponent } from './views/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CVComponent,
    JagComponent,
    ProjectsComponent,
    StartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
