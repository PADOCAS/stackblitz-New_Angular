import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './components/app.component';
import { Button } from './components/button.component';
import { MenuComponent } from './components/menu.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [App, Button, MenuComponent, EntryDataComponent],
  bootstrap: [App],
})
export class AppModule {}
