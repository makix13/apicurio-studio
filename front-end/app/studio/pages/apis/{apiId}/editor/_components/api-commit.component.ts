/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "api-commit",
    templateUrl: "api-commit.component.html",
    styleUrls: ["api-commit.component.css"]
})
export class ApiCommitComponent {

    @Input() disabled: boolean;
    @Input() saving: boolean;
    @Output() onSave: EventEmitter<any> = new EventEmitter<any>();

    protected isOpen: boolean = false;

    public toggled(value: boolean): void {
        this.isOpen = value;
    }

    public save(data: any): void {
        this.onSave.emit(data);
        this.isOpen = false;
    }

    public cancel(): void {
        this.isOpen = false;
    }

}
