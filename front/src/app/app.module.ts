import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    FileSystemComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'file-system', component: FileSystemComponent},
      {path: '', component: MainComponent}
    ])
    
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent,FileSystemComponent,MainComponent]
})
export class AppModule { }
