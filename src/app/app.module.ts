import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererComponent } from './components/maze/renderer/renderer.component';

import { MazeService } from './providers/maze-service.service';
import { MazeSolutionService } from './providers/maze-solution.service';
@NgModule({
  declarations: [
    AppComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MazeService, MazeSolutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
