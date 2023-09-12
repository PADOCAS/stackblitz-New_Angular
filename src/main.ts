import { Component } from '@angular/core';
import 'zone.js/dist/zone';
import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    if ((window as any)['ngRef']) {
      (window as any)['ngRef'].destroy();
    }
    (window as any)['ngRef'] = ref;
  });
