import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertsComponent } from 'src/app/partials/alerts/alerts.component';
import { BackgroundComponent } from 'src/app/partials/background/background.component';
import { DefaultDialogComponent } from 'src/app/partials/alerts/default-dialog/default-dialog.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatInputModule } from '@angular/material/input'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { ContributeComponent } from 'src/app/pages/contribute/contribute.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { UrlSafePipe } from 'src/app/pipes/url-safe.pipe';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { WebDevComponent } from 'src/app/pages/web-dev/web-dev.component';
import { VisualizersComponent } from 'src/app/pages/visualizers/visualizers.component';
import { AppsComponent } from 'src/app/pages/apps/apps.component';
import { BackgroundGradientComponent } from 'src/app/partials/background-gradient/background-gradient.component';

@NgModule({
  declarations: [
    AlertsComponent,
    AppComponent,
    BackgroundComponent,
    DefaultDialogComponent,
    SafePipe,
    SettingsComponent,
    UrlSafePipe,
    ContributeComponent,
    HomeComponent,
    WebDevComponent,
    VisualizersComponent,
    AppsComponent,
    BackgroundGradientComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
