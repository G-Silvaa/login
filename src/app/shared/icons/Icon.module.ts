import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { closeIconComponent } from './close-icon/close.component';
import { LogoIfceLoginIconComponent } from './logoIfce-icon/close.component';
import { AvisosMaracanauIconComponent } from './avisos-maracanau-icon/avisos-maracanau-icon.component';
import { LogoIFceIconComponent } from './logo-ifce-icon/logo-ifce';
import { ExitIconComponent } from './exit-icon/logo-ifce';
import { VectorIconComponent } from './vector-icon/vector-icon.component';
import { PencilIconComponent } from './pencil-icon/vector-icon.component';


@NgModule({
    declarations: [
        closeIconComponent,
        LogoIfceLoginIconComponent,
        AvisosMaracanauIconComponent,
        LogoIFceIconComponent,
        ExitIconComponent,
        VectorIconComponent,
        PencilIconComponent
    ],
    imports: [
        CommonModule,
        
       
    ],
    exports: [
        closeIconComponent,
        LogoIfceLoginIconComponent,
        AvisosMaracanauIconComponent,
        LogoIFceIconComponent,
        ExitIconComponent,
        VectorIconComponent,
        PencilIconComponent
    ]
})
export class AddIconModule {
}
