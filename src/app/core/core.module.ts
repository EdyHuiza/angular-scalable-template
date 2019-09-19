import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [FooterComponent,  HeaderComponent,  NavbarComponent],
    exports: [FooterComponent, HeaderComponent, NavbarComponent]
})
export class CoreModule { }