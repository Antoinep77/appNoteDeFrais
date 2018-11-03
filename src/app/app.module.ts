import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NouvelleNdFComponent } from './utilisateur/nouvelle-ndf/nouvelle-ndf.component';
import { FormsModule } from '@angular/forms';
import { NdfListUsersComponent } from './utilisateur/ndf-list-users/ndf-list-users.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeNdfComponent } from './gestionnaire/liste-ndf/liste-ndf.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { HandleNdfComponent } from './gestionnaire/handle-ndf/handle-ndf.component';
import {ChatComponent} from './chat/chat/chat.component';
import {ChatButtonComponent} from './chat/chat-button/chat-button.component';

import { AppRootingModule } from './routing/app-rooting.module';
import {AdminRoutingModule} from './admin/admin-routing/admin-routing.module';
import {GestRoutingModule} from './gestionnaire/gest-routing/gest-routing.module';
import {UserRoutingModule} from './utilisateur/user-routing/user-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule as ChatRoutingModule }  from './chat/routing/routing.module';
import { ChatDirective } from './chat/directive/chat.directive';
import { MenuComponent } from './gestionnaire/menu/menu.component';
import { SearchComponent } from './gestionnaire/search/search.component';

import {MatModule} from './material/mat/mat.module';
import { ShowNdfComponent } from './utilisateur/show-ndf/show-ndf.component';


registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    NouvelleNdFComponent,
    NdfListUsersComponent,
    AccueilComponent,
    ListeNdfComponent,
    ListUserComponent,
    UserProfileComponent,
    CreateUserComponent,
    HandleNdfComponent,
    ChatComponent,
    ChatButtonComponent,
    ChatDirective,
    MenuComponent,
    SearchComponent,
    ShowNdfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    GestRoutingModule,
    UserRoutingModule,
    ChatRoutingModule,
    AppRootingModule,
    NgbModule,
    MatModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
