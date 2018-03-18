import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeDe from '@angular/common/locales/de';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyServiceXHR } from './rest/fetch-property.service';
import { PropertyService } from './services/property.service';
import { ResultViewComponent } from './result-view/result-view.component';
import { registerLocaleData } from '@angular/common';
import { PropertyStatusButtonComponent } from './property-status-button/property-status-button.component';
import { LoadingComponent } from './loading/loading.component';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ResultViewComponent,
    PropertyStatusButtonComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PropertyServiceXHR, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
