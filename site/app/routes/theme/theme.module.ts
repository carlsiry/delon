import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorSketchModule } from 'ngx-color/sketch';

import { SharedModule } from '../../shared/shared.module';
import { ColorComponent } from './components/color/color.component';

import { ThemeLayoutComponent } from './layout/layout.component';
import { ThemeDemoComponent } from './demo/demo.component';
import { ThemeEditorComponent } from './editor/editor.component';

// region: components
const COMPONENTS = [
    ColorComponent,
    ThemeLayoutComponent,
    ThemeDemoComponent,
    ThemeEditorComponent
];

const routes: Routes = [
    {
        path: '',
        component: ThemeLayoutComponent,
        children: [
            { path: '', redirectTo: 'editor', pathMatch: 'full' },
            { path: 'editor', component: ThemeEditorComponent, data: { reuse: true, title: '编辑器' } },
            { path: 'demo', component: ThemeDemoComponent, data: { reuse: true, title: '预览' } }
        ]
    }
];
// endregion

@NgModule({
    imports: [
        SharedModule,
        ColorSketchModule,
        RouterModule.forChild(routes)
    ],
    declarations: COMPONENTS
})
export class ThemeModule {

}
