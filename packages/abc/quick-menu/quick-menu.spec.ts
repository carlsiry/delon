import { Component, DebugElement, TemplateRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MenuService, AlainThemeModule, AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';

import { AdQuickMenuModule } from './quick-menu.module';
import { QuickMenuComponent } from './quick-menu.component';

describe('abc: quick-menu', () => {
    let injector: Injector;
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([]),
                AlainThemeModule.forRoot(),
                AlainACLModule.forRoot(),
                AdQuickMenuModule.forRoot()
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            declarations: [ TestComponent ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    function createComp() {
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    }

    function isExists(cls: string, stauts: boolean = true) {
        if (stauts)
            expect(dl.query(By.css(cls))).not.toBeNull();
        else
            expect(dl.query(By.css(cls))).toBeNull();
    }

    describe('[property]', () => {
        beforeEach(() => createComp());

        describe('#title', () => {
            it('with string', () => {
                isExists('.title');
            });
            it('with null', () => {
                context.title = null;
                fixture.detectChanges();
                isExists('.title', false);
            });
        });

        [ 'breadcrumb', 'logo', 'action', 'content', 'extra', 'tab' ].forEach(type => {
            it('#' + type, () => isExists('.' + type));
        });
    });
});

@Component({
    template: `
    <quick-menu #comp [title]="title" [autoBreadcrumb]="autoBreadcrumb">
        <ng-template #breadcrumb><div class="breadcrumb">面包屑</div></ng-template>
        <ng-template #logo><div class="logo">logo</div></ng-template>
        <ng-template #action><div class="action">action</div></ng-template>
        <ng-template #content><div class="content">content</div></ng-template>
        <ng-template #extra><div class="extra">extra</div></ng-template>
        <ng-template #tab><div class="tab">tab</div></ng-template>
    </quick-menu>
    `
})
class TestComponent {
    @ViewChild('comp') comp: QuickMenuComponent;
    title = '所属类目';
    autoBreadcrumb: boolean;
}
