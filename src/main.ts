import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from "@angular/core";
import { AppModule } from './app/app.module';
import "./polyfills.ts";
import { environment } from './environments/environment';

  enableProdMode();



platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
