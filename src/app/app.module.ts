import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// ---------------- > RXJS < ---------------- //
import 'rxjs/add/operator/do';

// ---------------- > Pages < ---------------- //
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

// ---------------- > Services < ---------------- //
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';

// ---------------- > Else < ---------------- //
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'smarthome',
      storeName: 'smarthomedb',
      driverOrder: ['localstorage', 'indexeddb']
    }),
    ChartsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    UserServiceProvider,
    LocalStorageServiceProvider
  ]
})

export class AppModule {}
