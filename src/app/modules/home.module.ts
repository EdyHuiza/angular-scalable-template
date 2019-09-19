import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppModule } from '../app.module';
import { CoreModule } from '../core/core.module';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(HomeRouting)
    ],
    declarations: [
        TestComponent
    ]
})

export class HomeModule { }
