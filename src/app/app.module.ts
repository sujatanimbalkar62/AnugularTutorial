
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { GridModule, PDFModule,ExcelModule, } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AuthComponent } from './auth/auth.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,  FacebookLoginProvider} from 'angularx-social-login';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashbordComponent,
    MapComponent,
    MergemapComponent,
    AuthComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    DropDownsModule,
    PopupModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    TreeViewModule,
    FormsModule,
    CommonModule,
    DateInputsModule,
    NavigationModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    DialogsModule,
    NotificationModule,
    RouterModule,
    IconsModule,
    LayoutModule,
    IndicatorsModule,
    MenuModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
