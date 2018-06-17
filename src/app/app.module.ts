import { BrowserModule } from '@angular/platform-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// ---------------- > RXJS < ---------------- //
import 'rxjs/add/operator/do';

// ---------------- > Pages < ---------------- //
import { MyApp } from './app.component';

// ---------------- > Services < ---------------- //
import { UserServiceProvider } from '../providers/user-service/user-service';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';
import { StatisticsService } from '../providers/statistics-service/statistics.service';

// ---------------- > Else < ---------------- //
import { AuthInterceptorProvider } from './../interceptors/auth.interceptor';
import { ComponentsModule } from './../components/components.module';
import { ChartsModule } from 'ng2-charts';
import { FeedBackService } from '../providers/feedback/feedback.service';
import { AssetsService } from '../providers/assets-firebase/assets.service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    }),
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
    MyApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    LocalStorageServiceProvider,
    AuthInterceptorProvider,
    StatisticsService,
    ScreenOrientation,
    FeedBackService,
    AssetsService
  ]
})

export class AppModule {}
