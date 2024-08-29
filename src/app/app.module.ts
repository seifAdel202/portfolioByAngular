import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [
    provideHttpClient() // Provide HttpClient here
  ],
})
export class AppModule { }
