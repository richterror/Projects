import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './views/cv/cv.component';
import { JagComponent } from './views/jag/jag.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { StartComponent } from './views/start/start.component';

const routes: Routes = [
  { path: 'jag', component: JagComponent },
  { path: 'CV', component: CVComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
