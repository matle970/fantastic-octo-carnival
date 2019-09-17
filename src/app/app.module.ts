import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchIdComponent } from './components/search-id/search-id.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LogoComponent,
    UserComponent,
    TabsComponent,
    FilterComponent,
    SearchIdComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
