import { Component, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'theme-editor',
    templateUrl: './editor.component.html'
})
export class ThemeEditorComponent {
    data: any = {
        'primary-color': '#1890ff',
        'font-family': `"Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        'font-size-base': '14px',
        'icon-url': `"https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i"`
    };
    code: string;

    constructor(private modalSrv: NzModalService) {}

    private genCode() {
        this.code = Object.keys(this.data).map(key => `@${key}: ${this.data[key]};`).join('\n');
    }

    apply() {}

    show(tplContent: TemplateRef<{}>) {
        this.genCode();
        this.modalSrv.create({
            nzContent: tplContent,
            nzFooter: null,
            nzClosable: false,
            nzWidth: 800
        });
    }
}
