import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { NoPagesFoundComponent } from './noPagesFound/no-pages-found/no-pages-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NoPagesFoundComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule,
        PagesModule,
        SharedModule
    ]
})
export class AppModule { }
