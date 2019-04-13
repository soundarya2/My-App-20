
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AsdComponent } from './components/asd/asd.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { JudgesComponent } from './components/judges/judges.component';
import { ParticipantsComponent } from './components/participants/participants.component';


  const routes: Routes = [
    {path: "asd", component: AsdComponent},{path: "submenu", component: SubmenuComponent},{path: "judges", component: JudgesComponent},{path: "participants", component: ParticipantsComponent},
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
